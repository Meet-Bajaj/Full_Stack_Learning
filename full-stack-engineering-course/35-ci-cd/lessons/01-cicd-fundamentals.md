# Lesson 01: CI/CD Fundamentals

## Learning Objectives
By the end of this lesson, you will be able to:
- Define Continuous Integration (CI), Continuous Delivery (CD), and Continuous Deployment (CD).
- Explain the business and technical benefits of a CI/CD pipeline.
- Identify the core stages of a standard deployment pipeline.

---

## 1. What is CI/CD?

In the old days of software development, teams would work on features in isolation for months. During "Integration Phase," everyone merged their code together, resulting in "Merge Hell"—conflicts, broken builds, and unpredictable bugs. Deployment was a manual, error-prone weekend event.

**CI/CD is the automation of the software release process.**

### Continuous Integration (CI)
The practice of merging all developers' working copies to a shared mainline several times a day.
- **Goal:** Detect integration errors as quickly as possible.
- **Action:** Every time a developer pushes code, an automated server builds the app and runs all unit and integration tests. If it fails, the code is rejected.

### Continuous Delivery (CD)
An extension of CI. Not only is the code built and tested, but it is also automatically packaged and prepared for release to a production environment.
- **Goal:** Ensure the software can be reliably released at any time.
- **Action:** Artifacts (like Docker images or ZIP files) are generated and deployed to a Staging environment. A human pushes a button to deploy to Production.

### Continuous Deployment (CD)
The ultimate level of automation. Every change that passes all stages of the production pipeline is released to users automatically, with no human intervention.
- **Goal:** Eliminate the bottleneck of manual approvals, enabling multiple deployments per day.
- **Action:** Code pushed to `main` -> CI tests pass -> Deploys straight to Production.

---

## 2. The Mental Model: The Factory Assembly Line

Think of CI/CD like an automated car manufacturing plant.
1. **Source Code (Raw Materials):** A developer pushes a steering wheel design.
2. **Build (Assembly):** The factory automatically attaches the steering wheel to the dashboard.
3. **Test (Quality Control):** A robotic arm pulls the wheel to ensure it doesn't fall off. If it snaps, the line stops, and an alarm sounds (Build Failed).
4. **Deploy (Delivery):** If it passes, the car rolls onto the showroom floor (Production).

If a human had to manually assemble the car and test it every time, it would take weeks. The pipeline ensures consistency and speed.

---

## 3. Core Stages of a Pipeline

A typical pipeline looks like this:

1. **Source / Trigger:** A PR is opened, or code is pushed to the `main` branch.
2. **Install:** Download dependencies (e.g., `npm ci`).
3. **Lint & Format:** Check code style (e.g., ESLint, Prettier).
4. **Type Check:** Ensure type safety (e.g., `tsc --noEmit`).
5. **Test:** Run Unit and Integration tests.
6. **Build:** Compile the code (e.g., Webpack, Next.js build) or build a Docker Image.
7. **Deploy to Staging:** Push to a non-production environment.
8. **E2E Tests:** Run end-to-end tests (Cypress/Playwright) against the staging URL.
9. **Deploy to Production:** (Manual approval or automatic).

## Summary
- **CI** is about testing code often.
- **Continuous Delivery** means code is *ready* to deploy.
- **Continuous Deployment** means code *is* deployed automatically.
- CI/CD prevents "It works on my machine" bugs and manual deployment disasters.
