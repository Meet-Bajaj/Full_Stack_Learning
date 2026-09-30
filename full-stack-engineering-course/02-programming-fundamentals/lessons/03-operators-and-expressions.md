# Lesson 03: Operators and Expressions

## Learning Objectives
- Use arithmetic, comparison, and logical operators.
- Understand string concatenation.
- Evaluate expressions based on operator precedence.
- Recognize the dangers of type coercion.

## Expressions
An **expression** is any piece of code that evaluates to a single value.
- `5` is an expression (evaluates to 5).
- `5 + 3` is an expression (evaluates to 8).

## Arithmetic Operators
Used to perform mathematical calculations.
- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Modulo (Remainder): `%` (e.g., `10 % 3` is `1`)

## Comparison Operators
Used to compare two values. They always result in a Boolean (`TRUE` or `FALSE`).
- Equal to: `==`
- Not equal to: `!=`
- Greater than: `>`
- Less than: `<`
- Greater than or equal: `>=`
- Less than or equal: `<=`

*(Note: Some languages like JavaScript have strict equality `===` which checks both value and type).*

## Logical Operators
Used to combine multiple boolean expressions.
- **AND (`&&`)**: True ONLY if BOTH sides are true.
- **OR (`||`)**: True if AT LEAST ONE side is true.
- **NOT (`!`)**: Reverses the boolean value (`!TRUE` becomes `FALSE`).

## String Concatenation
The `+` operator can often be used to join (concatenate) strings together.
```pseudocode
firstName = "John"
lastName = "Doe"
fullName = firstName + " " + lastName  // "John Doe"
```

## Operator Precedence (Order of Operations)
Just like in math (PEMDAS), programming languages follow rules for which operators evaluate first.
```pseudocode
result = 5 + 3 * 2  // Result is 11, not 16. Multiplication happens first.
result = (5 + 3) * 2 // Result is 16. Parentheses override precedence.
```

## Type Coercion Dangers
In dynamically typed languages, if you mix types, the language might try to "guess" what you mean by converting (coercing) one type into another.
```pseudocode
// In JavaScript:
"5" + 2   // Results in "52" (String concatenation)
"5" - 2   // Results in 3 (Math subtraction)
```
*Best Practice*: Always explicitly convert types rather than relying on implicit coercion.

## Summary
- Operators allow us to manipulate and compare data.
- Expressions evaluate to a single value.
- Understanding operator precedence is critical for correct calculations.
