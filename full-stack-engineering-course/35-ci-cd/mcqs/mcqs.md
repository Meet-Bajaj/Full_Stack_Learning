# Module 35: CI/CD MCQs

## Beginner

**Q1: What is the primary goal of Continuous Integration (CI)?**
A) To automatically deploy code to production.
B) To catch integration bugs early by automatically building and testing code on every commit.
C) To manage server infrastructure using code.
D) To replace QA engineers entirely.
**Correct Answer:** B
**Explanation:** CI focuses on merging code frequently and running automated tests to ensure the mainline branch is always stable.
**Difficulty:** Beginner
**Topic:** Fundamentals
**Subtopic:** CI vs CD

**Q2: In GitHub Actions, what is the relationship between Jobs and Steps?**
A) A Step contains multiple Jobs.
B) Jobs run sequentially by default; Steps run in parallel.
C) A Job contains multiple Steps; Jobs run in parallel by default, while Steps run sequentially.
D) They are the exact same thing.
**Correct Answer:** C
**Explanation:** Jobs are independent environments that run simultaneously (unless linked with `needs`). Steps are sequential commands executed within a Job.
**Difficulty:** Beginner
**Topic:** GitHub Actions
**Subtopic:** Hierarchy

## Intermediate

**Q3: Look at the following GitHub Actions snippet:**
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm run build
```
**What is the recommended change to make this pipeline more deterministic and faster?**
A) Replace `npm install` with `npm ci` and cache the `node_modules`.
B) Change `ubuntu-latest` to `windows-latest`.
C) Remove `actions/checkout@v4`.
D) Run `npm update` before `npm install`.
**Correct Answer:** A
**Explanation:** `npm ci` ensures exact dependency versions based on `package-lock.json` and is faster. Caching prevents downloading unchanged packages.
**Difficulty:** Intermediate
**Topic:** Build Pipeline
**Subtopic:** Optimization

**Q4: Job A compiles your Next.js application into a `.next` folder. Job B is responsible for deploying the app. Job B fails because it cannot find the `.next` folder. Why?**
A) Next.js cannot run in GitHub Actions.
B) Jobs run on isolated virtual machines. Files created in Job A are not automatically available in Job B.
C) You need to run `git commit` inside Job A.
D) The `.next` folder is hidden and ignored by GitHub.
**Correct Answer:** B
**Explanation:** You must use `actions/upload-artifact` in Job A and `actions/download-artifact` in Job B to pass files between isolated job environments.
**Difficulty:** Intermediate
**Topic:** Artifacts
**Subtopic:** State Transfer

## Advanced / Production

**Q5: Which deployment strategy involves spinning up a completely new, identical production environment (V2), testing it, and then instantly swapping the Load Balancer traffic from the old environment (V1) to V2?**
A) Canary Release
B) Rolling Deployment
C) Blue-Green Deployment
D) In-Place Deployment
**Correct Answer:** C
**Explanation:** Blue-Green deployment utilizes two identical environments to achieve zero-downtime deployments with instant rollback capabilities.
**Difficulty:** Advanced
**Topic:** Deployment Strategies
**Subtopic:** Blue-Green

**Q6: You need to rename a database column from `userId` to `user_id`. You are using a zero-downtime rolling deployment. What is the safest way to execute this migration?**
A) Run the migration script in CI before the deployment starts.
B) Add `user_id`, update the code to write to both, run a data migration script, then remove `userId` in a subsequent deployment.
C) Put the database in read-only mode during the deployment.
D) Drop the table and recreate it.
**Correct Answer:** B
**Explanation:** This is the Expand-and-Contract pattern. Because old and new code run simultaneously during a rolling deploy, breaking schema changes must be done in multiple backwards-compatible phases.
**Difficulty:** Production
**Topic:** Migrations
**Subtopic:** Zero-Downtime
