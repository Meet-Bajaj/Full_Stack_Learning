# Docker Projects

## Project 1: Node.js API Containerization
**Goal**: Take a standard Express.js REST API and make it production-ready with Docker.
**Requirements**:
1. Use `node:18-alpine` as the base image.
2. Set `NODE_ENV=production`.
3. Run as the non-root `node` user.
4. Use `npm ci` for dependency installation.
5. Implement proper layer caching.
6. Handle graceful shutdown (no `npm start`).
7. Write a `docker-compose.yaml` (preview for next module) just to run it alongside a Redis container.

## Project 2: Full-Stack React + Node + Mongo
**Goal**: Build a multi-container local development environment.
**Requirements**:
1. Frontend: React app using Vite. Implement a multi-stage build for production, but use bind mounts for local dev.
2. Backend: Node.js API.
3. Database: MongoDB container with a named volume.
4. Networking: Ensure the Backend can connect to the Database using Docker's internal DNS.

## Project 3: Production Image Hardening
**Goal**: Take a bloated image and secure/shrink it.
**Requirements**:
1. Start with a Go or Rust application.
2. Build it using a heavy image (e.g., `ubuntu` or `golang` full image). Note the size and run a vulnerability scan (`docker scout`).
3. Refactor to a multi-stage build using `scratch` or `alpine` as the final base.
4. Drop all capabilities.
5. Make the root filesystem read-only.
