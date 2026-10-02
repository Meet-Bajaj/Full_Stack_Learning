# Lesson 13: Component Patterns

## Learning Objectives
- Implement Compound Components.
- Understand the Render Props pattern.
- Review Higher-Order Components (HOCs) and why Hooks largely replaced them.
- Differentiate between composition and inheritance.

## Concept Explanation
React gives you powerful composition tools. Advanced component patterns allow for highly flexible and reusable UI components.

- **Compound Components:** Multiple components that work together to form a cohesive UI (e.g., `<select>` and `<option>`).
- **Render Props:** A technique for sharing code between React components using a prop whose value is a function.

## Code Examples

### Compound Components Pattern
```tsx
import React, { createContext, useContext, useState } from 'react';

const ToggleContext = createContext({ on: false, toggle: () => {} });

export const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  return <ToggleContext.Provider value={{ on, toggle }}>{children}</ToggleContext.Provider>;
};

Toggle.On = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return on ? children : null;
};

Toggle.Off = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return on ? null : children;
};

Toggle.Button = () => {
  const { on, toggle } = useContext(ToggleContext);
  return <button onClick={toggle}>{on ? 'Turn Off' : 'Turn On'}</button>;
};

// Usage:
// <Toggle>
//   <Toggle.On>The light is on</Toggle.On>
//   <Toggle.Off>The light is off</Toggle.Off>
//   <Toggle.Button />
// </Toggle>
```

## Best Practices
- Prefer Composition over Inheritance (React doesn't use inheritance for components).
- Use Compound Components when you need a highly flexible UI where the user of the component determines the ordering of internal elements.
