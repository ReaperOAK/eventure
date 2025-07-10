# Eventure

Smart QR-based Checkpoint Tracker for Fests

## Getting Started

1. **Install dependencies:**
   ```powershell
   npm install
   ```
2. **Start development server:**
   ```powershell
   npm run dev
   ```
3. **Build for production:**
   ```powershell
   npm run build
   ```
4. **Run tests:**
   ```powershell
   npm test
   ```


## Project Structure

- `src/components/` – UI components (LoginForm, Dashboard, ProgressList, Leaderboard, AdminPanel, NavBar, LoadingSpinner, ErrorMessage, ScanFeedback, QRScanner)
- `src/pages/` – Page components (Home, DashboardPage, ProgressPage, LeaderboardPage, AdminPage, ScanPage)
- `src/services/` – Firebase, scan, user, checkpoint, leaderboard logic
- `src/utils/` – QR, geo, helpers
- `src/styles/` – Tailwind config, global styles
- `firebase/` – Firestore rules, indexes
- `scripts/` – Deployment/build scripts
- `tests/` – Unit/integration/e2e tests


## UI/UX Overview

- Built with React + TailwindCSS for a mobile-first, accessible experience.
- All main pages: Login, Dashboard, Scan QR, Progress, Leaderboard, Admin Panel.
- Modular, reusable components for feedback, navigation, and state handling.
- All interactive elements have hover, active, and disabled states.
- Loading, error, and empty states handled throughout.
- Keyboard and screen reader accessible.
- See `/planning and scopes/team-roles/ui-ux-dev (Owais)/ui-ux-dev.md` for detailed UI/UX responsibilities and checklist.

## Team Roles & Docs
- See `planning and scopes/` for team roles, todos, and feature docs.

## Setup Notes
- TailwindCSS, Firebase, and all major dependencies are preconfigured.
- See `/planning and scopes/` for feature breakdowns and responsibilities.

---


---

For more, see the docs in `planning and scopes/` and update this README as you go!
