# React Cheat Sheet

## Functional Components & Hooks
```jsx
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

export default function MyComponent({ prop1, prop2 }) {
  // State
  const [count, setCount] = useState(0);

  // Ref (Mutable value that doesn't trigger re-render)
  const inputRef = useRef(null);

  // Effect (Lifecycle: Mount, Update, Unmount)
  useEffect(() => {
    console.log("Mounted or prop1 changed");
    const timer = setInterval(() => console.log('Tick'), 1000);
    
    // Cleanup function
    return () => clearInterval(timer);
  }, [prop1]); // Dependency array

  // Memoized value
  const expensiveCalculation = useMemo(() => {
    return count * 100;
  }, [count]);

  // Memoized callback
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <input ref={inputRef} />
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

## Context API
```jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consuming context
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme('dark')}>{theme}</button>;
}
```

## Event Handling
```jsx
function Form() {
  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload
    console.log('Submitted');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => console.log(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## React Query (TanStack Query)
```jsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function UsersList() {
  const queryClient = useQueryClient();

  // Query
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json())
  });

  // Mutation
  const mutation = useMutation({
    mutationFn: (newUser) => fetch('/api/users', { method: 'POST', body: JSON.stringify(newUser) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{/* Render data */}</div>;
}
```

## Performance
- **React.memo**: HOC to prevent re-renders if props haven't changed.
- **useMemo / useCallback**: Prevent recreation of expensive objects/functions.
- **React.lazy & Suspense**: Code splitting components.

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```
