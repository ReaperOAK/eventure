# QR + Validation Dev – TODO Checklist

## Initial Setup
- [ ] Review `eventure.md` and anti-cheat requirements
- [ ] Set up QR scanning library (`react-qr-reader` or `html5-qrcode`)
- [ ] Create folder structure for components, utils, and services

## QR & Validation Logic
- [ ] Build `QRScanner.tsx` (camera, scan, feedback)
- [ ] Build `ScanFeedback.tsx` (scan result UI)
- [ ] Implement `qrUtils.ts` (QR parsing, obfuscation)
- [ ] Implement `geoUtils.ts` (distance calculation)
- [ ] Implement `scanService.ts` (API calls, validation logic)
- [ ] Integrate geolocation check (100m radius)
- [ ] Handle error states (invalid QR, out of bounds, duplicate scan)

## Integration
- [ ] Connect scan logic to Firestore via backend services
- [ ] Collaborate with UI/UX and Firebase devs for smooth flow

## Testing & Docs
- [ ] Write/update tests for QR/validation logic
- [ ] Add sequence diagrams/flowcharts to docs
- [ ] Update `README.md` (QR/validation section)
