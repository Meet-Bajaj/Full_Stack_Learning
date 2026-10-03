# 15 - Caching and Revalidation

## Learning Objectives
- Understand the 4 caching layers in Next.js.
- Implement time-based and on-demand revalidation.
- Manage cache tags.

## The 4 Caching Layers
1. **Request Memoization:** React caches `fetch` calls with the same URL and options *during a single render pass*. Prevents redundant network requests within a React component tree.
2. **Data Cache:** Next.js persists `fetch` responses across incoming server requests. Controlled via `fetch` options.
3. **Full Route Cache:** At build time (or during revalidation), Next.js renders HTML and Server Component payloads. These are stored on the server/CDN.
4. **Router Cache:** The client-side in-memory cache that stores the React Server Component Payload for visited routes. Improves navigation speed.

## Revalidating Data
Revalidation is the process of purging the Data Cache and Full Route Cache to fetch new data.

### 1. Time-based Revalidation
Automatically revalidate after a certain amount of time.
```tsx
fetch('https://...', { next: { revalidate: 3600 } }) // Revalidate every hour
```

### 2. On-demand Revalidation
Manually trigger a cache purge inside a Server Action or Route Handler.

**By Path:**
```ts
import { revalidatePath } from 'next/cache';
revalidatePath('/blog');
```

**By Tag:**
```ts
// Fetching with a tag
fetch('https://...', { next: { tags: ['collection'] } })

// Revalidating
import { revalidateTag } from 'next/cache';
revalidateTag('collection');
```

## Completion Checklist
- [ ] Diagram the 4 caching layers.
- [ ] Implement time-based revalidation.
- [ ] Implement on-demand revalidation using `revalidateTag`.
