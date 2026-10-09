# Module 35: CI/CD Assessment

## Part 1: Theory
1. Define Continuous Integration, Continuous Delivery, and Continuous Deployment. How do they differ?
2. What is the purpose of caching in a CI/CD pipeline, and what specific folders do we typically cache in a Node.js project?

## Part 2: GitHub Actions Syntax
Write a complete `.github/workflows/ci.yml` file that meets the following requirements:
- Triggers on pushes to the `main` branch.
- Checks out the repository.
- Uses the Matrix Strategy to run tests against Node versions 18 and 20 simultaneously.
- Installs dependencies using the recommended command for CI.
- Runs the test script `npm run test`.

## Part 3: Zero-Downtime Deployments
Explain the **Blue-Green Deployment** strategy.
1. What infrastructure setup is required?
2. How is traffic routed?
3. What is the primary benefit of this strategy compared to a Rolling Deployment?

## Part 4: Security Scenario
A developer accidentally commits an AWS Secret Key to a public GitHub repository.
1. Why is this catastrophic?
2. What automated CI/CD tools or GitHub features should have been in place to prevent or immediately mitigate this?
3. How should secrets be managed securely in a GitHub Actions pipeline?
