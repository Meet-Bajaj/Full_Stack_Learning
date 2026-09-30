# 06 - Client Components

## Learning Objectives
- Understand when and how to use Client Components.
- Master the `'use client'` directive.
- Learn patterns for composing Client and Server Components.

## Concept: Client Components
While Server Components are great, they cannot use interactivity (e.g., `onClick`), React state (`useState`), or lifecycle hooks (`useEffect`). When you need these, you must use a Client Component.

To mark a component as a Client Component, add the `'use client'` directive at the very top of the file.

```tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

## When to use which?

| Feature | Server Component | Client Component |
|---------|-----------------|------------------|
| Data Fetching | Yes (Recommended) | Yes |
| Direct Backend Access | Yes | No |
| Keep Sensitive Info | Yes | No |
| `useState`, `useEffect`| No | Yes |
| Event Listeners | No | Yes |
| Browser APIs | No | Yes |

## Client-Server Composition Patterns
**Crucial Rule:** You cannot import a Server Component directly into a Client Component.
*Why?* The client doesn't know how to execute server-side code.

**Solution:** Pass the Server Component as `children` or a prop to the Client Component.

```tsx
// ClientWrapper.tsx
'use client';
export default function ClientWrapper({ children }) {
  // Can use state here
  return <div className="interactive-wrapper">{children}</div>;
}

// page.tsx (Server Component)
import ClientWrapper from './ClientWrapper';
import ServerChild from './ServerChild';

export default function Page() {
  return (
    <ClientWrapper>
      {/* This works! The server evaluates ServerChild and passes the HTML to the ClientWrapper */}
      <ServerChild />
    </ClientWrapper>
  );
}
```

## Completion Checklist
- [ ] Use the `'use client'` directive correctly.
- [ ] Understand what features require a Client Component.
- [ ] Pass a Server Component as `children` to a Client Component.
