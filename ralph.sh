#!/usr/bin/env bash
# Ralph Loop Autonomous Runner for Bash / Linux / macOS / WSL

set -euo pipefail

echo "================================================"
echo "       RALPH AUTONOMOUS LOOP RUNNER (v1.0)       "
echo "================================================"

if [ ! -f "prd.json" ]; then
  echo "Error: prd.json not found!"
  exit 1
fi

MAX_ITERATIONS="${1:-5}"
echo "Max iterations: $MAX_ITERATIONS"

iteration=0
while [ $iteration -lt $MAX_ITERATIONS ]; do
  iteration=$((iteration + 1))
  echo "--- Cycle $iteration / $MAX_ITERATIONS ---"

  # Run verification
  npm run lint
  npm run build

  echo "Validation passed."
  break
done

echo "Ralph loop cycle complete."

