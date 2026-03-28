# GitHub Actions Plan

This project now includes a starter workflow at `.github/workflows/ci-cd.yml` to establish a clean CI/CD baseline before the app code is fully scaffolded.

## Workflow Goals

1. Run quality checks on every pull request.
2. Verify that new code builds before merge.
3. Provide clear hooks for preview and production deployment.
4. Keep early workflows stable even before `package.json` exists.

## Current Pipeline

### 1) Quality Job (CI)

- Triggered on push, pull request, and manual dispatch.
- Checks out code and configures Node.js 20.
- Detects whether a JavaScript/TypeScript project has been initialized.
- If initialized, runs:
  - `npm ci`
  - `npm run lint --if-present`
  - `npm run typecheck --if-present`
  - `npm test -- --ci --watch=false`
  - `npm run build --if-present`
- If not initialized, exits with a clear informational success message.

### 2) Deploy Preview Job (placeholder)

- Runs on pull requests after Quality succeeds.
- Intended for preview URL deployment via provider integration.

### 3) Deploy Production Job (placeholder)

- Runs on pushes to `main` after Quality succeeds.
- Intended for production deployment once hosting choice is finalized.

## Recommended Next Steps

1. Pick a hosting provider (Vercel, Netlify, GitHub Pages, or custom cloud).
2. Replace placeholder deploy steps with provider-specific actions and required secrets.
3. Add status badges in `README.md` once the workflow is active.
4. Add required status checks in repository branch protection:
   - `Lint, Test, Build`
5. Expand tests over time:
   - unit tests for calculators/simulations
   - integration tests for interactive UI flows
   - accessibility checks

## Optional Follow-ups

- Add separate workflows for:
  - dependency updates
  - security scanning (CodeQL, npm audit)
  - end-to-end tests (Playwright/Cypress)
- Add environment-based deploy approvals for production releases.
