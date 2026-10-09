# Module 35: CI/CD Projects

## Project 1: The Basic Testing Gate
**Difficulty:** Beginner
**Description:** Set up a CI pipeline that protects the `main` branch.
**Requirements:**
- Create a basic Node.js project with one Jest or Vitest unit test.
- Create a GitHub Actions workflow (`.github/workflows/ci.yml`).
- It must trigger on Pull Requests to the `main` branch.
- It must run `npm ci`, `npm run lint`, and `npm test`.
- **Constraint:** Protect the `main` branch in GitHub settings so that it *cannot* be merged unless the CI workflow passes successfully.
- *Test:* Create a PR with a failing test. Verify GitHub blocks the merge.

## Project 2: Artifacts and Releases
**Difficulty:** Intermediate
**Description:** Build a pipeline that compiles code and passes artifacts between jobs.
**Requirements:**
- Create a React or Next.js application.
- In GitHub Actions, create Job 1: `build`. It should run `npm run build` and use `upload-artifact` to save the output folder.
- Create Job 2: `deploy`. It must `needs: build`. It should `download-artifact`.
- Job 2 should only run if the event trigger is a pushed Tag (e.g., `v1.0.0`).
- *Bonus:* Have Job 2 create an automated GitHub Release and attach the zipped artifact to it.

## Project 3: The Complete Docker-to-VPS Pipeline
**Difficulty:** Advanced
**Description:** Build a professional continuous deployment pipeline.
**Requirements:**
- You need a simple Express.js API, a Dockerfile, and a cheap VPS (e.g., DigitalOcean Droplet, AWS EC2, or a local Linux VM).
- **CI Job:** Run tests.
- **Build Job:** Log in to GitHub Container Registry (GHCR), build the Docker image using GitHub Actions caching, tag it with the commit SHA, and push it to GHCR.
- **Deploy Job:** Use `appleboy/ssh-action` to SSH into your VPS. 
- The script should:
  1. Pull the new Docker image from GHCR.
  2. Stop the old container.
  3. Start the new container on port 80.
- *Test:* Push a code change to `main`. Wait 2 minutes. Refresh your VPS IP in the browser and see the updated code!
