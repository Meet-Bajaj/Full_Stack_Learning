# Lesson 10: Docker for React and Next.js

## Learning Objectives
- Containerize a React application using multi-stage builds.
- Serve static React apps with Nginx.
- Containerize a Next.js application using its standalone output feature.

## 1. Containerizing a standard React App (Vite/CRA)
Standard React apps compile down to static HTML/CSS/JS. They do not need Node.js in production. We use a multi-stage build: Stage 1 builds the assets, Stage 2 serves them with Nginx.

```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
# Provide a custom nginx config if necessary (for React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
*Note: If using React Router, `nginx.conf` must redirect all 404s to `index.html`.*

## 2. Containerizing Next.js
Next.js is different. It often requires a Node.js server for Server-Side Rendering (SSR) or API routes. 

Next.js provides an experimental `output: 'standalone'` feature in `next.config.js` which creates a highly optimized, minimized build containing only the necessary files to run the server.

### The Next.js Dockerfile
```dockerfile
# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Ensure next.config.js has output: 'standalone'
RUN npm run build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy the standalone output and static files
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
# Run the generated server.js
CMD ["node", "server.js"]
```

## Summary Checklist
- [ ] Understand why React uses Nginx and Next.js uses Node.
- [ ] Use multi-stage builds for React.
- [ ] Enable `output: 'standalone'` for Next.js.
- [ ] Apply security best practices (non-root users) to Next.js containers.
