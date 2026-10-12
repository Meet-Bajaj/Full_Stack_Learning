# Lesson 4: Error Handling

## 🎯 Learning Objectives
- Differentiate between Exceptions and Error Codes.
- Establish error boundaries and fail-fast principles.
- Implement graceful degradation.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A restaurant kitchen fire. If a small grease fire starts, you don't wait to see if it cooks the steak faster (ignoring the error). You grab the extinguisher (catch) or pull the fire alarm to evacuate the building (fail fast).

**Mental Model:** Error handling is not an afterthought; it is a core structural component of your architecture. Code should assume failure is normal.

## ❓ WHY does it exist?
Poor error handling leads to swallowed errors (where the app behaves unpredictably), massive nested `if/else` chains checking for error codes, or crashing production applications over minor issues.

## 🏗️ Best Practices & Examples

### 1. Use Exceptions over Error Codes
Returning error codes clutters the caller's logic with error checking.
**Bad (C-style Error Codes):**
```typescript
const status = deleteItem(id);
if (status === "E_NOT_FOUND") {
  // handle
} else if (status === "E_LOCKED") {
  // handle
}
```
**Good (Exceptions):**
```typescript
try {
  deleteItem(id);
} catch (error) {
  if (error instanceof NotFoundError) { /* handle */ }
}
```

### 2. Extract Try/Catch Blocks
Try/Catch blocks obscure the business logic. Extract the bodies into separate functions.
```typescript
function deleteItem(id) {
  try {
    deleteItemLogic(id);
  } catch (e) {
    handleError(e);
  }
}
```

### 3. Fail Fast
Don't pass invalid data deep into your system. Validate at the boundaries (e.g., API controllers) and throw immediately.

### 4. Don't Return Null
Returning `null` forces the caller to check for `null`, leading to `NullReferenceExceptions`. Use Null Objects, Option types, or throw exceptions instead.

## ⚠️ Common Mistakes
- **Swallowing Errors:** `catch (e) { console.log(e) }` and then continuing execution as if nothing happened.
- **Leaking Implementation Details:** Returning raw database SQL errors to the frontend HTTP response.

## 🔒 Security Considerations
Never expose stack traces or internal system errors (like DB table names) to the end user. Catch these at the boundary and translate them to generic "Internal Server Error" messages.

## 🚀 Exercises
1. Refactor a codebase that uses null checks into one that throws and catches custom Domain Exceptions.
2. Implement a global error handling middleware in Express or NestJS.

## ✅ Summary and Checklist
- [ ] Use exceptions instead of returning error codes.
- [ ] Fail fast on invalid input.
- [ ] Never return or pass `null`.
