# Exercises: Computer Science Foundations

This document contains practical exercises to reinforce your mental models. Complete these before moving to the module assessment.

## Part 1: Data Representation

### Exercise 1.1: Binary to Decimal
Convert the following binary numbers to decimal. Show your work (powers of 2).
1. `0101`
2. `1111`
3. `10000000`

### Exercise 1.2: Decimal to Binary
Convert the following decimal numbers to binary.
1. `5`
2. `14`
3. `32`

### Exercise 1.3: Hexadecimal Colors
In CSS, a color is defined as `#RRGGBB` in hex.
1. What does `#000000` represent visually?
2. What does `#FFFFFF` represent visually?
3. If `#FF0000` is red, how would you write pure green?

---

## Part 2: Operating Systems

### Exercise 2.1: Process Hunting
1. If you are on Windows, open Task Manager. On Mac, open Activity Monitor. On Linux, run `htop` or `top`.
2. Find the process using the most RAM. What is it? How much memory (in MB/GB) is it using?
3. Find a process with multiple instances/threads running (e.g., a web browser usually has a "Helper" or "Renderer" process for every tab).

### Exercise 2.2: Memory Leak Scenario
Imagine a buggy program that asks the OS for 1MB of RAM every second, but never gives it back. 
1. What will eventually happen to the OS?
2. How does the OS resolve this?

---

## Part 3: Networking

### Exercise 3.1: Trace the Request
Write out the step-by-step sequence of events that happens when you type `https://github.com` into your browser and press Enter. Include: DNS, TCP, HTTP Request, HTTP Response, and Browser Rendering.

### Exercise 3.2: Terminal Networking
Open your terminal / command line.
1. Run `ping wikipedia.org`. Note the IP address it returns.
2. Run `tracert wikipedia.org` (Windows) or `traceroute wikipedia.org` (Mac/Linux). 
   - Notice how many "hops" (routers) your packet took to reach Wikipedia's servers. How many hops did it take?

---

## Part 4: Data Structures & Algorithms

### Exercise 4.1: Choose the Data Structure
For each scenario, pick the most optimal data structure (Array, Hash Map, Stack, Queue, Linked List).
1. **Scenario A**: You are building a "recent actions" list where the user can hit CTRL+Z to undo their last action.
2. **Scenario B**: A system that manages orders at a coffee shop. Orders must be processed in the exact order they were received.
3. **Scenario C**: A cache system where you need to look up a user's session data based on a random string (session ID) as fast as possible.
4. **Scenario D**: A leaderboard showing the top 10 players in order of their score.

### Exercise 4.2: Big O Identification
Identify the Time Complexity (O(1), O(n), O(n²), O(log n)) for each operation:
1. Finding a specific user by iterating through an unsorted array of 1,000 users.
2. Getting the length of an array.
3. Checking every item in a list against every other item in the list to find duplicates.
4. Using Binary Search to find a number in a sorted list of 1,000,000 numbers.

---

## Part 5: Databases

### Exercise 5.1: Database Selection
1. You are building a banking app where data consistency is critical. Money subtracted from one account MUST be added to another. Do you choose SQL or NoSQL?
2. You are building a rapid prototype of a social app where the data model changes every day, and you need maximum flexibility. Do you choose SQL or NoSQL?

---
*Self-Correction Note: If you struggled with Part 4, re-read Lessons 06 and 07. Conceptualizing data structures is heavily tested in interviews.*
