# GSD Project Specification: Modern Developer Portfolio

## 1. Project Overview
A high-performance, visually engaging developer portfolio showcasing full-stack expertise, 3D interactive elements, smooth animations, and comprehensive career highlights.

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + PostCSS
- **3D Graphics**: Three.js (WebGL scene with dynamic geometries and interactive lighting)
- **Animations**: Framer Motion 13
- **Icons**: React Icons (FontAwesome, SimpleIcons, Feather)
- **Linting & Code Quality**: Oxlint
- **Architecture**: Modular component-based SPA (Single Page Application)

---

## 2. Core Modules & Architecture
- `src/App.jsx`: Master layout connecting preloader, custom cursor, navigation, sections, and footer.
- `src/components/`:
  - `Hero.jsx`: Immersive landing with dynamic greetings, call to action, and Three.js 3D canvas backdrop.
  - `About.jsx`: Developer background, biography, key metrics, and profile highlights.
  - `Skills.jsx`: Categorized technical skill matrix with visual badges and proficiency levels.
  - `Experience.jsx`: Professional timeline detailing companies, roles, achievements, and impact.
  - `Projects.jsx`: Categorized project showcase with tech stack tags, live demos, and GitHub links.
  - `GitHubDeepDive.jsx`: Open-source metrics, contribution streak, and repository deep dives.
  - `CodingProfiles.jsx`: LeetCode, Codeforces, HackerRank, and GeeksforGeeks badges/stats.
  - `CourseCurriculum.jsx` & `Education.jsx`: Academic credentials, degrees, and certified courses.
  - `Testimonials.jsx` & `Blogs.jsx`: Peer recommendations and technical publications.
  - `FAQ.jsx`: Interactive accordion addressing common client/employer inquiries.
  - `Contact.jsx`: Responsive inquiry form with validation and direct communication links.
  - `Preloader.jsx` & `CustomCursor.jsx`: High-polish user experience enhancements.
- `src/data/portfolioData.js`: Centralized data store feeding all dynamic content across components.

---

## 3. Guiding Principles & Standards
1. **Zero Lint Errors & Warnings**: Maintain clean oxlint runs on every build.
2. **Resource Cleanup**: Always properly dispose of Three.js geometries, materials, and requestAnimationFrame listeners on component unmount.
3. **Responsive by Default**: Flawless visual hierarchy across mobile (<640px), tablet (640-1024px), and desktop (>1024px).
4. **Performance First**: Optimized asset loading, lightweight dependencies, and instant Vite hot-module replacement.

