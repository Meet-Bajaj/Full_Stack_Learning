# Lesson 2: Docker in Production

## Moving from Local to Production with Docker
While `docker-compose.yml` is great for local development, production requires a different approach. You don't want to mount local source code volumes; you want immutable images.

## Building Production Images
Your production Dockerfile should use multi-stage builds to keep the final image size small.

```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
RUN npm ci --only=production
CMD ["node", "dist/main.js"]
```

## Docker Compose on VPS
For a single-VPS deployment, create a `docker-compose.prod.yml`:
- Remove build steps (use pre-built images from a registry).
- Remove host volume mounts for source code.
- Ensure restart policies are set to `always` or `unless-stopped`.
