# Lesson 12: Error Handling

## Learning Objectives
- Use `try/catch/finally` blocks safely.
- Throw custom errors.
- Understand built-in Error types.

## The Problem
If a JavaScript error occurs, the script stops executing entirely. This crashes your app. We need to handle errors gracefully.

## try...catch
Wrap risky code (like network requests or parsing JSON) in a `try` block. If it fails, control is passed to the `catch` block.
```javascript
try {
  const data = JSON.parse("invalid json string"); // This throws an error
  console.log("Success:", data); // This won't run
} catch (error) {
  console.error("Failed to parse JSON:", error.message); 
} finally {
  console.log("This runs no matter what (success or failure).");
  // Good for cleanup, like hiding a loading spinner.
}
```

## Throwing Errors
You can generate your own errors using the `throw` keyword and the `Error` object.
```javascript
function withdrawMoney(amount, balance) {
  if (amount > balance) {
    throw new Error("Insufficient funds"); // Execution stops here
  }
  return balance - amount;
}

try {
  withdrawMoney(100, 50);
} catch (err) {
  console.log(err.message); // "Insufficient funds"
}
```

## Common Built-in Errors
- `ReferenceError`: Using a variable that doesn't exist.
- `TypeError`: Calling a method on an incorrect type (e.g., `null.toUpperCase()`).
- `SyntaxError`: Typing invalid JavaScript (caught at parse time).

## Summary Checklist
- [ ] Wrap unpredictable code in `try/catch`.
- [ ] Use `throw new Error()` for business logic constraints.
- [ ] Use `finally` for guaranteed cleanup actions.
