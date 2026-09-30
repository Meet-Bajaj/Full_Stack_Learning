# 05 - Server Components

## Learning Objectives
- Understand React Server Components (RSC).
- Distinguish between Server and Client Components.
- Learn data fetching patterns in Server Components.

## Concept: React Server Components
React Server Components are a new architecture where components render on the server. By default, all components in the Next.js `app/` router are Server Components.

### Why Server Components?
1. **Performance:** Zero JavaScript sent to the client (for the component itself).
2. **Backend Access:** Directly access databases, file systems, and internal APIs securely.
3. **Security:** API keys and sensitive logic never leave the server.
4. **Caching:** Rendered results can be cached and reused.

## Data Fetching
Because Server Components run on the server, you can use `async/await` directly in your component.

```tsx
// app/users/page.tsx
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Streaming and Suspense
Next.js supports streaming. You can wrap a slow Server Component in React's `<Suspense>` to stream parts of the UI to the browser as they become ready, preventing the whole page from blocking.

```tsx
import { Suspense } from 'react';
import SlowComponent from './SlowComponent';

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>Loading data...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
```

## Completion Checklist
- [ ] Understand the benefits of RSCs.
- [ ] Fetch data securely in a Server Component.
- [ ] Wrap an async component in `<Suspense>`.
