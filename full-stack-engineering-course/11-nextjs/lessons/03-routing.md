# 03 - Routing

## Learning Objectives
- Understand file-based routing in the App Router.
- Master special files: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`.
- Create dynamic routes and catch-all segments.
- Utilize route groups and parallel/intercepting routes.

## Mental Model
Imagine a file system mapping exactly to your URL paths. A folder is a route segment. A file inside that folder is the UI for that segment. Only folders containing a `page.tsx` are publicly accessible.

## Core Special Files
- `page.tsx`: The actual UI of a route. Makes the route accessible.
- `layout.tsx`: Shared UI that wraps its children (and child pages/layouts). It does not re-render on navigation.
- `loading.tsx`: A fallback UI shown instantly while the page or layout fetches data (using React Suspense).
- `error.tsx`: An error boundary that catches errors in the segment.
- `not-found.tsx`: UI for a 404 error within a segment.

## Code Example: Routing Structure

```text
app/
├── layout.tsx         # Root Layout
├── page.tsx           # Home Page (/)
├── about/
│   └── page.tsx       # About Page (/about)
└── blog/
    ├── layout.tsx     # Blog Layout
    ├── page.tsx       # Blog Index (/blog)
    └── [slug]/
        └── page.tsx   # Dynamic Blog Post (/blog/hello-world)
```

## Dynamic Routes
Wrap a folder name in brackets `[]` to create a dynamic route.

```tsx
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>;
}
```

## Route Groups
Wrap a folder name in parentheses `()` to create a route group. This allows you to organize files logically without affecting the URL path.
Example: `app/(marketing)/about/page.tsx` is accessed at `/about`.

## Best Practices
- Keep components inside the `app/` directory co-located with their routes, but distinguish pages from generic components.
- Use `loading.tsx` to improve perceived performance.

## Completion Checklist
- [ ] Understand App Router special files.
- [ ] Create a dynamic route.
- [ ] Implement a loading state.
