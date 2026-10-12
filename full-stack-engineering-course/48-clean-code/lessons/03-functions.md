# Lesson 3: Functions

## 🎯 Learning Objectives
- Keep functions small and focused on a single responsibility.
- Understand pure functions and side effects.
- Manage function parameters effectively.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A factory assembly station. If one station tries to build the engine, paint the car, and install the radio, it becomes a bottleneck and is hard to fix. If it only installs the radio, it's efficient, easy to test, and easy to replace.

**Mental Model:** A function should do exactly one thing, do it well, and do it only.

## ❓ WHY does it exist?
Massive functions (hundreds of lines long) are impossible to unit test thoroughly, hard to read, and prone to bugs when modified, as changes in one part unexpectedly break another part.

## 🏗️ Best Practices & Examples

### 1. Small!
Functions should rarely be over 20 lines long. If it's longer, you are likely mixing levels of abstraction.

### 2. Do One Thing (Single Responsibility)
**Bad:**
```typescript
function processUser(user) {
  // 1. Validate
  if (!user.email) throw new Error();
  // 2. Format
  user.email = user.email.toLowerCase();
  // 3. Save
  db.save(user);
  // 4. Notify
  emailService.send(user.email);
}
```
**Good:**
```typescript
function registerUser(user) {
  validateUser(user);
  const normalizedUser = normalizeUser(user);
  saveUser(normalizedUser);
  sendWelcomeEmail(normalizedUser);
}
```

### 3. Function Arguments
Ideal number of arguments is zero (niladic), then one (monadic), then two (dyadic). Three (triadic) should be avoided. More than three requires a configuration object.
**Bad:** `function createUser(name, age, email, role, active, phone)`
**Good:** `function createUser(userConfig: UserConfig)`

### 4. Pure Functions vs Side Effects
A pure function's output depends ONLY on its inputs, and it doesn't modify outside state.
**Impure (Side Effect):**
```typescript
let counter = 0;
function increment() { counter++; } // Modifies outer scope
```
**Pure:**
```typescript
function increment(val: number) { return val + 1; }
```
*Aim for pure functions wherever possible to increase predictability.*

## ⚠️ Common Mistakes
- **Flag Arguments:** Passing boolean flags into a function (`render(true)`). It screams that the function does more than one thing. Split it into `renderStandard()` and `renderPremium()`.
- **Side Effects (Hidden):** A function named `checkPassword` that also initializes a user session.

## 🚀 Exercises
1. Extract a 50-line function into 3-4 smaller, well-named functions.
2. Refactor a function with 5 parameters to use a configuration object.

## ✅ Summary and Checklist
- [ ] Is the function doing exactly one thing?
- [ ] Are there fewer than 3 arguments?
- [ ] Are side effects clearly separated from pure logic?
