# 09 - API Routes

## Learning Objectives
- Create RESTful API endpoints using Route Handlers.
- Handle different HTTP methods (GET, POST, PUT, DELETE).
- Parse request bodies and headers.

## Concept: Route Handlers
Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs. They are defined in a `route.ts` or `route.js` file inside the `app` directory.

**Note:** You cannot have a `route.ts` and `page.tsx` at the same exact route segment. Usually, API routes are placed in `app/api/`.

## Creating an Endpoint
Export async functions named after HTTP methods.

```ts
// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const users = [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ];
  
  // Optional: Read query params
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  return NextResponse.json({ users });
}

export async function POST(request: Request) {
  const body = await request.json();
  // ... process body ...
  return NextResponse.json({ message: 'User created', data: body }, { status: 201 });
}
```

## Route Handlers vs Server Actions
- Use **Server Actions** for mutations (form submissions) triggered from your own Next.js UI.
- Use **Route Handlers (API Routes)** when you need to expose an API to external clients (e.g., mobile apps, webhooks), or when you need fine-grained control over the HTTP response.

## Completion Checklist
- [ ] Create a GET route handler.
- [ ] Create a POST route handler that parses JSON.
- [ ] Return a custom HTTP status code.
