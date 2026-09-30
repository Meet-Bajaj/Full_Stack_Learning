# Lesson 06: Data Structures Introduction

## Learning Objectives
- Define what a data structure is.
- Understand the conceptual layout of Arrays, Objects/Hash Maps, Stacks, Queues, and Linked Lists.
- Identify the correct data structure for a given scenario.

## Prerequisites
- Basic understanding of computer memory (Lesson 01 & 03).

## Concept Explanation
A Data Structure is a specific way of organizing and storing data in a computer so that it can be accessed and modified efficiently. Different structures optimize for different operations (e.g., searching vs. inserting).

### 1. Arrays (Lists)
A collection of items stored in contiguous (side-by-side) memory locations.
- **Pros**: Lightning-fast to access an item if you know its index (e.g., `arr[3]`).
- **Cons**: Slow to insert or delete items in the middle, because everything else has to shift over.
- **Use Case**: Storing a list of high scores.

### 2. Hash Maps (Objects / Dictionaries)
Stores data in Key-Value pairs. It uses a "hash function" to instantly find where a value is stored based on its key.
- **Pros**: Lightning-fast lookups, insertions, and deletions based on the key.
- **Cons**: Data is unordered.
- **Use Case**: Storing a user profile (`{"name": "Alice", "age": 25}`).

### 3. Stacks
A LIFO (Last-In, First-Out) structure. You can only add to the top, and remove from the top.
- **Use Case**: The "Undo" button in your text editor. Browser history (Back button).

### 4. Queues
A FIFO (First-In, First-Out) structure. You add to the back, and remove from the front.
- **Use Case**: A print spooler waiting to print documents. A ticket-purchasing line online.

### 5. Linked Lists (Conceptual)
A chain of items where each item contains the data AND a pointer to the next item in memory. They don't need to be contiguous in RAM.
- **Pros**: Fast to insert/delete items anywhere (just change the pointers).
- **Cons**: Slow to access an item (must start at the beginning and traverse the chain).
- **Use Case**: Implementing Stacks and Queues underneath the hood; managing memory allocation.

## WHY it exists
Choosing the wrong data structure can make an application millions of times slower. If you need to frequently look up users by their ID among 10 million users, using an Array requires searching through all 10 million items. Using a Hash Map finds the user instantly.

## Mental Model & Real-World Analogy
- **Array**: A row of mailboxes. If you know you need mailbox #4, you walk right to it. 
- **Hash Map**: A coat check at a club. You give them a coat, they give you a ticket number (the key). Later, you hand them the key, and they immediately grab your specific coat.
- **Stack**: A stack of plates at a buffet. You take from the top. The last plate washed is the first one taken.
- **Queue**: A line at a grocery checkout. The first person in line gets served first.
- **Linked List**: A treasure hunt. The first clue tells you where to find the second clue, which tells you where to find the third. You can't jump to the 5th clue without finding the first 4.

## Common Mistakes
- **Using an Array when you need a Map**: If your code is constantly doing `array.find(user => user.id === 123)`, you should probably refactor your data to be an Object where the keys are the user IDs.

## Exercises
Identify the best data structure for the following scenarios:
1. You are building a music player and need to implement a "Next Song" and "Previous Song" feature.
2. You need to keep track of the IP addresses that are currently banned from your server for fast lookup.
3. You are building a customer service chat application where the oldest message must be handled first by an agent.

## Summary
Data structures are tools in a toolbox. Arrays are great for ordered lists, Hash Maps are perfect for instant key-based lookups, Stacks handle LIFO scenarios, and Queues handle FIFO scenarios. 

## Completion Checklist
- [ ] I can describe the difference between an Array and a Hash Map.
- [ ] I know what LIFO and FIFO mean.
- [ ] I can identify the right data structure for a real-world scenario.
