# Lesson 17: TypeScript Best Practices

- Avoid `any`. Use `unknown` if you genuinely don't know the type.
- Enable `strict` mode.
- Use `interface` for object models, `type` for aliases and unions.
- Leverage type inference. Don't over-annotate.
- Use discriminated unions for modeling state.
- Validate external data at runtime using tools like **Zod**.

```typescript
import { z } from "zod";
const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
});
type User = z.infer<typeof UserSchema>;
```
