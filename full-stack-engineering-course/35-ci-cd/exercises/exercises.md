# Module 35: CI/CD Exercises

## Exercise 1: The Basic Pipeline
**Objective:** Create your first GitHub Actions workflow.
1. In a new or existing repository, create `.github/workflows/ci.yml`.
2. Configure it to trigger on `push` to the `main` branch.
3. Create a single job named `build`.
4. The job should:
   - Checkout the code.
   - Setup Node.js v20.
   - Run `npm install` (or `npm ci`).
   - Run `npm run lint`.
5. Push to GitHub and verify it runs successfully.

## Exercise 2: Matrix Testing
**Objective:** Test across multiple environments simultaneously.
1. Modify your pipeline from Exercise 1.
2. Implement a `strategy.matrix` to run the job on Node versions `18`, `20`, and `22`.
3. Update the `setup-node` step to use `${{ matrix.node-version }}`.
4. Push and observe GitHub spawning three parallel jobs.

## Exercise 3: Code-Reading (Find the Security Flaw)
**Objective:** Identify CI security risks.
*Look at the following workflow snippet:*

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build and Deploy
        run: |
          npm ci
          npm run build
          echo "Connecting to database with password: ${{ secrets.DB_PASSWORD }}"
          ./deploy.sh
```
**Task:** Identify the critical vulnerability in this workflow and explain how to fix it.
*(Hint: Think about where `echo` output goes).*

## Exercise 4: Passing Artifacts
**Objective:** Split build and test phases.
1. Create a workflow with two jobs: `build` and `test`.
2. The `test` job must `needs: build`.
3. In the `build` job, run a command to create a folder `dist/` with a dummy file inside.
4. Use `actions/upload-artifact` to save the `dist/` folder.
5. In the `test` job, use `actions/download-artifact` to retrieve the folder, then `ls -la dist/` to prove it transferred successfully.
