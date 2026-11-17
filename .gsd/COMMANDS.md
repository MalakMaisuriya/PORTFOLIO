# GSD Command Reference & Workflow Guide

Reference: [gsd-build/get-shit-done COMMANDS.md](https://github.com/gsd-build/get-shit-done/blob/main/docs/COMMANDS.md)

This document provides the standard commands for managing this portfolio repository using **Get Shit Done (GSD)** spec-driven development.

---

## 1. Project Initialization & Onboarding
* **`/gsd-new-project`**: Run when starting a greenfield project to generate `PROJECT.md`, `REQUIREMENTS.md`, and `ROADMAP.md`.
* **`/gsd-onboard`**: Analyze an existing brownfield codebase, map files, extract architecture, and build the initial spec files in `.gsd/`.

---

## 2. Phase-Based Planning & Discussion
* **`/gsd-discuss-phase [N]`**:
  - Pre-planning alignment step.
  - Discuss technical considerations, styling decisions, or component architecture before writing code.
* **`/gsd-plan-phase [N]`**:
  - Researches relevant components, writes `.gsd/phases/XX/PLAN.md`.
  - Defines precise tasks, affected files, edge cases, and verification commands.
* **`/gsd-edit-phase [N]`**:
  - Modify scope or task details of an existing phase plan before execution.

---

## 3. Execution & Verification Loops
* **`/gsd-execute-phase [N]`**:
  - Executes tasks in fresh agent context steps to avoid token drift and context degradation.
  - Runs automated checks (`npm run lint`, `npm run build`) after each step.
  - Produces `.gsd/phases/XX/SUMMARY.md` on completion.
* **`/gsd-verify-work [N]`**:
  - Runs end-to-end verification and acceptance tests against `REQUIREMENTS.md`.
* **`/gsd-code-review`**:
  - Performs multi-perspective code review focusing on:
    - React 19 rules & memoization
    - Three.js memory leaks (disposal of textures/geometries/materials)
    - Tailwind CSS v4 class validity
    - Accessibility (a11y) & mobile responsiveness
* **`/gsd-ship [N]`**:
  - Finalizes phase deliverables, verifies git status, and stages atomic commits.

---

## 4. Quick Execution Scripts in this Project
You can run automated quality checks anytime via npm:
```bash
npm run gsd:verify     # Runs oxlint + vite production build
npm run ralph          # Runs the autonomous Ralph loop (PowerShell on Windows)
npm run ralph:verify   # Validates backlog status without making changes
```

