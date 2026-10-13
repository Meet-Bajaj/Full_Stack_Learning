# Lesson 09: DevOps Interview Questions

## Learning Objectives
- Master Docker and containerization concepts.
- Understand CI/CD pipelines and deployment strategies.
- Explain monitoring, observability, and basic Linux commands.

## 1. Docker and Containers

**Concept:** Containers package up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.
**Virtual Machines vs Containers:** VMs virtualize the hardware and include a full guest OS. Containers virtualize the OS, sharing the host OS kernel, making them much lighter and faster to start.

## 2. CI/CD (Continuous Integration / Continuous Deployment)

- **Continuous Integration:** The practice of merging all developer working copies to a shared mainline several times a day. Automated tests are run to verify the build.
- **Continuous Deployment:** Every change that passes all stages of the production pipeline is released to your customers. There's no human intervention.

## 3. Deployment Strategies

- **Blue/Green Deployment:** Running two identical production environments (Blue and Green). Only one is live. Deploy to the idle one, test, then switch traffic.
- **Canary Deployment:** Rolling out a release to a small subset of users before pushing it to the entire infrastructure.

## 4. Monitoring & Observability

- **Metrics:** Aggregated data over time (e.g., CPU usage, error rates).
- **Logs:** Immutable, timestamped records of discrete events.
- **Traces:** Representation of a series of causally related distributed events (tracing a request through microservices).

## Summary & Checklist
- [ ] Explain the difference between an image and a container.
- [ ] Describe the benefits of Blue/Green deployments.
- [ ] Understand the three pillars of observability.
