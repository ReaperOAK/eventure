# Firebase Dev – TODO Checklist

## Initial Setup
- [ ] Review `eventure.md` and database structure
- [ ] Set up Firebase project and Firestore
- [ ] Create folder structure for services and config

## Backend Logic
- [ ] Implement `firebaseConfig.ts` (Firebase setup)
- [ ] Implement `userService.ts` (user CRUD)
- [ ] Implement `checkpointService.ts` (checkpoint CRUD)
- [ ] Implement `scanService.ts` (scan logic)
- [ ] Implement `leaderboardService.ts` (leaderboard logic)
- [ ] Write Firestore security rules (`firestore.rules`)
- [ ] Create Firestore indexes (`firestore.indexes.json`)

## Features
- [ ] Functions for registering users, recording scans, validating time/location/duplicates
- [ ] Admin checkpoint management endpoints
- [ ] Fetch leaderboard and progress data

## Integration
- [ ] Provide API/services for frontend
- [ ] Collaborate with QR and UI/UX devs

## Testing & Docs
- [ ] Write/update tests for backend logic
- [ ] Add ER/data flow diagrams to docs
- [ ] Update `README.md` (backend/Firebase section)
