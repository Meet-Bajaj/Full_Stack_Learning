# Module 26 Projects

## Project: Testing an Existing App

**Goal**: Take a provided un-tested E-Commerce API and add 80% test coverage.

**Requirements**:
1. Add unit tests for all utility functions and price calculators.
2. Add integration tests using Supertest and an in-memory database (SQLite/Testcontainers) for the `/checkout` endpoints.
3. Use Jest Spies to verify that the `EmailService` is called when a checkout completes, without actually sending an email.
4. Set up a GitHub Action to run the tests on PR.
