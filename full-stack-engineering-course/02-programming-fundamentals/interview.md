# Module 02: Interview Questions

These are common entry-level conceptual interview questions regarding programming fundamentals.

## Junior Level Questions

**1. What is the difference between an Array and an Object (or Dictionary/Map)?**
*Answer Focus*: Arrays are ordered lists accessed by numerical indices (0, 1, 2). Objects store unstructured data as key-value pairs, accessed via named keys. Use arrays for sequences; use objects for representing entities with properties.

**2. Explain the difference between `==` and `=` in most programming languages.**
*Answer Focus*: `=` is the assignment operator, used to put a value into a variable. `==` is the equality comparison operator, used to check if two values are equal (returns a boolean).

**3. What is an infinite loop and how do you prevent it?**
*Answer Focus*: An infinite loop occurs when the loop's termination condition is never met, causing the code to run forever. Prevent it by ensuring that the variables involved in the condition are updated correctly inside the loop block.

**4. What is the difference between a parameter and an argument?**
*Answer Focus*: A parameter is a variable in a function definition (a placeholder). An argument is the actual data passed into the function when it is invoked.

**5. Why do we use `try/catch` blocks?**
*Answer Focus*: To handle runtime errors gracefully. Instead of a program crashing completely when it encounters an unexpected issue (like a missing file), `catch` allows the developer to handle the error, log it, and keep the application running or fail gracefully.

## Mid-Level Concepts to Discuss

**6. Explain variable scope and why global variables are generally discouraged.**
*Answer Focus*: Scope determines where a variable is accessible. Global variables can be accessed and modified from anywhere in the program. This makes state highly unpredictable and bugs hard to track down. Local scoping encapsulates data.

**7. What is a pure function?**
*Answer Focus*: A function that, given the same inputs, will always return the exact same output, and does not cause any observable side effects (modifying outside variables, DOM manipulation, network requests). Pure functions are highly testable.
