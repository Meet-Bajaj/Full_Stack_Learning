# Lesson 05: Numbers and Math

## Learning Objectives
- Understand the Number type and floating-point quirks.
- Convert strings to numbers.
- Use the `Math` object for complex calculations.
- Understand `NaN` and `Infinity`.

## Floating Point Inaccuracy
JavaScript uses IEEE 754 double-precision floats for all numbers. This leads to a famous quirk:
```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
```
**Why?** Base-10 decimals cannot always be represented perfectly in base-2 binary.
**Fix:** For currency, work in cents (integers) and divide by 100 at the end.

## Type Conversion
To convert strings to numbers:
- `parseInt("42px")` -> `42` (Extracts integers, ignores trailing text)
- `parseFloat("3.14")` -> `3.14`
- `Number("42")` -> `42` (Stricter, fails if there is non-numeric text)
- `+"42"` -> `42` (Unary plus, concise trick)

## NaN (Not-a-Number)
`NaN` happens when a math operation fails.
```javascript
console.log("apple" / 2); // NaN
console.log(typeof NaN); // "number" (Ironic!)
```
Use `Number.isNaN(value)` to check for it, because `NaN === NaN` is `false`!

## The Math Object
A built-in object with static properties and methods.
- `Math.round(4.5)` -> 5
- `Math.floor(4.9)` -> 4 (Rounds down)
- `Math.ceil(4.1)` -> 5 (Rounds up)
- `Math.random()` -> Returns a random decimal between 0 (inclusive) and 1 (exclusive).
- `Math.max(1, 5, 2)` -> 5

### Trick: Random integer between min and max
```javascript
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
```

## Summary Checklist
- [ ] Never compare floating point decimals strictly.
- [ ] Use `Number.isNaN()` to check for invalid math results.
- [ ] Use the `Math` object.
