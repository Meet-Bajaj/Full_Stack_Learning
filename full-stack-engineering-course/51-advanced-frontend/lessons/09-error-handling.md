# Lesson 9: Error Handling

## Learning Objectives
- Implement React Error Boundaries.
- Handle async errors globally.
- Implement retry patterns and graceful fallbacks.

## Why it Exists
Javascript errors crash the entire React component tree, resulting in a blank white screen. Error boundaries catch these errors, allowing you to display a fallback UI and log the error to Sentry.

## Mental Model
An Error Boundary is like a circuit breaker in a house. If one appliance shorts out (throws an error), the breaker trips, keeping the rest of the house safe and preventing a total fire, while showing you exactly which circuit needs fixing.

## React Error Boundary
```tsx
import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log to Sentry/Datadog here
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please refresh.</h1>;
    }
    return this.props.children;
  }
}
```
*Note: Today, most teams use the `react-error-boundary` NPM package instead of writing class components manually.*

## Checklist
- [ ] Wrap the root app in an Error Boundary
- [ ] Wrap specific critical features (like a feed) in their own boundaries
- [ ] Handle Promise/Async errors (which boundaries do NOT catch by default)
