# Lesson 06: Control Flow

## Learning Objectives
- Use `if/else`, `switch`, and ternary operators.
- Master Guard Clauses and Early Returns.
- Understand Truthy and Falsy values deeply.

## If / Else and Truthy/Falsy
JavaScript evaluates the condition inside the `()` to a boolean.
```javascript
if (user.isLoggedIn) {
  // do something
}
```
**Falsy Values:** `false`, `0`, `""`, `null`, `undefined`, `NaN`.
**Truthy Values:** EVERYTHING ELSE (including `[]`, `{}`, `"false"`, `-1`).

## Ternary Operator
A one-line `if/else`. Highly used in React.
Syntax: `condition ? expressionIfTrue : expressionIfFalse`
```javascript
const status = age >= 18 ? "Adult" : "Minor";
```

## Switch Statement
Useful when checking a single variable against many specific values.
```javascript
switch (role) {
  case "admin":
    console.log("Full Access");
    break; // NEVER FORGET THE BREAK!
  case "editor":
    console.log("Edit Access");
    break;
  default:
    console.log("Read Only");
}
```

## Guard Clauses & Early Returns (Best Practice)
Instead of wrapping your entire function in giant `if/else` blocks, handle edge cases at the top of the function and `return` immediately.

**Bad (Pyramid of Doom):**
```javascript
function processPayment(user, amount) {
  if (user != null) {
    if (user.hasCard) {
      if (amount > 0) {
        // Process payment
      }
    }
  }
}
```

**Good (Guard Clauses):**
```javascript
function processPayment(user, amount) {
  if (!user) return "No user";
  if (!user.hasCard) return "No card";
  if (amount <= 0) return "Invalid amount";
  
  // Process payment
}
```
*Mental Model:* Set up bouncers at the door of your function. Once past the bouncers, the rest of the code assumes everything is correct.

## Summary Checklist
- [ ] Memorize the 6 falsy values.
- [ ] Use ternaries for simple assignments.
- [ ] Adopt Guard Clauses to flatten your code.
