# Lesson 07: Arrays and Collections

## Learning Objectives
- Understand arrays as ordered lists of data.
- Access elements using zero-based indexing.
- Iterate over arrays.
- Understand common array operations.

## What is an Array?
An **array** (often called a List in Python) is a data structure used to store a collection of items in a single variable.

**Mental Model**: Think of an array as a pill organizer or a row of lockers. Each compartment holds an item, and each compartment has a number.

```pseudocode
// An array of strings
colors = ["Red", "Green", "Blue", "Yellow"]

// Arrays can hold mixed data types (in dynamically typed languages)
mixedArray = [42, "Hello", TRUE]
```

## Accessing Elements (Zero-Based Indexing)
Most programming languages start counting at 0, not 1. The position of an element is called its **index**.

```pseudocode
colors = ["Red", "Green", "Blue"]

PRINT colors[0] // "Red"
PRINT colors[1] // "Green"
PRINT colors[2] // "Blue"

// Modifying an element
colors[1] = "Purple" // Array is now ["Red", "Purple", "Blue"]
```

## Iterating Over Arrays
Loops and arrays are best friends. You frequently use loops to process every item in an array.

```pseudocode
scores = [85, 92, 78, 90]

FOR i = 0 TO length(scores) - 1 DO
    PRINT "Score: " + scores[i]
END FOR
```

## Common Array Operations
Languages provide built-in functions (methods) to manipulate arrays.
- **Push / Append**: Add an item to the end.
- **Pop**: Remove the last item.
- **Length / Size**: Get the total number of items.

*Advanced Array Methods (Concepts to know):*
- **Map**: Transform every item in the array to create a new array. (e.g., multiply all numbers by 2).
- **Filter**: Keep only items that pass a specific condition. (e.g., keep only even numbers).
- **Reduce**: Collapse the array down to a single value. (e.g., sum all numbers).

## Multi-Dimensional Arrays
Arrays can hold other arrays! This is useful for representing grids, like a chessboard.

```pseudocode
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

PRINT grid[1][2] // Accesses row index 1, column index 2. Value is 6.
```

## Summary
- Arrays store ordered collections of data.
- Elements are accessed via zero-based indices.
- Iterating over arrays is a fundamental programming pattern.
