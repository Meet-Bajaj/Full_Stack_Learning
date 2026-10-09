# Lesson 02: GitHub Actions Deep Dive

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand the architecture of GitHub Actions (Workflows, Jobs, Steps, Runners).
- Create triggers for various GitHub events.
- Utilize the matrix strategy for parallel execution.
- Manage secrets and environment variables securely.

---

## 1. The Hierarchy of GitHub Actions

GitHub Actions are defined in YAML files placed in the `.github/workflows/` directory of your repository.

1. **Workflow:** The overarching automated process (e.g., "Production CI/CD"). Defined by a single YAML file.
2. **Events (Triggers):** What causes the workflow to run (e.g., `push`, `pull_request`, `schedule`).
3. **Jobs:** A set of steps that execute on the same runner. Jobs run in *parallel* by default.
4. **Steps:** Individual tasks within a job. These run *sequentially*. A step can run a shell command or an "Action".
5. **Actions:** Reusable standalone commands (e.g., `actions/checkout@v4`).
6. **Runner:** The server that executes your workflow (e.g., `ubuntu-latest`).

---

## 2. Basic Workflow Anatomy

```yaml
# .github/workflows/ci.yml
name: Node.js CI # The Workflow Name

on: # The Trigger
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build: # Job Name
    runs-on: ubuntu-latest # The Runner

    steps:
    - name: Checkout Repository # Step 1: Get the code
      uses: actions/checkout@v4
      
    - name: Setup Node.js # Step 2: Install Node
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        
    - name: Install Dependencies # Step 3: Run command
      run: npm ci
      
    - name: Run Tests # Step 4: Run command
      run: npm test
```

---

## 3. Triggers (Events)

Workflows can be triggered in many ways:

- **Push:** `on: push`
- **Pull Request:** `on: pull_request`
- **Manual Trigger:** Allows you to click a "Run Workflow" button in the GitHub UI.
  ```yaml
  on:
    workflow_dispatch:
      inputs:
        environment:
          description: 'Environment to deploy'
          required: true
          default: 'staging'
  ```
- **Cron Schedule:** Runs at specific times.
  ```yaml
  on:
    schedule:
      - cron: '0 2 * * *' # Every day at 2 AM
  ```

---

## 4. The Matrix Strategy

If you want to test your library against Node v18, v20, and v22, you don't need to write three jobs. Use a matrix. GitHub will spawn three separate runners simultaneously.

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x, 22.x]
    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: npm test
```

---

## 5. Secrets and Environments

Never hardcode API keys or database passwords in your repository!
Add them in GitHub via `Settings > Secrets and variables > Actions`.

Reference them in your workflow using the `${{ secrets.SECRET_NAME }}` syntax.

```yaml
steps:
  - name: Deploy to Server
    env:
      DB_PASSWORD: ${{ secrets.PROD_DB_PASSWORD }}
      API_KEY: ${{ secrets.EXTERNAL_API_KEY }}
    run: ./deploy.sh
```

**Environments:** You can configure environments (e.g., `staging`, `production`) in GitHub Settings. This allows you to require manual human approval before a job targeting that environment can run.

```yaml
jobs:
  deploy-prod:
    runs-on: ubuntu-latest
    environment: production # Ties this job to the GitHub Environment rules
    steps:
      - run: echo "Deploying to production..."
```

## Summary
- GitHub Actions use YAML configuration.
- Workflows consist of Triggers -> Jobs -> Steps -> Actions/Commands.
- The Matrix strategy is a powerful way to run tests across multiple configurations in parallel.
- Always use `${{ secrets }}` for sensitive data.
