# Lesson 02: Variables and Data Types

## Learning Objectives
- Understand what variables are and how to use them.
- Identify common primitive data types.
- Distinguish between static and dynamic typing.
- Understand naming conventions and constants.

## What is a Variable?
A **variable** is a named storage location in a computer's memory. 

**Mental Model**: A variable is like a labeled box. You put a label on the box (the name), put something inside it (the value), and later you can look inside the box to see what's there, or replace it with something else.

```pseudocode
// Declaration and Assignment
CREATE variable named 'age'
SET 'age' TO 25

// Using the variable
PRINT age  // Output: 25

// Updating the variable
SET 'age' TO 26
PRINT age  // Output: 26
```

## Primitive Data Types
Data types specify what *kind* of data is stored in the box. Computers need to know this because they handle numbers differently than text.

1. **Numbers**: Integers (whole numbers, e.g., `42`, `-7`) and Floats/Doubles (decimals, e.g., `3.14`).
2. **Strings**: Text, always enclosed in quotes (e.g., `"Hello"`, `'World'`).
3. **Booleans**: Logical values, can only be `TRUE` or `FALSE`.
4. **Null / Undefined**: Represents the intentional absence of a value (Null) or a variable that has been created but not yet assigned a value (Undefined).

## Type Systems: Static vs. Dynamic
- **Static Typing** (e.g., Java, C++, TypeScript): When you create a box, you must declare what type of data goes in it. If you declare a box for numbers, you cannot put a string in it.
- **Dynamic Typing** (e.g., JavaScript, Python): A box can hold a number right now, and later you can replace it with a string. The type is checked at runtime.

## Naming Conventions
Variable names should be descriptive. 
- Bad: `let x = 10`
- Good: `let userAge = 10`

Common styles:
- `camelCase`: First word lowercase, subsequent words capitalized (most common in JS, Java).
- `snake_case`: Words separated by underscores (most common in Python).

## Constants
A **constant** is a variable whose value cannot be changed once it is set.
- *Analogy*: A box with a lock on it.
- Why use constants? It prevents accidental modification of values that shouldn't change (e.g., `PI = 3.14159`).

## Summary
- Variables store data.
- Data types tell the computer how to interpret the data.
- Naming conventions keep code readable.
- Constants protect data from being changed.
