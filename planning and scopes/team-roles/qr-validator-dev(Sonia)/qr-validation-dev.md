# QR + Validation Dev – Eventure

## Responsibilities
- Implement QR scanning logic using `react-qr-reader` or `html5-qrcode`.
- Handle camera access, QR detection, and error states.
- Validate scanned QR tokens against backend (checkpoint, time window, location, rescans).
- Integrate with Firestore to record valid scans.
- Obfuscate QR data and ensure anti-cheat logic is enforced.
- Collaborate with UI/UX and Firebase devs for seamless integration.

## Features/Logic to Build
- QR scan component (camera, scan, feedback)
- Token validation (call backend, check time/location, prevent rescans)
- Geolocation check (browser API, 100m radius)
- Error handling (invalid QR, out of bounds, duplicate scan, etc.)

## Files to Create
- `/src/components/`:
  - `QRScanner.tsx`
  - `ScanFeedback.tsx`
- `/src/utils/`:
  - `qrUtils.ts` (QR parsing, obfuscation)
  - `geoUtils.ts` (distance calculation)
- `/src/services/`:
  - `scanService.ts` (API calls, validation logic)

## Docs to Update
- `README.md` (QR/validation section)
- Add sequence diagrams or flowcharts for scan/validation logic

---
- Follow anti-cheat and security guidelines in `eventure.md`.
- Register all new components and services in the app.
- Write or update tests for all QR/validation logic.
