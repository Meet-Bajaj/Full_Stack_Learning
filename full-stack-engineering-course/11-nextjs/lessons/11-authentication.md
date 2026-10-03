# 11 - Authentication

## Learning Objectives
- Understand authentication patterns in Next.js.
- Integrate Auth.js (formerly NextAuth.js).
- Secure Server Components, Client Components, and API Routes.

## Concept
Authentication in Next.js App Router usually involves JWTs stored in HTTP-only cookies. Because Server Components run on the server, you can securely verify these cookies before rendering any sensitive data.

## Auth.js (NextAuth.js)
Auth.js is the standard solution for Next.js authentication. It supports OAuth (Google, GitHub), Magic Links, and Credentials (username/password).

### Setup Example
```bash
npm install next-auth
```

Create the API route: `app/api/auth/[...nextauth]/route.ts`

```ts
import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
})

export { handler as GET, handler as POST }
```

### Protecting Server Components
```tsx
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession()

  if (!session) {
    redirect('/api/auth/signin')
  }

  return <h1>Welcome, {session.user.name}</h1>
}
```

## Security Best Practices
- Never expose secrets (e.g., JWT signing keys) to the client.
- Always use HTTP-only, secure cookies.
- Re-verify authorization at the data-access layer (in your Server Actions or Route Handlers).

## Completion Checklist
- [ ] Configure Auth.js with an OAuth provider.
- [ ] Protect a Server Component using session data.
- [ ] Implement Sign In and Sign Out buttons.
