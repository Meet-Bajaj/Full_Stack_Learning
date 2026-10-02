# React Cheat Sheet

## Hooks
### useState
```tsx
const [state, setState] = useState(initialState);
```
### useEffect
```tsx
useEffect(() => {
  // setup
  return () => { // cleanup };
}, [dependencies]);
```
### useContext
```tsx
const value = useContext(MyContext);
```
### useRef
```tsx
const myRef = useRef(initialValue); // myRef.current
```
### useMemo / useCallback
```tsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

## Patterns
- **Context API:** `createContext`, `<Context.Provider value={...}>`, `useContext`
- **Error Boundaries:** Must be class components using `getDerivedStateFromError`.
- **Code Splitting:** `React.lazy(() => import('./Component'))` wrapped in `<Suspense fallback={<Loading/>}>`
