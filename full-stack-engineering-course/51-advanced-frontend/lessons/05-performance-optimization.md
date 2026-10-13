# Lesson 5: Performance Optimization

## Learning Objectives
- Prevent unnecessary re-renders using `React.memo`, `useMemo`, and `useCallback`.
- Implement list virtualization using TanStack Virtual.
- Understand Code Splitting and Lazy Loading.

## Why it Exists
Large React applications can become sluggish due to large JavaScript bundles and excessive Virtual DOM diffing. Optimization techniques ensure 60fps scrolling and fast TTI (Time to Interactive).

## Mental Model
- **`useMemo`**: Remembering the answer to a hard math problem so you don't have to calculate it again.
- **`React.memo`**: A bouncer at a club who only lets you in (re-render) if you are wearing something different (props changed).
- **Virtualization**: Only rendering the visible rows of an Excel sheet, rather than all 10,000 rows.

## Code Example: Virtualization
Rendering 10,000 DOM nodes will crash the browser. Virtualization only renders the ~10 nodes visible on screen.
```tsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }) {
  const parentRef = React.useRef(null);
  
  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  return (
    <div ref={parentRef} style={{ height: '400px', overflow: 'auto' }}>
      <div style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: 'relative' }}>
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            {items[virtualRow.index]}
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Checklist
- [ ] Properly apply `useMemo` for expensive calculations
- [ ] Implement `React.lazy()` for route-level code splitting
- [ ] Virtualize a massive list
