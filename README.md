# UI/UX Overview

## Component & Page List

- **LoginForm**: Nickname login form with validation and accessibility.
- **Dashboard**: Main user dashboard with navigation to Scan, Progress, Leaderboard, and Admin.
- **NavBar**: Sticky navigation bar for all main pages.
- **ScanPage / QRScanner**: QR code scanning interface with loading, error, and result states.
- **ProgressPage / ProgressList**: Shows completed checkpoints, progress bar, and list.
- **LeaderboardPage / Leaderboard**: Displays top users and scores.
- **AdminPage / AdminPanel**: Admin checkpoint management UI.
- **LoadingSpinner, ErrorMessage, ScanFeedback**: Shared UI state components.

## Accessibility & Design System

- **Mobile-first, responsive**: All pages/components adapt to mobile and desktop.
- **Color palette**: Uses accessible, high-contrast colors (see `/src/styles/colour_scheme.md`).
- **Typography**: Consistent scale, readable fonts.
- **ARIA & semantics**: All forms, buttons, and alerts use ARIA roles/labels.
- **Keyboard navigation**: All interactive elements are keyboard accessible.
- **Loading/Error/Empty states**: Every page/component handles these states.
- **Theming**: TailwindCSS for consistent spacing, color, and sizing.

## UI Flow Diagrams/Screenshots

Add diagrams or screenshots here to illustrate user journeys and page flows. Example template:

```
[Home/Login] → [Dashboard]
   ├─> [Scan QR]
   ├─> [Progress]
   ├─> [Leaderboard]
   └─> [Admin Panel]
```

*(Insert screenshots or Figma links as available)*

## Testing

- All major UI components have unit tests in `/tests/`.
- Run tests with your preferred runner (Jest + React Testing Library recommended).

## Integration

- Components/pages are registered and imported in the app.
- Placeholder/sample data is used where backend is not yet integrated.

---

For more, see `/planning and scopes/team-roles/ui-ux-dev (Owais)/ui-ux-dev.md` and `/planning and scopes/eventure.md`.
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

## Deployment

### Prerequisites
- Node.js 18+ and npm installed
- Firebase CLI installed (`npm install -g firebase-tools`)
- Firebase project created at https://console.firebase.google.com

### Environment Setup
1. Copy `.env.example` to `.env`:
   ```powershell
   copy .env.example .env
   ```
2. Fill in your Firebase configuration in `.env`
3. Ensure Firestore is enabled in your Firebase project

### Deploy to Firebase
Using the automated deployment script:
```powershell
# Full deployment (build + deploy)
.\scripts\deploy.ps1

# Skip build (use existing dist/ folder)
.\scripts\deploy.ps1 -SkipBuild

# Production deployment
.\scripts\deploy.ps1 -Production
```

Or manually:
```powershell
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

### Sample Data Setup
To populate your Firestore with sample checkpoints and users:
```powershell
node scripts/populate-sample-data.js
```

### Live URLs
- **Production App**: https://eventure-fest.web.app
- **Firebase Console**: https://console.firebase.google.com/project/eventure-fest

### Deployment Checklist
- [ ] `.env` file configured with Firebase credentials
- [ ] Firestore database created and rules deployed
- [ ] Build successful (`npm run build`)
- [ ] Firebase hosting deployed
- [ ] Sample data populated (optional)
- [ ] App accessible at live URL

## Architecture

### Hosting
- **Frontend**: Firebase Hosting (React SPA)
- **Database**: Cloud Firestore
- **Authentication**: localStorage (nickname-based, upgradeable to Firebase Auth)

### Security
- Firestore security rules configured for public read/write (demo mode)
- QR token validation prevents duplicate scans
- Location-based validation (100m radius)
- Time window validation for checkpoints

---

For more, see the docs in `planning and scopes/` and update this README as you go!
