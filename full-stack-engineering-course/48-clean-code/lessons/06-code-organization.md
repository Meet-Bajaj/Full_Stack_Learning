# Lesson 6: Code Organization

## 🎯 Learning Objectives
- Structure files and directories logically.
- Understand the Separation of Concerns.
- Use Barrel exports (`index.ts`) effectively.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A supermarket. You expect to find milk in the dairy aisle, not mixed in with the hardware supplies. If everything is thrown into a single massive aisle, shopping takes hours.

**Mental Model:** Code should be grouped by cohesion (things that change together should be near each other). High-level concepts at the top, implementation details at the bottom.

## ❓ WHY does it exist?
A messy folder structure makes onboarding new developers painful and slows down feature development because nobody can find where things belong.

## 🏗️ Best Practices & Examples

### 1. Feature/Domain-Based Organization
Avoid grouping by technical role (e.g., all controllers in one folder, all models in another). Group by feature.

**Bad (Role-based):**
```text
src/
  controllers/
    UserController.ts
    OrderController.ts
  models/
    User.ts
    Order.ts
```

**Good (Feature-based):**
```text
src/
  features/
    users/
      UserController.ts
      User.ts
    orders/
      OrderController.ts
      Order.ts
```

### 2. The Newspaper Metaphor
A source file should be like a newspaper article. 
- The name is the headline.
- The top contains the highest-level concepts (public functions, main classes).
- As you scroll down, the details increase (private helper functions).

### 3. Barrel Exports
Use `index.ts` files to encapsulate modules and provide a clean public API, hiding internal files.
```text
src/features/users/
  index.ts (exports only what is needed)
  User.ts
  UserHelper.ts (hidden from outside)
```
```typescript
// Bad
import { User } from '../features/users/User';
// Good
import { User } from '../features/users';
```

## ⚠️ Common Mistakes
- **Massive Files:** Files over 500 lines usually violate Single Responsibility. Split them up.
- **Deep Nesting:** If your directory structure is 7 folders deep (`src/app/modules/core/domain/entities/user`), it creates friction. Keep it reasonably flat.

## 🚀 Exercises
1. Reorganize a role-based Express application into a feature-based folder structure.
2. Implement barrel exports to clean up massive `import` blocks in a React/Node app.

## ✅ Summary and Checklist
- [ ] Group files by feature/domain.
- [ ] Order file contents from high-level to low-level.
- [ ] Use index files to encapsulate internal module structure.
