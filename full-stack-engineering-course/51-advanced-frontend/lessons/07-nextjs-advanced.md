# Lesson 7: Next.js Advanced Patterns

## Learning Objectives
- Use Parallel Routes and Intercepting Routes.
- Implement Middleware for edge logic.
- Master React Streaming with Suspense.

## Why it Exists
Modern web apps require complex UI patterns like modals that act as separate routes, dashboard layouts with parallel loading, and edge authentication before hitting the main server.

## Parallel & Intercepting Routes
- **Parallel Routes** (`@folder`): Render multiple pages simultaneously in the same layout (e.g., a dashboard showing Analytics and Feed independently).
- **Intercepting Routes** (`(..)folder`): Load a route within the current layout (like opening a photo modal from a feed), but render it as a standalone page on hard refresh.

## Edge Middleware
Middleware runs on Vercel's Edge network before a request completes.

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');
  
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
```

## Checklist
- [ ] Implement a Parallel Route
- [ ] Build an Intercepting Route for a Modal
- [ ] Write Edge Middleware for Auth checks
