# Module 02: Projects

These projects are designed to synthesize the concepts learned in this module. Write the logic using pseudocode, or implement them in a programming language if you are familiar with one.

## Project 1: Console Calculator
**Goal**: Build a simple calculator that performs basic arithmetic operations.

**Requirements**:
1. Create a function `calculate(num1, operator, num2)`.
2. Use a `switch` or `if/else if` block based on the `operator` ("+", "-", "*", "/").
3. Handle division by zero defensively (return an error message).
4. Return the result.

## Project 2: Number Guessing Game
**Goal**: The program picks a random number, and the user tries to guess it.

**Requirements**:
1. Assume you have a function `random(1, 10)` that gives a target number.
2. Use a `while` loop to repeatedly ask the user for a guess (assume a function `getUserInput()`).
3. If the guess is too high, print "Too high!".
4. If the guess is too low, print "Too low!".
5. If they guess correctly, print "You won!" and `break` the loop.

## Project 3: Simple Quiz Program
**Goal**: Ask the user multiple questions and calculate a final score.

**Requirements**:
1. Create an array of objects. Each object should represent a question:
   `{ prompt: "What is 2+2?", answer: "4" }`
2. Initialize a `score` variable to 0.
3. Use a `for` loop to iterate through the array of questions.
4. For each question, ask the user (using `getUserInput()`).
5. If the user's input matches the `answer`, add 1 to the score.
6. After the loop, print the final score out of the total number of questions.

## Project 4: Temperature Converter
**Goal**: Convert temperatures between Celsius and Fahrenheit.

**Requirements**:
1. Write a function `celsiusToFahrenheit(c)` -> returns `(c * 9/5) + 32`.
2. Write a function `fahrenheitToCelsius(f)` -> returns `(f - 32) * 5/9`.
3. Write a main control flow where the user specifies which conversion they want to do, inputs the temperature, and prints the result.
