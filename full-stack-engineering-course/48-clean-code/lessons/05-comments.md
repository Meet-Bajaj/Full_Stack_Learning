# Lesson 5: Comments

## 🎯 Learning Objectives
- Understand when comments are beneficial and when they are a code smell.
- Write self-documenting code.
- Use JSDoc and API documentation effectively.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A joke. If you have to explain the joke, it wasn't a good joke. If you have to explain your code with a comment, the code isn't clean enough.

**Mental Model:** A comment is often a failure to express yourself in code. The compiler ignores comments, meaning comments will inevitably become outdated and lie to the next developer.

## ❓ WHY does it exist?
Developers often use comments as a crutch for bad naming or overly complex logic. Clean code minimizes comments by making the code structure self-explanatory.

## 🏗️ The Bad (When NOT to Comment)

### 1. Don't explain WHAT the code is doing.
```typescript
// Check to see if the employee is eligible for full benefits
if ((employee.flags & HOURLY_FLAG) && (employee.age > 65))
```
**Refactor to self-documenting code:**
```typescript
if (employee.isEligibleForFullBenefits())
```

### 2. Noise Comments
```typescript
/**
 * Default constructor
 */
constructor() {}

// Returns the day of the month
getDayOfMonth() {}
```

### 3. Commented-out Code
Just delete it! Git will remember it. Commented-out code rots and confuses future developers.

## 🏗️ The Good (When TO Comment)

### 1. Explanation of Intent (The WHY)
When the code is doing something non-obvious for a specific business or technical reason.
```typescript
// We use a binary search here because the array can reach 10M items, 
// and V8's default sort was causing a 2-second UI freeze.
```

### 2. Warning of Consequences
```typescript
// WARNING: This test takes 5 minutes to run. Do not run in pre-commit hook.
```

### 3. JSDoc for Public APIs
Libraries and public-facing APIs should use standardized JSDoc/TSDoc to power IDE intellisense.
```typescript
/**
 * Calculates the distance between two geographical points.
 * @param {Point} p1 - The starting point
 * @param {Point} p2 - The destination
 * @returns {number} Distance in kilometers
 */
```

## ⚠️ Common Mistakes
- **Lying Comments:** Code was updated, but the comment wasn't. This is worse than no comment at all.

## 🚀 Exercises
1. Take a heavily commented script and refactor the code (extracting functions, renaming variables) until 90% of the comments can be safely deleted.

## ✅ Summary and Checklist
- [ ] Delete commented-out code.
- [ ] Extract complex logic into well-named functions instead of commenting it.
- [ ] Comment the "Why", not the "What".
