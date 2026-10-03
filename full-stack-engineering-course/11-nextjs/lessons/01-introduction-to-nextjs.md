# 01 - Introduction to Next.js

## Learning Objectives
- Understand what Next.js is and why it exists.
- Differentiate between CSR, SSR, SSG, and ISR.
- Understand the App Router architecture.

## Why Next.js?
React is a library for building UIs. Next.js is a framework built on top of React that provides routing, rendering optimization, and backend capabilities (API routes/Server Actions) out of the box.

## Rendering Strategies

### CSR (Client-Side Rendering)
Standard React. The server sends an empty HTML shell and JS. The browser executes JS to build the UI.
- **Pros:** Fast post-load navigation.
- **Cons:** Slow initial load, poor SEO.

### SSR (Server-Side Rendering)
The server generates HTML for each request.
- **Pros:** Always up-to-date, great SEO.
- **Cons:** Slower TTFB (Time to First Byte), requires server compute.

### SSG (Static Site Generation)
HTML is generated at build time.
- **Pros:** Extremely fast (can be cached on CDNs), great SEO.
- **Cons:** Stale data until next build.

### ISR (Incremental Static Regeneration)
Pages are generated at build time but can be re-generated in the background at a specific interval.
- **Pros:** Best of both worlds (SSG speed, SSR freshness).

## The App Router
Introduced in Next.js 13, the App Router (`app/` directory) uses React Server Components by default, bringing a new paradigm to building Next.js apps with layouts, error boundaries, and nested routing.
