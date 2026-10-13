# Module 51 Assessment

## Section 1: Theory
1. Contrast the Render Phase and Commit Phase in React.
2. What is the difference between `staleTime` and `gcTime` in TanStack Query?
3. What is the difference between Parallel Routes and Intercepting Routes in Next.js?

## Section 2: Code Debugging
Identify the performance flaw in this component:
```tsx
function ItemList({ items }) {
  const [filter, setFilter] = useState('');
  
  const handleSelect = () => console.log('selected');

  return (
    <div>
      <input onChange={e => setFilter(e.target.value)} />
      {items.map(item => (
        <HeavyListItem key={item.id} item={item} onSelect={handleSelect} />
      ))}
    </div>
  );
}
```
*Answer: `handleSelect` is recreated on every keystroke in the input, causing every `HeavyListItem` to re-render even if they are wrapped in `React.memo`. `handleSelect` should be wrapped in `useCallback`, and the filtered items should be wrapped in `useMemo`.*

## Section 3: Architecture Problem
**Scenario**: Your React app has a massive global state object in Redux containing User profile data, UI themes, and cached API responses for product listings. The app is incredibly slow.
**Task**: Explain how you would refactor this state using modern patterns discussed in this module.
