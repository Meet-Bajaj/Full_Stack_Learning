# Lesson 20: Testing React

## Learning Objectives
- Write tests using React Testing Library (RTL) and Jest/Vitest.
- Understand how to query the DOM as a user would.
- Simulate user interactions using `user-event`.
- Test asynchronous code and mock APIs.

## Concept Explanation
React Testing Library encourages writing tests that resemble how users interact with the application. Instead of testing component instances or internal state, you test what is rendered to the DOM and how the DOM responds to events.

## Code Examples

### Basic Component Test
```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter Component', () => {
  it('renders initial count and increments on click', async () => {
    // 1. Arrange
    render(<Counter />);
    const user = userEvent.setup();

    // 2. Act (Initial check)
    expect(screen.getByText('Count: 0')).toBeInTheDocument();

    // 3. Act (Interaction)
    const button = screen.getByRole('button', { name: /increment/i });
    await user.click(button);

    // 4. Assert
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});
```

## Best Practices
- Query by accessible roles (`getByRole`) or labels (`getByLabelText`) rather than test IDs where possible.
- Avoid snapshot testing for large components as they are brittle and often ignored.
