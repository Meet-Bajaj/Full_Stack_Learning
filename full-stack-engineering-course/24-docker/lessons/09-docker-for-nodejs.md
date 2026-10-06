# Lesson 09: Docker for Node.js

## Learning Objectives
- Write an optimized Dockerfile for Node.js applications.
- Handle production dependencies correctly.
- Implement security best practices (non-root user).
- Manage application signals for graceful shutdown.

## The Optimal Node.js Dockerfile
Here is a production-ready Dockerfile for a generic Node.js API (e.g., Express or NestJS).

```dockerfile
FROM node:18-alpine

# Set NODE_ENV to production early to ensure npm installs only prod dependencies
ENV NODE_ENV=production

# Use a non-root user for security (alpine images come with a 'node' user)
USER node

# Create app directory with correct permissions
WORKDIR /home/node/app

# Copy package.json and package-lock.json first for layer caching
# Use --chown to ensure the 'node' user owns the files
COPY --chown=node:node package*.json ./

# Install dependencies using 'npm ci' for deterministic, faster builds
RUN npm ci --only=production

# Copy the rest of the application code
COPY --chown=node:node . .

# Expose the port
EXPOSE 3000

# Start the application
# DO NOT use "npm start" in production. Use node directly to handle signals correctly.
CMD ["node", "src/index.js"]
```

## Key Best Practices Explained

### 1. `node-alpine`
Using the `alpine` variant results in a much smaller base image (~100MB vs ~1GB for the full image), reducing attack surface and pull times.

### 2. The `node` User (Security)
By default, Docker runs processes as `root`. If an attacker compromises your Node app, they have root access to the container. Alpine node images provide a built-in `node` user. We switch to it using `USER node`.

### 3. `npm ci` vs `npm install`
`npm ci` (Continuous Integration) bypasses `package.json` and installs exactly what is in `package-lock.json`. It is faster, guarantees identical dependency trees, and fails if the lockfile is out of sync.

### 4. Avoiding `npm start` (Signal Handling)
If your `CMD` is `["npm", "start"]`, npm spawns your node process as a child. When Docker tries to stop the container (`docker stop`), it sends a `SIGTERM` signal. Npm does *not* pass this signal to your node app, meaning your app cannot gracefully shut down (close DB connections, finish requests). Docker eventually forcefully kills it via `SIGKILL`.
**Always run the node binary directly:** `CMD ["node", "app.js"]`.

## Summary Checklist
- [ ] Use Alpine Linux for smaller images.
- [ ] Run the application as a non-root user.
- [ ] Utilize `npm ci` and layer caching.
- [ ] Execute `node` directly instead of `npm start`.
