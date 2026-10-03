# Next.js Cheat Sheet

## File Conventions
- `page.tsx`: Unique UI of a route and makes route publicly accessible.
- `layout.tsx`: Shared UI for a segment and its children.
- `loading.tsx`: Loading UI for a segment and its children.
- `error.tsx`: Error UI for a segment and its children.
- `not-found.tsx`: Not found UI for a segment and its children.

## Directives
- `'use client'`: Marks a file and its imports as Client Components.
- `'use server'`: Marks exported functions as Server Actions.

## Navigation
```tsx
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Component
<Link href="/dashboard">Dashboard</Link>

// Hook (Client Component)
const router = useRouter();
router.push('/dashboard');
```

## Data Fetching (Server)
```tsx
async function getData() {
  const res = await fetch('https://api.example.com/...', { next: { revalidate: 3600 } });
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <main>{data.title}</main>;
}
```
