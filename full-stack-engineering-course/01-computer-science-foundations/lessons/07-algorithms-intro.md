# Lesson 07: Algorithms & Big O Notation

## Learning Objectives
- Define what an algorithm is.
- Understand the concept of Time Complexity and Big O Notation.
- Differentiate between O(1), O(n), O(n²), and O(log n).
- Compare Linear Search vs Binary Search.

## Prerequisites
- Lesson 06 (Data Structures).

## Concept Explanation
An **Algorithm** is simply a step-by-step set of instructions to solve a specific problem. A recipe for baking a cake is an algorithm. 

In computer science, we care about how *efficient* an algorithm is. We measure efficiency using **Big O Notation**, which describes how the runtime of an algorithm grows as the input size (n) grows.

### Big O Complexities
1. **O(1) - Constant Time**: 
   - The operation takes the same amount of time regardless of how much data there is. 
   - Example: Looking up a value in a Hash Map, or getting the first item in an array `arr[0]`.
2. **O(n) - Linear Time**: 
   - The time it takes grows directly in proportion to the data size. If you have 10x more data, it takes 10x longer.
   - Example: Looping through an array to print every item.
3. **O(n²) - Quadratic Time**: 
   - The time grows exponentially. 10x more data takes 100x longer. Usually caused by nested loops.
   - Example: Comparing every item in an array to every other item in that array.
4. **O(log n) - Logarithmic Time**: 
   - Highly efficient for large datasets. The data size can double, but the time it takes only increases by 1 step.
   - Example: Binary Search.

### Linear vs Binary Search
Imagine trying to find the word "Mango" in a physical dictionary.
- **Linear Search O(n)**: You start at page 1, read every word, turn the page, and repeat until you find "Mango". Very slow.
- **Binary Search O(log n)**: You open the book to the exact middle. You see words starting with "M". You know "Ma" comes before "Mo", so you tear the book in half, throw away the back half, and open the remaining half to the middle. You repeat this halving process until you find the word. Extremely fast, *but the data must be sorted first*.

## WHY it exists
A bad algorithm might run perfectly fine when testing with 10 users, but completely crash your server when you have 10,000 users. Big O Notation gives developers a shared language to discuss performance before writing the code.

## Mental Model & Real-World Analogy
**Sorting Algorithms**
Imagine sorting a hand of playing cards.
- **Bubble Sort (O(n²))**: Look at the first two cards. If the left is higher than the right, swap them. Move one card over and repeat. Do this over and over until the hand is sorted. (Terrible for large decks).
- **Merge Sort (O(n log n))**: Split the deck in half, sort each half, then seamlessly merge the two sorted halves back together. (Much faster for large decks).

## Common Mistakes
- **Premature Optimization**: Don't obsess over making every algorithm O(1). If an array will only ever have 10 items in it, an O(n²) algorithm is perfectly fine and often easier to read. Optimize when data scales.
- **Forgetting about Space Complexity**: Big O also applies to memory. An algorithm might be super fast (O(1) time), but require duplicating the entire database into RAM (O(n) space). It's a trade-off.

## Exercises
1. What is the Big O time complexity of checking if a specific number is even or odd?
2. You have a nested `for` loop (a loop inside a loop) iterating over an array of users. What is the likely Time Complexity?
3. If an O(log n) algorithm takes 5 steps to process 32 items, how many steps will it take to process 64 items? (Hint: The magic of logarithms).

## Summary
Algorithms are just steps to solve a problem. Big O notation allows us to mathematically categorize how well those steps will perform when thrown into production with massive amounts of data.

## Completion Checklist
- [ ] I can explain what Big O Notation measures.
- [ ] I know the difference between O(1), O(n), and O(n²).
- [ ] I can explain how Binary Search works conceptually.
