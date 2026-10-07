# Lesson 3: Jest and Vitest

## Learning Objectives
- Configure Jest and Vitest.
- Use `describe`, `it`, and `expect` blocks.
- Understand Setup and Teardown methods.

## Setup & Teardown
```javascript
beforeAll(() => { /* Runs once before all tests */ });
beforeEach(() => { /* Runs before each test */ });
afterEach(() => { /* Runs after each test */ });
afterAll(() => { /* Runs once after all tests */ });
```

## Matchers
- `expect(value).toBe(exactValue)`
- `expect(value).toEqual(objectOrArray)`
- `expect(value).toBeTruthy()`
- `expect(fn).toThrow()`

## Mental Model
Vitest is to Vite what Jest is to Webpack. Vitest uses the same API as Jest but runs faster in modern environments by leveraging ESM.
