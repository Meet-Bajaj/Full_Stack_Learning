# Lesson 3: TanStack Query Advanced

## Learning Objectives
- Master query invalidation and optimistic updates.
- Implement infinite scrolling queries.
- Manipulate the query cache directly.

## Why it Exists
Managing loading states, errors, caching, and background refetching for API calls manually using `useEffect` and `useState` is error-prone and boilerplate-heavy. TanStack Query acts as a powerful async state manager.

## Mental Model
Think of TanStack Query as a smart librarian. You ask for a book (data). If the librarian has it at the desk (cache), they give it to you instantly, while simultaneously running to the shelves (background fetch) to see if a newer edition exists.

## Optimistic Updates
Updating the UI *before* the server responds to make the app feel blazingly fast.

```tsx
const queryClient = useQueryClient();

const mutation = useMutation(updateTodo, {
  onMutate: async (newTodo) => {
    // Cancel incoming refetches
    await queryClient.cancelQueries('todos');
    // Snapshot previous value
    const previousTodos = queryClient.getQueryData('todos');
    // Optimistically update
    queryClient.setQueryData('todos', old => [...old, newTodo]);
    return { previousTodos };
  },
  onError: (err, newTodo, context) => {
    // Rollback on error
    queryClient.setQueryData('todos', context.previousTodos);
  },
  onSettled: () => {
    // Refetch to ensure truth
    queryClient.invalidateQueries('todos');
  },
});
```

## Checklist
- [ ] Understand `staleTime` vs `cacheTime` (now `gcTime`)
- [ ] Implement an optimistic update
- [ ] Setup an infinite query
