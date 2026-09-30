# Lesson 02: Variables and Data Types

## Learning Objectives
- Differentiate between `var`, `let`, and `const`.
- Understand the 7 primitive data types.
- Master type coercion and the `typeof` operator.

## Variable Declarations

### `var` (Legacy - Avoid)
`var` is function-scoped. If declared in an `if` block, it "leaks" outside. It is also initialized as `undefined` before execution (Hoisting).

### `let` (Modern - Mutable)
`let` is block-scoped (lives only within the `{}` where it is defined). It can be reassigned.
```javascript
let count = 0;
count = 1; // Valid
```

### `const` (Modern - Immutable Reference)
`const` is block-scoped. It *cannot* be reassigned. However, if the value is an object or array, its *properties* can be mutated.
```javascript
const user = { name: "Alice" };
user.name = "Bob"; // Valid! The reference to the object didn't change.
// user = { name: "Charlie" }; // Error! Reassignment.
```

## Primitive Data Types
JavaScript has 7 primitive types (immutable, stored directly in memory).
1. **String:** `"Hello"`, `'World'`, `` `Template` ``
2. **Number:** `42`, `3.14`, `NaN`, `Infinity` (No difference between int and float)
3. **BigInt:** `9007199254740991n` (For exceptionally large integers)
4. **Boolean:** `true`, `false`
5. **Undefined:** A variable declared but not assigned a value.
6. **Null:** Intentional absence of any object value.
7. **Symbol:** Unique identifiers (rarely used in basic apps).

## The `typeof` Operator
Use `typeof` to check a variable's type.
```javascript
typeof "test" // "string"
typeof 42 // "number"
typeof undefined // "undefined"
typeof null // "object" (This is a historical JS bug!)
```

## Type Coercion
JavaScript tries to be helpful by automatically converting types, which causes weird bugs.
```javascript
"5" + 2 // "52" (Number coerced to string)
"5" - 2 // 3 (String coerced to number)
```
**Best Practice:** Never rely on implicit coercion. Explicitly cast types using `Number("5")` or `String(5)`.

## Summary Checklist
- [ ] Stop using `var`. Use `const` by default, `let` if the value changes.
- [ ] Memorize the 7 primitives.
- [ ] Understand the `null` typeof bug.
- [ ] Be wary of implicit type coercion.
