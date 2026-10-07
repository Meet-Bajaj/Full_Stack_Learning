# Lesson 7: Frontend Testing

## Learning Objectives
- Master React Testing Library (RTL).
- Understand query priorities (getBy vs findBy vs queryBy).
- Simulate user interactions with `userEvent`.

## Queries
- `getBy`: Returns element, throws error if not found.
- `queryBy`: Returns element or null (useful for asserting absence).
- `findBy`: Returns a promise, useful for async elements.

## userEvent vs fireEvent
Always prefer `userEvent`. `fireEvent` dispatches raw DOM events, whereas `userEvent` simulates full interactions (e.g., clicking involves hover, mousedown, mouseup, click).

## Summary Checklist
- [ ] I can render a React component in a test.
- [ ] I know when to use getBy, queryBy, and findBy.
