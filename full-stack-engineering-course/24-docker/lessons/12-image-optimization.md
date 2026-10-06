# Lesson 12: Image Optimization

## Learning Objectives
- Choose the correct base images to minimize size and attack surface.
- Optimize layer caching for faster builds.
- Implement `.dockerignore` effectively.

## 1. Choosing Base Images
The foundation of your Dockerfile dictates the starting size of your image.
- **Full images (e.g., `node:18`)**: Based on a full Debian/Ubuntu OS. Large (900MB+), includes many tools (git, python, curl). Good for development, bad for production.
- **Slim images (e.g., `node:18-slim`)**: Debian-based but stripped down. Much smaller (200MB). A safe default.
- **Alpine images (e.g., `node:18-alpine`)**: Based on Alpine Linux. Extremely small (100MB). **Recommended for production**, but beware: Alpine uses `musl` libc instead of `glibc`. If your app relies on native C++ addons (e.g., node-canvas, certain crypto libraries), compiling them on Alpine can be difficult or require extra build dependencies.

## 2. Layer Consolidation (The `&&` Trick)
Every `RUN` command creates a layer. When installing OS packages, chaining commands prevents intermediate garbage from becoming permanent layers.

**Bad:**
```dockerfile
RUN apt-get update
RUN apt-get install -y curl
RUN rm -rf /var/lib/apt/lists/*
```
*(The cache from the first `RUN` might cause the second `RUN` to fail if packages are updated on the apt servers. Also, the `rm` command deletes files in a new layer, but the files still exist in the previous layer, taking up space!)*

**Good:**
```dockerfile
RUN apt-get update && \
    apt-get install -y curl && \
    rm -rf /var/lib/apt/lists/*
```

## 3. `.dockerignore`
Never copy your `.git` folder, `node_modules`, `build` artifacts, or `.env` files into the context.
```text
node_modules
npm-debug.log
.git
.env
dist
build
```

## Summary Checklist
- [ ] Understand Full vs Slim vs Alpine images.
- [ ] Consolidate `RUN` instructions when managing packages.
- [ ] Thoroughly configure `.dockerignore`.
