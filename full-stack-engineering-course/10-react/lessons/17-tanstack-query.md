# Lesson 17: TanStack Query

## Learning Objectives
- Manage server state with TanStack Query.
- Use `useQuery` for data fetching and caching.
- Use `useMutation` for data updates.
- Implement pagination, infinite queries, and optimistic updates.

## Concept Explanation
TanStack Query (formerly React Query) replaces complex `useEffect`/`useState` fetching logic with a robust caching and state management system tailored for server state. It handles caching, deduplication, background updates, and stale data out of the box.

## Code Examples

### useQuery
```tsx
import { useQuery } from '@tanstack/react-query';

const fetchUser = async (id: string) => {
  const res = await fetch(`https://api.example.com/users/\${id}`);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

export const UserProfile = ({ userId }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['user', userId], // Unique key for caching
    queryFn: () => fetchUser(userId),
    staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return <div>{data.name}</div>;
};
```

## Best Practices
- Treat query keys as dependency arrays; include any variable that the query function depends on.
- Use `staleTime` to avoid unnecessary background refetches if the data doesn't change frequently.
