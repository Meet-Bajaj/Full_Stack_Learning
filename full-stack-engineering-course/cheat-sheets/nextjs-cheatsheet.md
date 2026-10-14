# Next.js (App Router) Cheat Sheet

## File-based Routing
- `app/page.tsx` -> `/`
- `app/about/page.tsx` -> `/about`
- `app/blog/[slug]/page.tsx` -> `/blog/hello-world`
- `app/shop/[...slug]/page.tsx` -> Catch-all segments (`/shop/a/b/c`)
- `app/(marketing)/about/page.tsx` -> Route groups (omits `(marketing)` from URL)

## Special Files
- `layout.tsx`: Shared UI (preserves state on navigation)
- `page.tsx`: Unique UI of a route
- `loading.tsx`: Suspense fallback UI
- `error.tsx`: Error boundary
- `not-found.tsx`: 404 UI
- `route.ts`: API Endpoint (Route Handler)

## Server Components vs Client Components
```tsx
// Server Component (Default)
// Great for fetching data, direct DB access, reducing bundle size
export default async function Page() {
  const data = await fetch('https://api.example.com/data').then(r => r.json());
  return <div>{data.title}</div>;
}

// Client Component
// Use when you need interactivity, hooks, or browser APIs
'use client'
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c+1)}>{count}</button>;
}
```

## Data Fetching & Caching (Next 13+)
```tsx
// 1. Static (Default) - Cached at build time
const res = await fetch('https://api.com/...', { cache: 'force-cache' });

// 2. Dynamic - Fetched on every request
const res = await fetch('https://api.com/...', { cache: 'no-store' });

// 3. Revalidated (ISR) - Fetched and cached, revalidated every X seconds
const res = await fetch('https://api.com/...', { next: { revalidate: 60 } });

// 4. On-demand Revalidation (Tag based)
const res = await fetch('https://api.com/...', { next: { tags: ['collection'] } });
// In a server action/route handler: revalidateTag('collection')
```

## Server Actions
```tsx
// app/actions.ts
'use server'
import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  // Mutate data in DB...
  revalidatePath('/posts'); // Purge cache for the path
}

// In a Client or Server Component
import { createPost } from './actions';

export default function Form() {
  return (
    <form action={createPost}>
      <input name="title" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Metadata
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App',
  description: 'App description',
  openGraph: {
    title: 'My App',
    images: ['/og-image.png']
  }
}
```
