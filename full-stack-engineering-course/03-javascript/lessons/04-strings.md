# Lesson 04: Strings

## Learning Objectives
- Use String methods for common operations.
- Understand Template Literals.
- Grasp String immutability.

## Creating Strings
You can use single quotes `''`, double quotes `""`, or backticks ``` `` ```. Backticks are called Template Literals.

### Template Literals
They allow multi-line strings and variable interpolation (embedding variables directly).
```javascript
const name = "Alice";
const greeting = `Hello, ${name}!
Welcome to the course.`;
```

## String Immutability
Strings in JavaScript are immutable. You cannot change a character in place. String methods always return a *new* string.
```javascript
let text = "hello";
text[0] = "H"; // Fails silently, text is still "hello"
text = text.toUpperCase(); // Now it's "HELLO"
```

## Common String Methods
- `length`: Property, not a method. `text.length`
- `toUpperCase()` / `toLowerCase()`
- `trim()`: Removes whitespace from both ends.
- `includes(searchString)`: Returns true/false.
- `indexOf(searchString)`: Returns index, or -1 if not found.
- `slice(start, end)`: Extracts a section.
- `split(separator)`: Converts a string to an array based on the separator.
- `replace(target, replacement)`: Replaces the first occurrence. `replaceAll` replaces all.

```javascript
const sentence = "  JS is awesome!  ";
console.log(sentence.trim().replace("awesome", "hard").toUpperCase()); 
// "JS IS HARD!"
```

## Summary Checklist
- [ ] Use template literals for interpolation and multi-line strings.
- [ ] Remember strings are immutable.
- [ ] Know `.trim()`, `.slice()`, and `.split()`.
