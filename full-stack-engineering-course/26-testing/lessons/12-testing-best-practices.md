# Lesson 12: Testing Best Practices

## Learning Objectives
- Learn standard test naming conventions.
- Organize tests effectively.
- Write resilient, non-brittle tests.

## Test Behavior, Not Implementation
If you test implementation (e.g., checking if a specific internal variable changes), your tests will break every time you refactor. Test the *public API* and the *user-facing behavior*.

## Structure
Group tests logically using `describe` blocks:
- `describe('UserService')`
  - `describe('createUser()')`
    - `it('should create a user on success')`
    - `it('should throw error if email exists')`

## Summary Checklist
- [ ] I test behavior, not implementation.
- [ ] My tests are organized and readable.
