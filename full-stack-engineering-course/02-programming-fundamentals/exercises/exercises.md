# Module 02: Exercises

Practice is essential to learning programming. Write your answers in pseudocode or your language of choice.

## Section 1: Variables & Data Types
1. **Declaration**: Declare a variable called `userAge` and assign it the value `25`.
2. **Reassignment**: Update `userAge` to be one year older.
3. **Data Types**: Identify the data type of the following values:
   - `3.14`
   - `"Hello World"`
   - `false`
   - `[1, 2, 3]`

## Section 2: Operators
4. **Expression Evaluation**: Without running code, what is the result of `10 + 5 * 2 - 4 / 2`? 
5. **Comparison**: Write a boolean expression that checks if a variable `score` is greater than or equal to 90.
6. **Logical**: Write an expression that evaluates to true ONLY if `age > 18` AND `hasLicense == true`.

## Section 3: Control Flow
7. **If/Else**: Write an if/else block that prints "Pass" if `score` is >= 50, and "Fail" otherwise.
8. **Switch**: Write a switch statement for a variable `trafficLight` (values: "red", "yellow", "green") that prints the appropriate driving action.
9. **Ternary**: Convert Exercise 7 into a single ternary operation.

## Section 4: Loops
10. **For Loop**: Write a for loop that prints the numbers 1 to 10.
11. **While Loop**: Write a while loop that simulates a countdown from 5 to 1, then prints "Liftoff!".
12. **Loop Tracing**: What does this code print?
    ```pseudocode
    sum = 0
    FOR i = 1 TO 3 DO
        sum = sum + i
    END FOR
    PRINT sum
    ```

## Section 5: Functions
13. **Simple Function**: Write a function `greet(name)` that prints "Hello, [name]!".
14. **Return Values**: Write a function `multiply(a, b)` that returns the product of a and b.
15. **Scope**: Explain why this code throws an error:
    ```pseudocode
    FUNCTION calculate()
        result = 100
    END FUNCTION
    PRINT result
    ```

## Section 6: Arrays and Objects
16. **Array Access**: Given `fruits = ["apple", "banana", "cherry"]`, print "cherry".
17. **Array Iteration**: Write a loop to print every item in the `fruits` array.
18. **Object Creation**: Create an object representing a `Book` with properties for `title`, `author`, and `pages`.
19. **Object Access**: Print the author of the book you just created.

## Section 7: Error Handling & Debugging
20. **Try/Catch**: Wrap the hypothetical function `connectToDatabase()` in a try/catch block. If it fails, print "Connection failed".
21. **Debugging**: Find the logic error in this function that checks for even numbers:
    ```pseudocode
    FUNCTION isEven(number)
        IF number % 2 == 1 THEN
            RETURN true
        ELSE
            RETURN false
        END IF
    END FUNCTION
    ```
