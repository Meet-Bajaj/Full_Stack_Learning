# 10 - Middleware

## Learning Objectives
- Understand the role of Middleware in Next.js.
- Intercept requests for authentication, redirects, and rewrites.
- Configure Middleware matchers.

## Concept: What is Middleware?
Middleware allows you to run code *before* a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

Middleware runs in the **Edge Runtime**, meaning it executes incredibly fast on servers close to the user, but it lacks access to native Node.js APIs (like `fs` or `mongoose`).

## Defining Middleware
Create a `middleware.ts` file in the root of your project (same level as `app/`).

```ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check for a specific cookie or header
  const token = request.cookies.get('auth-token');

  // If on a protected route and no token, redirect to login
  if (request.nextUrl.pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Continue normal execution
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};
```

## Common Use Cases
1. **Authentication/Authorization:** Protect routes before rendering.
2. **A/B Testing:** Rewrite requests to different variants based on cookies.
3. **Localization (i18n):** Detect user's language and redirect.
4. **Bot Protection:** Block suspicious IPs or User-Agents.

## Completion Checklist
- [ ] Create `middleware.ts` at the root.
- [ ] Implement a redirect based on a cookie.
- [ ] Configure the `matcher` array.
