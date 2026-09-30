# Module 01 Assessment

This is your final assessment for the Computer Science Foundations module. 

## Section 1: Multiple Choice

1. Which of the following is volatile memory?
   - A) Hard Drive
   - B) SSD
   - C) RAM
   - D) ROM

2. Convert the binary number `1100` to decimal.
   - A) 10
   - B) 12
   - C) 14
   - D) 16

3. Which component maps a domain name like `amazon.com` to an IP address?
   - A) HTTP
   - B) DNS
   - C) TCP
   - D) Router

4. Which HTTP status code indicates a successful request?
   - A) 200
   - B) 404
   - C) 500
   - D) 301

5. You need to store user session data that must be retrieved instantly via a Session ID, and you don't care about order. Which data structure is best?
   - A) Array
   - B) Linked List
   - C) Hash Map
   - D) Stack

6. What is the time complexity of searching an unsorted array of size `n` for a specific value?
   - A) O(1)
   - B) O(log n)
   - C) O(n)
   - D) O(n²)

7. Which of the following is a characteristic of a Relational (SQL) database?
   - A) It uses JSON documents to store data.
   - B) It enforces a strict schema using tables and columns.
   - C) It stores everything entirely in RAM.
   - D) It does not support foreign keys.

8. What is the main difference between TCP and UDP?
   - A) TCP is faster but unreliable. UDP is slower but reliable.
   - B) TCP guarantees delivery and order. UDP does not.
   - C) TCP is used only for local networks. UDP is for the internet.
   - D) TCP uses IP addresses. UDP uses MAC addresses.

## Section 2: Practical Scenarios

**Scenario 1: Performance Debugging**
You have deployed a Node.js server. Users are complaining that logging in takes 15 seconds. You check the server, and the CPU usage is at 5%, but the Memory (RAM) usage is at 99%. What hardware component is likely the bottleneck, and why would this cause the app to be slow?
*(Hint: Think about swapping/paging).*

**Scenario 2: Data Structures**
You are building the "Undo" feature for a text editor. Every time the user types a word, it is saved. When they press CTRL+Z, the most recent word is removed. Which data structure should you use to manage the history of typed words, and why?

**Scenario 3: Algorithms**
A junior developer writes a function that compares every user in your database against every other user to find out if they have matching email addresses. 
What is the Big O time complexity of this function? If the database grows from 1,000 users to 10,000 users, how much slower will this function get?

## Answers & Rubric
*(Self-grade after completing)*
- Q1: C (RAM is volatile)
- Q2: B (8 + 4 = 12)
- Q3: B (DNS)
- Q4: A (200 OK)
- Q5: C (Hash Map provides O(1) lookup)
- Q6: C (O(n) - must check every item)
- Q7: B (Strict schema)
- Q8: B (TCP guarantees delivery)

- S1: The RAM is full. The OS is likely trying to use the slower Storage drive as temporary memory (called swapping or paging). Because the storage drive is much slower than RAM, the entire server grinds to a halt.
- S2: A Stack. Stacks operate on LIFO (Last-In, First-Out). The last action typed is the first one removed on an undo.
- S3: O(n²) - Quadratic time. Because it is nested (every user compared to every user). If the input grows by 10x (1,000 to 10,000), the time it takes will grow by 100x (10 squared).
