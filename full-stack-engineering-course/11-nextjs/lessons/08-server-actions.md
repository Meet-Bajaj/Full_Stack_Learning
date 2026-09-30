# 08 - Server Actions

## Learning Objectives
- Understand mutations with Server Actions.
- Handle forms with progressive enhancement.
- Implement revalidation and error handling.

## Concept: What are Server Actions?
Server Actions are asynchronous functions that run on the server. They provide a seamless way to mutate data, bypassing the need to manually create an API endpoint (`/api/...`).

## The `'use server'` Directive
To define a Server Action, use the `'use server'` directive. You can define it inline inside a Server Component, or in a separate file (which can be imported by Client Components).

```tsx
// app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';
import db from '@/db';

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  
  await db.post.create({ data: { title } });
  
  // Clear the cache for the blog page so it shows the new post
  revalidatePath('/blog');
}
```

## Form Handling (Progressive Enhancement)
You can pass a Server Action directly to the `action` attribute of a `<form>`. This works even if JavaScript is disabled in the browser!

```tsx
import { createPost } from './actions';

export default function NewPostPage() {
  return (
    <form action={createPost}>
      <input type="text" name="title" required />
      <button type="submit">Create</button>
    </form>
  );
}
```

## `useFormStatus` and `useFormState`
When using Client Components with Server Actions, React provides hooks for UI feedback.
- `useFormStatus`: Shows pending state. Must be a child of the `<form>`.
- `useActionState` (formerly useFormState): Manages the success/error state returned from the action.

## Completion Checklist
- [ ] Create a Server Action in a separate file.
- [ ] Wire the action to an HTML `<form>`.
- [ ] Use `revalidatePath` to update the UI after a mutation.
