# Firebase Dev – TODO Checklist

## Initial Setup
- [x] Review `eventure.md` and database structure
- [x] Set up Firebase project and Firestore
- [x] Create folder structure for services and config

## Backend Logic
- [x] Implement `firebaseConfig.js` (Firebase setup)
- [x] Implement `userService.js` (user CRUD)
- [x] Implement `checkpointService.js` (checkpoint CRUD)
- [x] Implement `scanService.js` (scan logic)
- [x] Implement `leaderboardService.js` (leaderboard logic)
- [x] Write Firestore security rules (`firestore.rules`)
- [x] Create Firestore indexes (`firestore.indexes.json`)

## Features
- [x] Functions for registering users, recording scans, validating time/location/duplicates
- [ ] Admin checkpoint management endpoints
- [x] Fetch leaderboard and progress data

## Integration
- [ ] Provide API/services for frontend
- [ ] Collaborate with QR and UI/UX devs

## Testing & Docs
- [ ] Write/update tests for backend logic
- [ ] Add ER/data flow diagrams to docs
- [ ] Update `README.md` (backend/Firebase section)
