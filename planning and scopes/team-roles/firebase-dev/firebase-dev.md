# Firebase Dev – Eventure

## Responsibilities
- Set up and configure Firebase Firestore for users, checkpoints, and scans.
- Implement backend logic for scan validation, anti-cheat, and data updates.
- Write Firestore security rules to prevent cheating and unauthorized access.
- Provide API endpoints/services for frontend to interact with Firestore.
- Support admin features (add/edit checkpoints, generate QR, view scan counts).
- Collaborate with QR and UI/UX devs for integration.

## Features/Logic to Build
- Firestore collections: `users`, `checkpoints`, `scans`
- Functions for:
  - Registering users
  - Recording scans
  - Validating time/location/duplicate scans
  - Fetching leaderboard and progress data
  - Admin checkpoint management
- Security rules for all collections

## Files to Create
- `/src/services/`:
  - `firebaseConfig.ts` (Firebase setup)
  - `userService.ts` (user CRUD)
  - `checkpointService.ts` (checkpoint CRUD)
  - `scanService.ts` (scan logic)
  - `leaderboardService.ts` (leaderboard logic)
- `/firebase/`:
  - `firestore.rules` (security rules)
  - `firestore.indexes.json` (indexes)

## Docs to Update
- `README.md` (backend/Firebase section)
- Add ER diagrams or data flow diagrams if possible

---
- Follow DB structure and security guidelines in `eventure.md`.
- Register all new services and update docs/tests.
