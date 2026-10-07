# Lesson 4: Mocking

## Learning Objectives
- Understand why mocking is essential for isolation.
- Master `jest.fn()` and `jest.spyOn()`.
- Implement manual mocks.

## Why Mock?
To isolate the unit under test from its external dependencies (e.g., databases, network requests, time).

## Creating Mocks
```javascript
// Mock a function
const mockFn = jest.fn().mockReturnValue('mocked result');

// Spy on a method
const spy = jest.spyOn(Math, 'random').mockReturnValue(0.5);
```

## When NOT to Mock
Don't mock pure functions. If a utility function is fast and has no side effects, just use the real one. Over-mocking leads to brittle tests.
