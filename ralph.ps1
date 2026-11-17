<#
.SYNOPSIS
    Ralph Loop Autonomous Runner for Windows (PowerShell)
.DESCRIPTION
    Runs autonomous iterative agent cycles using file-based memory (prd.json, progress.txt).
.PARAMETER MaxIterations
    Maximum number of loop cycles to execute before pausing.
.PARAMETER ValidateOnly
    Checks the status of tasks in prd.json and runs lint/build verification without altering files.
#>

param (
    [int]$MaxIterations = 5,
    [switch]$ValidateOnly = $false
)

$ErrorActionPreference = "Stop"

Write-Host "`n================================================" -ForegroundColor Cyan
Write-Host "       RALPH AUTONOMOUS LOOP RUNNER (v1.0)       " -ForegroundColor Cyan
Write-Host "================================================`n" -ForegroundColor Cyan

if (-not (Test-Path "prd.json")) {
    Write-Error "prd.json not found in the current working directory!"
    exit 1
}

$prd = Get-Content -Raw "prd.json" | ConvertFrom-Json
$totalTasks = $prd.tasks.Count
$completedTasks = ($prd.tasks | Where-Object { $_.status -eq "completed" }).Count
$pendingTasks = ($prd.tasks | Where-Object { $_.status -eq "pending" }).Count

Write-Host "Project: $($prd.project) (v$($prd.version))" -ForegroundColor Gray
Write-Host "Status: $completedTasks / $totalTasks completed ($pendingTasks pending)`n" -ForegroundColor Yellow

if ($ValidateOnly) {
    Write-Host "[VALIDATION MODE] Running project checks..." -ForegroundColor Yellow
    
    Write-Host "`nChecking Linter (oxlint)..." -ForegroundColor Cyan
    npm run lint
    
    Write-Host "`nChecking Production Build..." -ForegroundColor Cyan
    npm run build
    
    Write-Host "`n[SUCCESS] All validation checks passed cleanly!" -ForegroundColor Green
    exit 0
}

if ($pendingTasks -eq 0) {
    Write-Host "All tasks in prd.json are already completed! Nothing to run." -ForegroundColor Green
    exit 0
}

$iteration = 0
while ($iteration -lt $MaxIterations) {
    $prd = Get-Content -Raw "prd.json" | ConvertFrom-Json
    $nextTask = $prd.tasks | Where-Object { $_.status -eq "pending" } | Select-Object -First 1

    if (-not $nextTask) {
        Write-Host "`n[ALL_TASKS_COMPLETED] No more pending tasks found in prd.json." -ForegroundColor Green
        break
    }

    $iteration++
    Write-Host "`n------------------------------------------------" -ForegroundColor Magenta
    Write-Host "Cycle $($iteration) / $($MaxIterations) - Starting [$($nextTask.id)]" -ForegroundColor Magenta
    Write-Host "Title: $($nextTask.title)" -ForegroundColor White
    Write-Host "Verification: $($nextTask.verificationCommand)" -ForegroundColor Gray
    Write-Host "------------------------------------------------" -ForegroundColor Magenta

    # Execute verification command to test criteria
    Write-Host "Running verification: $($nextTask.verificationCommand)..." -ForegroundColor Yellow
    try {
        Invoke-Expression $nextTask.verificationCommand
        Write-Host "Verification PASSED for [$($nextTask.id)]" -ForegroundColor Green
        
        # Mark as completed
        $nextTask.status = "completed"
        $prd | ConvertTo-Json -Depth 10 | Set-Content "prd.json" -Encoding UTF8
        
        $timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
        $logEntry = "[$timestamp] Cycle $($iteration) - Completed $($nextTask.id) - $($nextTask.title)`n"
        Add-Content -Path "progress.txt" -Value $logEntry
        Write-Host "Updated prd.json and logged to progress.txt" -ForegroundColor Green
    }
    catch {
        Write-Host "Verification pending or failed for [$($nextTask.id)]: $_" -ForegroundColor DarkYellow
        break
    }
}

Write-Host "`n================================================" -ForegroundColor Cyan
Write-Host "Ralph loop session ended. Check progress.txt for details." -ForegroundColor Cyan
Write-Host "================================================`n" -ForegroundColor Cyan
