# Lesson 11: Testing in CI

## Learning Objectives
- Run tests automatically in Continuous Integration.
- Understand parallel testing and coverage.
- Configure failing builds on test failure.

## Why CI?
Tests are useless if developers forget to run them. CI (like GitHub Actions) runs your test suite on every PR.

## Parallel Tests
Running tests sequentially is slow. Jest and Playwright support parallel test execution by default to speed up CI pipelines.

## Code Coverage
Code coverage measures what percentage of your code is executed during tests. Target critical business logic, but don't obsess over 100% coverage (diminishing returns).
