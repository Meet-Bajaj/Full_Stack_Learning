# Lesson 04: Control Flow

## Learning Objectives
- Direct program execution using conditional statements.
- Understand if/else, switch statements, and ternary operators.
- Evaluate Truthy and Falsy values.

## What is Control Flow?
Programs normally run line by line, from top to bottom. **Control flow** statements allow you to change this path, making decisions, skipping lines, or repeating lines.

**Mental Model**: Think of control flow as a fork in the road. Depending on certain conditions, you take one path or another.

## If / Else Statements
The most basic decision-making structure.

```pseudocode
IF temperature > 30 THEN
    PRINT "It's hot outside!"
ELSE IF temperature > 20 THEN
    PRINT "It's nice outside."
ELSE
    PRINT "It's cold!"
END IF
```

## Switch Statements
When you have many possible exact values for a single variable, a `switch` statement is often cleaner than a long chain of `if/else if`.

```pseudocode
SWITCH dayOfWeek:
    CASE "Monday":
        PRINT "Start of the work week."
    CASE "Friday":
        PRINT "TGIF!"
    CASE "Saturday":
    CASE "Sunday":
        PRINT "Weekend!"
    DEFAULT:
        PRINT "Just a regular day."
```

## Ternary Operator
A shorthand for a simple if/else statement. It returns one value if the condition is true, and another if it's false.

Format: `condition ? value_if_true : value_if_false`

```pseudocode
isAdult = (age >= 18) ? TRUE : FALSE
```

## Truthy and Falsy Values
In many languages (especially dynamically typed ones like JS/Python), non-boolean values can be evaluated in a boolean context (like an `if` statement).
- **Falsy values**: Values that evaluate to FALSE. (e.g., `0`, `""` (empty string), `null`, `undefined`, `false`).
- **Truthy values**: Almost everything else.

```pseudocode
username = ""
IF username THEN
    // This code will NOT run because empty string is falsy.
    PRINT "Welcome " + username
ELSE
    PRINT "Please log in."
END IF
```

## Summary
- `if/else` allows your program to make decisions based on conditions.
- `switch` is useful for checking a single variable against many specific values.
- Truthy/Falsy evaluation is a convenient but sometimes tricky feature of dynamic languages.
