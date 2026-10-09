# Lesson 04: The Test Pipeline

## Learning Objectives
By the end of this lesson, you will be able to:
- Integrate automated testing into CI/CD.
- Manage databases required for integration tests in CI.
- Generate and publish test coverage reports.
- Understand how test failures prevent deployments.

---

## 1. The Role of Tests in CI

In CI, tests serve as the **Quality Control Gate**. If a developer opens a Pull Request that breaks an existing feature, the test command (e.g., `npm run test`) will exit with a non-zero status code (e.g., `exit 1`). 

GitHub Actions interprets any non-zero exit code as a **Failure**, marks the step with a red X, halts the workflow, and prevents the PR from being merged.

---

## 2. Handling Services (Databases for Integration Tests)

Unit tests run in isolation, but what about integration tests that require a real PostgreSQL database or Redis instance?

GitHub Actions allows you to spin up lightweight Docker containers, known as **Service Containers**, directly alongside your runner.

```yaml
jobs:
  integration-tests:
    runs-on: ubuntu-latest
    
    # Define a database container
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_USER: testuser
          POSTGRES_PASSWORD: testpassword
          POSTGRES_DB: testdb
        # Open port 5432 on the runner host
        ports:
          - 5432:5432
        # Wait until Postgres is actually ready before starting tests
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      
      # Run tests connecting to localhost:5432
      - name: Run Integration Tests
        env:
          DATABASE_URL: postgresql://testuser:testpassword@localhost:5432/testdb
        run: npm run test:integration
```

---

## 3. Test Coverage Reports

Test coverage measures what percentage of your codebase is executed during tests. Tools like Jest and Vitest can generate coverage reports. 

You can extract these reports in CI and publish them as comments on the Pull Request, or send them to third-party services like Codecov.

```yaml
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      
      # Run tests with coverage flag
      - name: Run Tests with Coverage
        run: npm run test -- --coverage
        
      # Upload coverage report to Codecov
      - name: Upload coverage reports to Codecov
        uses: codecov/codecov-action@v3
        env:
          CODECOV_TOKEN: ${{ secrets.CODECOV_TOKEN }}
```

## Summary
- A non-zero exit code from a test runner fails the CI step.
- Use `services` in GitHub Actions to easily spin up temporary databases (Postgres, Redis) for integration testing.
- Test coverage reports can be automatically uploaded to PRs to track code health over time.
