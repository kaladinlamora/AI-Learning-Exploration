# GitHub Actions Plan

This project includes a starter workflow at `.github/workflows/ci-cd.yml` to keep quality checks running while the frontend is being built.

## Workflow Goals

1. Run quality checks on every pull request.
2. Verify that new code builds before merge.
3. Keep the pipeline stable both before and after JS initialization.

## Current Pipeline

### Quality Job (CI)

- Triggered on push, pull request, and manual dispatch.
- Detects whether `package.json` exists.
- Only after detection, configures Node.js 20 with npm cache.
- If initialized, runs:
  - `npm ci`
  - `npm run lint --if-present`
  - `npm run typecheck --if-present`
  - `npm test --if-present`
  - `npm run build --if-present`
- If not initialized, exits with an informational success message.

## CI Failure Note (Prepared Comment)

> The CI failure happened because `actions/setup-node` with `cache: npm` ran before dependency files were guaranteed to exist. Without a lockfile (`package-lock.json`), setup failed early. The workflow now detects `package.json` first, then conditionally runs Node setup and npm caching. Test execution was also made more portable with `npm test --if-present`.

## Recommended Next Steps

1. Reintroduce preview/production deploy jobs once hosting is selected.
2. Add branch protection required checks for `Lint, Test, Build`.
3. Expand automated checks with accessibility and end-to-end tests.
