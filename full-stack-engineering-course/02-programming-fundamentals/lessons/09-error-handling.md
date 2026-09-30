# Lesson 09: Error Handling

## Learning Objectives
- Identify different types of errors (Syntax, Runtime, Logic).
- Understand the `try/catch` concept.
- Learn basic defensive programming strategies.
- Practice reading error messages.

## What Are Errors?
Errors (or "bugs") are inevitable in programming. Handling them gracefully is what separates good software from fragile software.

### Types of Errors

1. **Syntax Errors**: 
   - The grammar of your code is wrong. The compiler/interpreter cannot even read it. 
   - *Example*: Missing a closing parenthesis or spelling `FUNCTION` as `FUNCTIN`.
   - *Result*: The program refuses to start.

2. **Runtime Errors**: 
   - The syntax is correct, but something goes wrong while the program is actually running.
   - *Example*: Trying to read a file that doesn't exist, or dividing a number by zero.
   - *Result*: The program crashes midway through.

3. **Logic Errors**: 
   - The program runs perfectly without crashing, but it produces the *wrong result*.
   - *Example*: Writing `area = width + height` instead of `area = width * height`.
   - *Result*: The hardest errors to find, as the computer doesn't give you an error message.

## Try / Catch / Finally
To prevent runtime errors from crashing the entire program, we use a `try/catch` block.

```pseudocode
TRY
    // Code that might fail
    fileData = readFile("important_document.txt")
    PRINT fileData
CATCH error
    // Code to execute IF an error occurs in the TRY block
    PRINT "Could not open the file. Please check if it exists."
    PRINT "Error details: " + error.message
FINALLY
    // Code that runs no matter what (success or failure)
    PRINT "Attempt to read file finished."
END TRY
```

## Defensive Programming
Don't trust user input. Anticipate things going wrong.

```pseudocode
FUNCTION divide(a, b)
    // Defensive check
    IF b == 0 THEN
        RETURN "Error: Cannot divide by zero!"
    END IF
    
    RETURN a / b
END FUNCTION
```

## Reading Error Messages
When a program crashes, it usually prints a **Stack Trace**. Don't panic when you see red text!
1. **Look at the first line**: It usually tells you the *type* of error (e.g., `TypeError`, `ReferenceError`).
2. **Look for line numbers**: It will tell you exactly which file and which line caused the crash.
3. **Google it**: Copying and pasting the exact error message into a search engine is a core developer skill.

## Summary
- Errors are normal.
- Syntax errors prevent execution; Runtime errors happen during execution; Logic errors yield wrong results.
- Use `try/catch` to handle anticipated runtime errors gracefully.
