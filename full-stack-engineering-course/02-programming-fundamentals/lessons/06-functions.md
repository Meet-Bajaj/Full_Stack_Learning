# Lesson 06: Functions

## Learning Objectives
- Define and invoke functions.
- Differentiate between parameters and arguments.
- Understand return values and variable scope.
- Grasp the concepts of pure functions and side effects.

## What is a Function?
A **function** is a self-contained block of code designed to perform a specific task. 

**Mental Model**: A function is a mini-machine inside your program. You feed raw materials into the machine (inputs/arguments), the machine does some work, and it spits out a finished product (output/return value).

**Why use functions?**
- **Reusability (DRY)**: Write the code once, use it everywhere.
- **Organization**: Break a massive program down into small, logical chunks.

## Defining and Calling Functions

```pseudocode
// Defining the function
FUNCTION calculateArea(width, height)
    area = width * height
    RETURN area
END FUNCTION

// Calling (invoking) the function
myArea = calculateArea(5, 10)
PRINT myArea // Outputs 50
```

## Parameters vs. Arguments
- **Parameters**: The variables listed in the function's definition (`width`, `height`). They act as placeholders.
- **Arguments**: The actual values you pass into the function when you call it (`5`, `10`).

## The `RETURN` Statement
Functions can output a value back to where they were called using the `return` keyword. 
*Note: A function ends immediately after returning a value.*

## Variable Scope
Scope defines where variables are accessible in your code.
- **Global Scope**: Variables declared outside any function. They can be accessed from anywhere.
- **Local Scope**: Variables declared *inside* a function. They exist only within that function and are destroyed when the function finishes.

```pseudocode
globalVar = "I am everywhere"

FUNCTION myFunc()
    localVar = "I am hidden"
    PRINT globalVar // Works!
END FUNCTION

PRINT localVar // ERROR: localVar does not exist here.
```

## Pure Functions vs. Side Effects
- **Pure Function**: Given the same inputs, it ALWAYS returns the same output. It does not modify anything outside its scope. (e.g., `calculateArea`).
- **Side Effect**: When a function modifies state outside of its local scope (e.g., updating a global variable, writing to a database, printing to a screen). 

*Best Practice*: Aim for mostly pure functions; they are much easier to test and debug.

## Summary
- Functions group code into reusable blocks.
- They take inputs (arguments) and produce outputs (return values).
- Scope protects variables from being accessed where they shouldn't be.
