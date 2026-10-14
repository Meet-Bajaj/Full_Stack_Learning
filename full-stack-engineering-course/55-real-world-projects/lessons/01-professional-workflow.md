# Lesson 01: The Professional Workflow

## Learning Objectives
- Understand the end-to-end software development lifecycle in a professional environment.
- Learn how requirements translate to code and deployment.

## The Complete Pipeline

1. **Ideation & Requirements:** Product managers write PRDs (Product Requirements Documents).
2. **Technical Planning:** Engineering leads write RFCs (Request for Comments) or architecture design docs.
3. **Sprint Planning:** Breaking down tasks into Jira/Linear tickets with story points.
4. **Development:** 
   - Feature branching (`feat/add-auth`).
   - Local development with Docker.
   - Writing unit and integration tests.
5. **Code Review:** Submitting a PR. Peers review for logic, security, and style.
6. **CI/CD:** 
   - Automated tests run on PR.
   - Merge to `main`.
   - Automated deployment pipeline builds and ships the container to staging, then production.
7. **Monitoring & Observability:** Datadog, Sentry, or Prometheus track errors and performance.

## Summary
Real-world engineering is 40% writing code and 60% communication, planning, testing, and debugging.
