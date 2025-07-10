# UI/UX Dev – Eventure

## Responsibilities
- Design and implement the React UI for all participant and admin pages.
- Ensure navigation is smooth and intuitive.
- Style the app using TailwindCSS, following the design system and accessibility guidelines.
- Make the app mobile-friendly and responsive.
- Handle loading, error, and empty states for all components.
- Collaborate with other devs to integrate backend and QR logic.

## Pages/Components to Build
- Home/Login page (nickname input, redirect logic)
- Dashboard (scan, progress, leaderboard options)
- Progress page (list of completed checkpoints, XP/completion %)
- Leaderboard page (top users by checkpoints scanned)
- Admin panel UI (add/edit checkpoints, view scan counts, generate QR)
- Shared layout, navigation, and feedback components

## Files to Create
- `/src/components/`:
  - `LoginForm.jsx`
  - `Dashboard.jsx`
  - `ProgressList.jsx`
  - `Leaderboard.jsx`
  - `AdminPanel.jsx`
  - `NavBar.jsx`
  - `LoadingSpinner.jsx`
  - `ErrorMessage.jsx`
- `/src/pages/`:
  - `Home.jsx`
  - `DashboardPage.jsx`
  - `ProgressPage.jsx`
  - `LeaderboardPage.jsx`
  - `AdminPage.jsx`
- `/src/styles/`:
  - `tailwind.config.js` (if not present)


## Docs to Update
- `README.md` (UI/UX section) – updated with component/page list and accessibility notes
- Add screenshots or UI flow diagrams if possible (recommended for next phase)

---
- Follow the coding and UI guidelines in `eventure.md` and project instructions.
- Register all new components in the app routing/module system.
- Write or update tests for all UI components.
