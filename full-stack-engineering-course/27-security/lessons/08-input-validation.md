# Lesson 8: Input Validation

## Learning Objectives
- Understand server-side vs client-side validation.
- Use schema validation libraries like Zod.
- Secure file uploads.

## Client vs Server Validation
Client-side validation is for UX (fast feedback). Server-side validation is for security. Attackers can bypass the client completely. **Always validate on the server.**

## Zod Example
```typescript
import { z } from 'zod';

const UserSchema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});
```

## File Upload Security
- Validate file extensions AND MIME types.
- Restrict max file size.
- Store uploaded files on a separate domain (or S3) to prevent XSS.
