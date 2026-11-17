# GSD Roadmap: Portfolio Development & Polish

## Phase Breakdown

### Phase 1: Code Cleanliness, Standards & Zero-Warning Baseline [IN_PROGRESS]
- **Goal**: Establish a spotless baseline across all source files.
- **Tasks**:
  - [x] Fix unused variables and imports in `Projects.jsx` (`dotColor`).
  - [x] Fix unused imports in `Education.jsx` (`FaCertificate`).
  - [x] Fix unused state in `CustomCursor.jsx` (`isHovered`, `setIsHovered`).
  - [x] Run `oxlint` to guarantee 0 errors and 0 warnings.
  - [x] Verify production build passes cleanly.

### Phase 2: Autonomous Agent Tooling & Spec Infrastructure [COMPLETED]
- **Goal**: Integrate GSD, Ralph Loop, CodeRabbit, and Roo Code configurations into the project.
- **Tasks**:
  - [x] Create `.gsd/` documentation and phase tracking files.
  - [x] Configure `.coderabbit.yaml` for automated PR reviews and React/Three.js rules.
  - [x] Configure `.roomodes` and `.roorules` for Roo Code / Cline.
  - [x] Implement `prd.json`, `progress.txt`, and `prompt.md` for Ralph loop.
  - [x] Create cross-platform Ralph runner scripts (`ralph.ps1` for Windows, `ralph.sh` for Bash).
  - [x] Add helper scripts in `package.json`.

### Phase 3: Interactive Polish & Micro-interactions [UPCOMING]
- **Goal**: Elevate UI feel, 3D responsiveness, and motion consistency.
- **Tasks**:
  - [ ] Fine-tune Three.js canvas responsiveness and particle density based on device DPI.
  - [ ] Add smooth scroll indicators and active navigation section highlighting.
  - [ ] Implement enhanced touch feedback on mobile viewports.

### Phase 4: Performance, SEO & Production Readiness [UPCOMING]
- **Goal**: Maximize Lighthouse scores and audit meta tags.
- **Tasks**:
  - [ ] Audit meta tags, OpenGraph previews, and favicon assets in `index.html`.
  - [ ] Optimize image assets in `src/assets/`.
  - [ ] Run bundle analysis to ensure fast cold loads.

