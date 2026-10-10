# Lesson 5: CI/CD Deployment

## What is CI/CD?
- **Continuous Integration (CI):** Automatically running tests and linters every time code is pushed. Ensures the `main` branch is always stable.
- **Continuous Deployment (CD):** Automatically deploying the stable code to the production server.

## GitHub Actions Basics
GitHub Actions allows you to run workflows based on GitHub events (like a push to the `main` branch). Workflows are defined in YAML files inside the `.github/workflows/` directory.

## Automated VPS Deployment Workflow
A standard pipeline to deploy to a VPS:
1. Trigger on push to `main`.
2. Checkout the code.
3. Setup Node.js and run tests (CI).
4. Build the Docker image.
5. Push the image to Docker Hub (or GitHub Container Registry).
6. SSH into the VPS via the `appleboy/ssh-action`.
7. Pull the latest image and restart the containers.

*Note: Never hardcode server IPs or SSH keys in the workflow file. Use GitHub Secrets.*
