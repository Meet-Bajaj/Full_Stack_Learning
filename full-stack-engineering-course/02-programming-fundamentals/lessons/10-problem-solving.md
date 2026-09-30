# Lesson 10: Problem Solving

## Learning Objectives
- Break down complex problems into manageable steps.
- Use pseudocode and flowcharts to design solutions.
- Understand incremental development.
- Learn effective debugging strategies like Rubber Duck Debugging.

## The Problem Solving Process
Programming isn't just about typing code; it's about solving problems. Jumping straight into writing code without a plan usually leads to messy, broken software.

### Step 1: Understand the Problem
Before writing anything, ensure you fully grasp what needs to be built.
- What are the inputs?
- What is the expected output?
- Are there edge cases?

### Step 2: Break it Down (Decomposition)
Break the large problem into smaller, bite-sized tasks.
*Example*: Building a Login System.
- Task 1: Get username and password from user.
- Task 2: Check if username exists in the database.
- Task 3: If it exists, check if the password matches.
- Task 4: If matches, grant access; else show error.

### Step 3: Write Pseudocode or Draw a Flowchart
**Pseudocode** is writing the logic in plain English, structured like code, before worrying about exact syntax.

### Step 4: Write the Code Incrementally
**Incremental Development**: Write a tiny piece of code, test it, verify it works, then move to the next piece. NEVER write 100 lines of code without testing.

### Step 5: Refactor
Once it works, clean it up. Make variable names clearer, extract repetitive code into functions (DRY).

## Debugging Strategies
When things go wrong (and they will):

1. **Print Statements (Console Logging)**
   - Scatter `PRINT` statements throughout your code to check the value of variables at different steps. Find out exactly *where* the data stops being what you expect.

2. **Isolate the Problem**
   - Comment out large chunks of code until the bug disappears. The bug is in the chunk you just commented out.

3. **Rubber Duck Debugging**
   - A real psychological phenomenon. Explain your code, line by line, out loud to an inanimate object (like a rubber duck). The act of verbalizing the logic forces your brain to slow down, and you often spot the logic flaw yourself.

4. **Take a Walk**
   - Staring at the screen for 4 hours will not solve a stubborn bug. Step away. Your subconscious will keep working on it.

## Summary
- Understand -> Plan (Pseudocode) -> Code (Incrementally) -> Refactor.
- Debug systematically, don't just guess randomly.
- Explain your code out loud when stuck.
