# Module 35: CI/CD Interview Questions

## Junior Level

**1. Explain the difference between Continuous Integration and Continuous Deployment.**
*Expected Answer:* 
- **CI** is the practice of frequently merging code to a central repository where automated builds and tests are run to catch bugs early.
- **Continuous Deployment** takes this further by automatically deploying every change that passes the CI tests directly to production without human intervention.

**2. Why do we run `npm ci` instead of `npm install` in a build pipeline?**
*Expected Answer:* `npm ci` (Clean Install) strictly adheres to the versions specified in `package-lock.json` and deletes the existing `node_modules` folder. It guarantees a reproducible, deterministic build, whereas `npm install` might update minor versions and mutate the lockfile.

## Mid Level

**1. How do you pass data between jobs in GitHub Actions?**
*Expected Answer:* Jobs run on isolated virtual machines. To pass data (like a compiled `.next` folder or a binary), Job A must use the `actions/upload-artifact` step to upload the files to GitHub's storage. Job B must have a `needs: JobA` directive and use `actions/download-artifact` to retrieve the files.

**2. What is Docker Layer Caching, and why is it important in CI?**
*Expected Answer:* By default, CI runners are fresh VMs, meaning Docker builds the image from scratch every time, downloading all OS packages and npm dependencies. By using the GitHub Actions cache API (`type=gha`), Docker can save layers from previous builds. If the `package.json` hasn't changed, it reuses the cached `npm install` layer, dropping build times from minutes to seconds.

## Senior Level

**1. Explain a Blue-Green deployment strategy. What problem does it solve?**
*Expected Answer:* It solves the problem of downtime during deployment and makes rollbacks instant. You maintain two identical production environments (Blue is active, Green is idle). You deploy the new code to Green, run health checks against it, and then update the Load Balancer to instantly route all traffic to Green. Blue becomes the new idle environment. If a critical bug is found, you flip the Load Balancer back to Blue instantly.

**2. You need to drop a database column that your application currently uses. How do you deploy this code and run the migration in a zero-downtime CI/CD pipeline without causing errors?**
*Expected Answer:* You must use the Expand-and-Contract pattern. If you deploy code and migrate simultaneously, one finishes first, causing a crash.
Phase 1: Deploy code that ignores the column (or handles its absence gracefully).
Phase 2: Run the database migration to drop the column.
You *never* make a breaking database schema change in the same deployment step that modifies the code relying on it.
