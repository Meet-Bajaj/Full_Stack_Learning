# Lesson 1: Deployment Fundamentals

## What is Deployment?
Deployment is the final stage of the software development lifecycle. It involves pushing your tested, working code from your local machine to a remote environment where users can interact with it.

## Deployment Environments
A standard professional setup uses multiple isolated environments:
1.  **Development (Local):** Where engineers write code. Uses local databases and mock services.
2.  **Staging (Pre-Prod):** An exact replica of the production environment. Used for final QA testing, client demos, and verifying deployment scripts. Real database, but dummy data.
3.  **Production (Prod):** The live environment serving real users. High security, monitored, and scaled.

## The Deployment Checklist
Before deploying to production, ensure:
- All tests pass (Unit, Integration, E2E).
- Environment variables are securely set.
- Database migrations have been tested on staging.
- Build artifacts are optimized (minified, bundled).
- Backups are verified.
