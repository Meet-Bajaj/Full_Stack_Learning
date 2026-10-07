# Lesson 5: Integration Testing

## Learning Objectives
- Define Integration Tests.
- Test components with database interactions.
- Understand test database setup and teardown.

## What is an Integration Test?
While unit tests check individual gears, integration tests check if two or more gears turn smoothly together. E.g., does the `UserService` correctly write to the `PostgreSQL` database?

## Testing with Databases
- Always use a dedicated **Test Database**.
- Clear the database between tests (`beforeEach` or `afterEach`) to ensure test isolation.
- Seed necessary data before the test runs.

## Summary Checklist
- [ ] I can set up an integration test.
- [ ] I know how to handle test databases.
