# Lesson 05: Loops

## Learning Objectives
- Understand why loops are necessary.
- Use `for`, `while`, and `do-while` loops.
- Avoid infinite loops.
- Understand `break` and `continue`.

## The Power of Iteration
Often, you need to run the same block of code multiple times. Writing it out manually violates the DRY (Don't Repeat Yourself) principle. Loops allow you to execute code repeatedly based on a condition.

## 1. The `while` Loop
Repeats a block of code AS LONG AS a condition is true. The condition is checked *before* each iteration.

```pseudocode
count = 0
WHILE count < 5 DO
    PRINT "Count is: " + count
    count = count + 1  // Crucial: Update the condition!
END WHILE
```

## 2. The `for` Loop
Best used when you know exactly how many times you want to loop. It combines initialization, condition, and update into one line.

```pseudocode
// FOR (initialization; condition; update)
FOR i = 0 TO 4 DO
    PRINT "i is: " + i
END FOR
```

## 3. The `do-while` Loop
Similar to a while loop, but the code block is guaranteed to run *at least once* because the condition is checked *after* the iteration.

```pseudocode
DO
    PRINT "This prints at least once."
WHILE false
```

## Infinite Loops (The Danger Zone)
If the loop condition never becomes false, the loop will run forever, freezing your program and potentially crashing your computer.

```pseudocode
// DANGER: Infinite Loop
count = 0
WHILE count < 5 DO
    PRINT "Infinite!"
    // Forgot to increment count!
END WHILE
```

## Break and Continue
- **`break`**: Immediately exits the entire loop.
- **`continue`**: Skips the rest of the *current* iteration and moves to the next evaluation of the condition.

```pseudocode
FOR i = 1 TO 10 DO
    IF i == 5 THEN
        CONTINUE // Skips printing 5
    END IF
    IF i == 8 THEN
        BREAK // Stops the loop entirely before reaching 10
    END IF
    PRINT i
END FOR
```

## Summary
- Loops automate repetitive tasks.
- Use `for` when you know the number of iterations.
- Use `while` when the number of iterations is unknown and depends on a condition.
- Always ensure your loops have a way to terminate!
