# Lesson 1: Introduction to React

## Learning Objectives
- Understand what React is and the problems it solves.
- Learn about the Virtual DOM and component-based architecture.
- Understand declarative vs imperative programming.
- Get an overview of the React ecosystem and setup tools.

## Concept Explanation & Mental Model
React provides a declarative, component-based approach to building UIs. Instead of imperatively mutating the DOM (e.g., `document.getElementById`), you declare how the UI should look for any given state, and React handles the DOM updates via its Virtual DOM. 

### Analogy
Think of declarative UI like ordering at a restaurant. You tell the waiter what you want (declarative), and the chef figures out how to make it (imperative DOM manipulation).

## Ecosystem & Tools
- **Create React App (CRA):** The legacy way to start a React app.
- **Vite:** The modern, lightning-fast alternative we will use in this course.

## Code Examples
```tsx
import React from 'react';

// A simple React functional component
export const App = () => {
  return <div>Welcome to React!</div>;
};
```

## Best Practices
- Always use modern bundlers like Vite over CRA for new projects.
- Embrace declarative thinking: focus on *state* rather than *DOM elements*.
