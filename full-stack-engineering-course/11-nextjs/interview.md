# Next.js Interview Questions

## Junior Level
1. **What is Next.js and why should you use it over plain Create React App?**
   - Next.js provides out-of-the-box support for SSR/SSG, file-based routing, and built-in optimizations (images, fonts).
2. **What is the difference between `page.tsx` and `layout.tsx`?**
   - `page.tsx` defines the unique UI for a route. `layout.tsx` defines shared UI that wraps multiple pages (like navbars/footers) and persists across navigations without re-rendering.

## Mid Level
3. **Explain React Server Components (RSC) vs Client Components.**
   - RSCs render only on the server, send zero JS to the client, and can access backend resources directly. Client Components (`use client`) can use state, effects, and browser APIs.
4. **How do Server Actions work?**
   - Server Actions are asynchronous functions that are executed on the server. They can be called directly from Client Components or passed to `<form action={...}>`.

## Senior Level
5. **How does Next.js caching work under the hood?**
   - Next.js has 4 caching layers: Request Memoization (per request), Data Cache (persistent fetch cache), Full Route Cache (static HTML/RSC payload), and Router Cache (client-side in-memory cache).
6. **How would you architect a high-traffic e-commerce site using Next.js?**
   - Use ISR for product pages, Client Components for cart/checkout, Edge Runtime for middleware (geo-routing/auth), and properly tag/revalidate data caches upon inventory updates.
