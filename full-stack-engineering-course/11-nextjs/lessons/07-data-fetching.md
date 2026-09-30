# 07 - Data Fetching

## Learning Objectives
- Master the extended `fetch` API in Next.js.
- Understand caching and revalidation strategies.
- Differentiate between Static and Dynamic Rendering.

## The Next.js `fetch` API
Next.js extends the native Web `fetch` API to allow each request on the server to set its own caching and revalidating semantics.

### 1. Default Caching (Force Cache)
By default, Next.js caches `fetch` responses (varies slightly by Next version, but assume cached for static generation).
```ts
const res = await fetch('https://api.example.com/data'); // Cached
```

### 2. No Cache (Dynamic Fetching)
To ensure fresh data on every request (similar to SSR):
```ts
const res = await fetch('https://api.example.com/data', { cache: 'no-store' });
```

### 3. Revalidating Data (ISR)
To cache data but refresh it periodically:
```ts
const res = await fetch('https://api.example.com/data', { 
  next: { revalidate: 3600 } // Revalidate every hour
});
```

## Request Deduping
Next.js automatically memoizes `fetch` requests that have the same input in a React tree. You can fetch the same data in a layout, page, and multiple components without making redundant network calls.

## Dynamic vs. Static Rendering
- **Static Rendering:** Routes are rendered at build time. Default behavior if no dynamic functions (like `cookies()`, `headers()`, or `no-store` fetches) are used.
- **Dynamic Rendering:** Routes are rendered on request. Triggered automatically if you use dynamic functions.

You can explicitly force a route to be dynamic:
```tsx
export const dynamic = 'force-dynamic';
```

## Completion Checklist
- [ ] Fetch data with `cache: 'no-store'`.
- [ ] Fetch data with a `revalidate` interval.
- [ ] Understand request deduplication.
