# Lesson 03: The Build Pipeline

## Learning Objectives
By the end of this lesson, you will be able to:
- Construct a standard build pipeline for a Node.js/TypeScript application.
- Implement dependency caching to speed up pipeline execution.
- Upload and download artifacts between jobs.

---

## 1. The Standard Node.js Pipeline

A robust pipeline fails fast. If the code doesn't meet styling standards, it should fail before wasting time running unit tests or compiling.

**Ideal Order:**
1. Install Dependencies (`npm ci`)
2. Lint (`npm run lint`)
3. Type Check (`npm run typecheck`)
4. Build (`npm run build`)

*Why `npm ci` instead of `npm install`?*
`npm ci` (Clean Install) strictly follows the `package-lock.json` file and does not modify it. It deletes the existing `node_modules` folder, ensuring a 100% reproducible build, which is critical for CI/CD.

---

## 2. Caching Dependencies

Downloading and extracting `node_modules` takes time. If your `package-lock.json` hasn't changed, you shouldn't have to download the packages again.

GitHub provides `actions/cache` for this, but `actions/setup-node` has caching built-in!

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm' # Automatically caches node_modules based on package-lock.json
          
      - run: npm ci
      - run: npm run lint
      - run: npm run build
```
*Result:* If dependencies haven't changed, the install step drops from ~45 seconds to ~5 seconds.

---

## 3. Passing Artifacts Between Jobs

Jobs run on completely separate virtual machines. If Job 1 builds your Next.js app (`.next` folder), Job 2 (Deploy) will not have access to that folder unless you explicitly pass it.

We use `actions/upload-artifact` and `actions/download-artifact`.

```yaml
jobs:
  build-job:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm run build # Creates a 'dist' folder
      
      # Save the output for the next job
      - name: Upload Build Artifact
        uses: actions/upload-artifact@v4
        with:
          name: production-build
          path: ./dist
          retention-days: 1 # Don't waste GitHub storage space

  deploy-job:
    needs: build-job # Wait for build-job to finish!
    runs-on: ubuntu-latest
    steps:
      # We don't need to checkout the code or install npm!
      # We just download the compiled code.
      - name: Download Build Artifact
        uses: actions/download-artifact@v4
        with:
          name: production-build
          path: ./dist
          
      - name: Deploy
        run: echo "Deploying ./dist to server..."
```

### The `needs` Keyword
By default, `build-job` and `deploy-job` would start at the exact same time. The `needs: build-job` syntax tells GitHub Actions to create a dependency graph, forcing `deploy-job` to wait.

## Summary
- Use `npm ci` for reliable builds in CI.
- Always cache package managers to reduce workflow duration.
- Use Artifacts to pass compiled binaries or build folders between independent jobs.
