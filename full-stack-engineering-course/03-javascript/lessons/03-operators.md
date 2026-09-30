# Lesson 03: Operators

## Learning Objectives
- Master Arithmetic, Assignment, and Logical operators.
- Understand strict vs loose equality (`==` vs `===`).
- Learn modern ES6+ operators: Nullish Coalescing (`??`) and Optional Chaining (`?.`).

## Arithmetic & Assignment
Standard math applies: `+`, `-`, `*`, `/`, `%` (modulo - remainder).
Assignment shortcuts: `+=`, `-=`, `*=`, `/=`.
```javascript
let x = 10;
x += 5; // x is 15
```

## Comparison: `==` vs `===`
- **Loose Equality (`==`):** Coerces types before comparing.
  `"5" == 5` is `true`.
- **Strict Equality (`===`):** Checks both value and type.
  `"5" === 5` is `false`.
**Best Practice:** ALWAYS use `===` and `!==`. Pretend `==` does not exist.

## Logical Operators
- **AND (`&&`):** True if BOTH sides are truthy.
- **OR (`||`):** True if AT LEAST ONE side is truthy.
- **NOT (`!`):** Inverts truthiness.

### Short-Circuit Evaluation
JS stops evaluating `&&` as soon as it hits a falsy value, and stops evaluating `||` as soon as it hits a truthy value.
```javascript
const name = user.name || "Guest"; // If user.name is falsy, defaults to "Guest"
```

## Modern Operators (ES2020+)

### Nullish Coalescing (`??`)
`||` treats `0` and `""` as falsy, which can cause bugs if `0` is a valid input. `??` ONLY falls back if the left side is exactly `null` or `undefined`.
```javascript
const score = 0;
console.log(score || 10); // 10 (Bug! 0 is falsy)
console.log(score ?? 10); // 0 (Correct!)
```

### Optional Chaining (`?.`)
Safely access deeply nested object properties without crashing if an intermediate property is missing.
```javascript
// Old way
const zip = user && user.address && user.address.zipCode;

// New way
const zip = user?.address?.zipCode;
```

## Summary Checklist
- [ ] Always use `===`.
- [ ] Understand Short-circuiting.
- [ ] Use `??` over `||` for default assignments involving numbers or booleans.
- [ ] Use `?.` to prevent "Cannot read properties of undefined" errors.
