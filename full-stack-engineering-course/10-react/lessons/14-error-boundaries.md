# Lesson 14: Error Boundaries

## Learning Objectives
- Handle JavaScript errors gracefully in the React tree.
- Use `componentDidCatch` and `static getDerivedStateFromError`.
- Provide fallback UIs.
- Understand what Error Boundaries *do not* catch.

## Concept Explanation
A JavaScript error in a part of the UI shouldn't break the whole app. Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

*Note: Error boundaries must be Class Components. Currently, there is no Hook equivalent for creating error boundaries.*

## Code Examples
```tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
```

## Limitations
Error boundaries do **not** catch errors for:
- Event handlers
- Asynchronous code (e.g. `setTimeout` or `requestAnimationFrame` callbacks)
- Server side rendering
- Errors thrown in the error boundary itself (rather than its children)
