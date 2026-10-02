# Lesson 12: Context API

## Learning Objectives
- Solve prop drilling using React Context.
- Create and consume context.
- Understand performance implications of context.
- Learn Context splitting strategies.

## Concept Explanation
Context provides a way to pass data through the component tree without having to pass props down manually at every level (prop drilling).

### Analogy
Prop drilling is like whispering a message down a line of 10 people to get it to the last person. Context is like having a loudspeaker so anyone who needs the message can hear it directly.

## Code Examples
```tsx
import React, { createContext, useContext, useState } from 'react';

// 1. Create Context
const ThemeContext = createContext<'light' | 'dark'>('light');

// 2. Create Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Consume Context
export const ThemedText = () => {
  const theme = useContext(ThemeContext);
  return <p style={{ color: theme === 'dark' ? 'white' : 'black' }}>Hello World</p>;
};
```

## Performance Considerations
When the `value` provided to `<Context.Provider>` changes, *every* component that consumes that context will re-render. To avoid unnecessary re-renders, split your contexts logically (e.g., `ThemeContext`, `AuthContext`) rather than throwing everything into a single giant `AppStateContext`.
