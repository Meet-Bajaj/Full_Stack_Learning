# Lesson 05: Next.js Interview Questions

## Learning Objectives
- Master Next.js rendering strategies (CSR, SSR, SSG, ISR).
- Understand the App Router and Server Components.
- Explain data fetching, caching, and routing in Next.js.

## 1. Rendering Strategies

**Common Question:** Explain the difference between SSR, SSG, and ISR.
- **SSR (Server-Side Rendering):** HTML is generated on each request. Good for dynamic, personalized data (e.g., user dashboard).
- **SSG (Static Site Generation):** HTML is generated at build time. Extremely fast, good for SEO (e.g., marketing pages, blogs).
- **ISR (Incremental Static Regeneration):** Allows you to update static pages after you've built your site. You can statically generate pages on demand without needing to rebuild the entire site.

## 2. React Server Components (RSC) vs Client Components

**Concept:** In Next.js App Router, components default to Server Components.
- **Server Components:** Render on the server, send zero client-side JavaScript, can access backend resources directly (databases, file systems).
- **Client Components:** Opt-in using `"use client"`. Used when you need interactivity (useState, onClick) or browser APIs.

## 3. Data Fetching and Caching

The App Router drastically simplifies data fetching:
- Fetching on the server using standard `fetch()`.
- Next.js extends `fetch` to automatically cache and deduplicate requests.
- You can control caching via `{ cache: 'no-store' }` or revalidation via `{ next: { revalidate: 3600 } }`.

## Summary & Checklist
- [ ] Explain the benefits of React Server Components.
- [ ] Compare SSG vs SSR vs ISR.
- [ ] Describe how routing works in the App Router (folders as routes).
