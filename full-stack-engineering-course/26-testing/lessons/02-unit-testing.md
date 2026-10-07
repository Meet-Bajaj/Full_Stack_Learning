# Lesson 2: Unit Testing

## Learning Objectives
- Understand Unit Test structure using Arrange-Act-Assert.
- Master test isolation.
- Know what to test and what to avoid.

## Arrange-Act-Assert (AAA)
- **Arrange**: Set up the test data and conditions.
- **Act**: Execute the function under test.
- **Assert**: Verify the result matches expectations.

## What to Test
- Core business logic.
- Edge cases and error handling.
- Utility functions and reducers.

## What NOT to Test
- Third-party library internals (e.g., don't test if React renders, test if *your* component renders).
- Implementation details (test inputs and outputs instead).

## Summary Checklist
- [ ] I can write tests using the AAA pattern.
- [ ] I know how to isolate a unit of work.
