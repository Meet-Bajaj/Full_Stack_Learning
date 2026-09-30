# Lesson 05: Multi-Stage Builds

## Learning Objectives
- Understand the need for multi-stage builds.
- Implement the builder pattern in Dockerfiles.
- Reduce final image sizes significantly.
- Differentiate between development and production images.

## The Problem
When compiling applications (like Go, Rust, Java, or even TypeScript), you need build tools, compilers, and SDKs. These tools take up a lot of space. However, once the code is compiled, you only need the final binary or built files to run the application in production. The build tools are dead weight.

## The Solution: Multi-Stage Builds
Multi-stage builds allow you to use multiple `FROM` statements in your Dockerfile. Each `FROM` instruction begins a new stage of the build. You can selectively copy artifacts from one stage to another, leaving behind everything you don't need in the final image.

## Example: Building a React App (Static Files)
A React application needs Node.js, `npm`, and `node_modules` to build. But in production, it's just static HTML/CSS/JS files served by Nginx.

```dockerfile
# ---------------------------------------
# Stage 1: Build the application (The Builder)
# ---------------------------------------
FROM node:18 AS builder

WORKDIR /app

# Install dependencies (utilizing layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build
# The compiled files are now in /app/build

# ---------------------------------------
# Stage 2: Serve the application (The Final Image)
# ---------------------------------------
FROM nginx:alpine

# Copy the build artifacts from the 'builder' stage
COPY --from=builder /app/build /usr/share/nginx/html

# The final image ONLY contains Nginx and the static files!
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Benefits
1. **Dramatically smaller images**: The final image above might be 20MB (Nginx + static files) instead of 1GB+ (Node + `node_modules`).
2. **Enhanced Security**: Build tools often contain vulnerabilities. Removing them from the production image reduces the attack surface.
3. **Cleaner Dockerfiles**: Replaces the need for external build scripts and keeping two separate Dockerfiles (one for building, one for running).

## Summary Checklist
- [ ] Identify scenarios where multi-stage builds are useful.
- [ ] Use `AS` to name a stage.
- [ ] Use `COPY --from=<stage_name>` to extract artifacts.
- [ ] Appreciate the security and size benefits of this pattern.
