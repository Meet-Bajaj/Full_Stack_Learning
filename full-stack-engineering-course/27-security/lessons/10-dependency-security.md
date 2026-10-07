# Lesson 10: Dependency Security

## Learning Objectives
- Identify Supply-Chain attacks.
- Secure npm dependencies.
- Automate security with Dependabot/Snyk.

## Supply-Chain Attacks
Modern apps rely on thousands of transitive dependencies. If a maintainer of a small package is compromised, the malicious code propagates to everyone using it.

## Mitigation
- Use lockfiles (`package-lock.json`, `yarn.lock`) to ensure deterministic builds.
- Run `npm audit` in CI.
- Use tools like Snyk or GitHub Dependabot to automatically open PRs for vulnerable packages.
- Vet packages before adding them (check downloads, maintenance activity, and repository).
