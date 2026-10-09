# Lesson 07: Deployment Strategies

## Learning Objectives
By the end of this lesson, you will be able to:
- Contrast different deployment strategies (Rolling, Blue-Green, Canary).
- Understand how zero-downtime deployments work.
- Handle database migrations safely during deployment.

---

## 1. The Problem with Standard Deployments

In the previous lesson, our deploy script looked like this:
`docker stop myapp && docker run ...`

For a few seconds between stopping the old container and starting the new one, the application is offline. Any user clicking a link will get a **502 Bad Gateway**. This is unacceptable for high-traffic apps.

---

## 2. Zero-Downtime Deployment Strategies

### A. Rolling Deployment (Common in Kubernetes / PM2)
Instead of taking down the whole app, you replace instances one by one.
If you have 4 server nodes running v1:
- Take down Node 1. Update to v2. (Nodes 2,3,4 handle traffic).
- Take down Node 2. Update to v2.
- Continue until all nodes are v2.
**Pros:** Easy to implement, zero downtime.
**Cons:** For a brief period, v1 and v2 are running simultaneously. Code must be strictly backwards compatible.

### B. Blue-Green Deployment
You maintain two completely identical production environments (Blue and Green).
- Blue is currently live (v1).
- You deploy v2 to Green. You run all tests on Green.
- Once verified, you flip a switch at the Load Balancer (Nginx/AWS Route53) to route all traffic to Green.
- Blue becomes the new idle environment.
**Pros:** Instant rollback (just flip the switch back).
**Cons:** Expensive (requires 2x the infrastructure).

### C. Canary Release
Deploy the new version (v2) to a small subset of users (e.g., 5% of traffic). Monitor error rates and logs. If everything is fine, gradually increase traffic to 100%.
**Pros:** Safest approach; bugs affect very few users.
**Cons:** Requires advanced load balancing and monitoring telemetry.

---

## 3. Database Migrations in Deployment

Deploying code is fast; altering a 100-million-row database table takes hours.

### The Golden Rule of Migrations
**Never make a breaking database change (like dropping a column) in the same deployment that removes the code using it.**

### Example: Renaming a column from `firstName` to `first_name`.
If you deploy the code and run the migration simultaneously, one will finish before the other, causing a crash.

**The Safe 3-Step Process (Expand and Contract Pattern):**
1. **Deploy 1 (Expand):** Add the new column `first_name`. Update the code to write to BOTH columns, but read from the old one.
2. **Data Migration:** Run a background script to copy old data from `firstName` to `first_name`.
3. **Deploy 2 (Contract):** Update code to read/write ONLY to `first_name`.
4. **Deploy 3 (Cleanup):** Drop the old `firstName` column.

## Summary
- Zero-downtime is achieved by keeping the old version running while the new version spins up.
- Blue-Green allows for instant rollbacks.
- Database migrations must be backwards-compatible to prevent downtime during Rolling or Blue-Green deployments.
