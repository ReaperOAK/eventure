# Orchestrator – Eventure

## Responsibilities
- Set up routing, state management, and app bootstrapping.
- Integrate UI, QR, and backend modules into a seamless workflow.
- Handle deployment (Vercel/Netlify), environment configs, and debugging.
- Ensure all features are connected and tested end-to-end.
- Coordinate with all team members for smooth delivery.

## Features/Logic to Build
- App router (React Router or similar)
- Global state (Context or minimal state manager)
- Environment config and deployment scripts
- End-to-end integration tests
- Build/test/deploy pipeline setup

## Files to Create
- `/src/`:
  - `App.tsx` (main app shell)
  - `routes.tsx` (routing config)
  - `store.ts` (global state, if needed)
  - `env.ts` (environment config)
- `/scripts/`:
  - `deploy.ps1` or `deploy.sh` (deployment script)
- `/tests/`:
  - `e2e/` (integration tests)

## Docs to Update
- `README.md` (integration/deployment section)
- Add architecture diagrams or deployment notes

---
- Follow project structure and deployment guidelines in `eventure.md`.
- Register all new files in the app and update docs/tests.
