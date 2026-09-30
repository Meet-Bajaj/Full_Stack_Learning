# Module 02: Assessment

Complete the following assessment to test your understanding of Programming Fundamentals.

## Part 1: Conceptual Questions
1. Describe the journey of a piece of code written in a high-level language to being executed by the computer's processor. Include the concepts of compiler/interpreter and machine code.
2. Give a real-world analogy for an Array and a real-world analogy for an Object/Dictionary.
3. Why is operator precedence important? What would happen if programming languages evaluated expressions purely from left to right?

## Part 2: Code Reading & Tracing
Trace the execution of the following pseudocode and write exactly what would be printed to the console.

```pseudocode
FUNCTION mystery(x, y)
    IF x > y THEN
        RETURN x - y
    ELSE
        RETURN y - x
    END IF
END FUNCTION

val1 = mystery(10, 5)
val2 = mystery(3, 8)

PRINT val1 + val2
```
*Your Answer:* _____________

## Part 3: Debugging
Identify and explain the bug in the following pseudocode designed to print the numbers 1, 2, 3, 4, 5.

```pseudocode
count = 1
WHILE count < 5 DO
    PRINT count
    count = count + 1
END WHILE
```
*Your Answer:* _____________

## Part 4: Writing Code
Write the pseudocode for a function called `findMax` that takes an array of numbers as a parameter and returns the largest number in the array. 

*(Hint: Initialize a variable `maxVal` to the first item in the array, then loop through the rest, updating `maxVal` if you find something larger).*
