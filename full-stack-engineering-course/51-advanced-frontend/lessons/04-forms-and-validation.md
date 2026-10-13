# Lesson 4: Forms and Validation

## Learning Objectives
- Build complex forms using React Hook Form (RHF).
- Integrate Zod for strict schema validation.
- Handle dynamic fields and multi-step forms.

## Why it Exists
Native React forms require manual state management for every input, leading to excessive re-renders and bloated code. RHF uses uncontrolled components to avoid re-renders, while Zod ensures runtime type safety.

## Mental Model
Think of standard React state forms as a micro-manager: every time a user types a letter, the manager recalculates the whole room (re-render). RHF is a hands-off manager: it lets the user type in peace and only checks their work when they hit "Submit".

## RHF with Zod Integration
```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  username: z.string().min(3, 'Minimum 3 characters'),
  email: z.string().email('Invalid email'),
});

type FormData = z.infer<typeof schema>;

export function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} />
      {errors.username && <p>{errors.username.message}</p>}
      
      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Checklist
- [ ] Understand uncontrolled components vs controlled
- [ ] Define a Zod schema
- [ ] Connect Zod to RHF using `zodResolver`
