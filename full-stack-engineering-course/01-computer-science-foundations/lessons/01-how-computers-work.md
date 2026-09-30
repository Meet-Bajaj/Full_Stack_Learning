# Lesson 01: How Computers Work

## Learning Objectives
- Identify the core hardware components of a computer (CPU, RAM, Storage).
- Explain the difference between short-term memory (RAM) and long-term storage.
- Understand the basic fetch-decode-execute cycle of a CPU.
- Differentiate between compilation and interpretation of code.

## Prerequisites
- None! This is the foundational lesson.

## Concept Explanation
At their core, computers are just extremely fast calculators that process instructions sequentially. The architecture of almost all modern computers is based on the **von Neumann architecture**, which consists of three main parts:
1. **Central Processing Unit (CPU)**: The brain of the computer that performs calculations and executes instructions.
2. **Memory (RAM - Random Access Memory)**: Fast, volatile storage where active programs and data live while the computer is running.
3. **Storage (Hard Drive/SSD)**: Slower, persistent storage where data lives permanently.

### The Fetch-Decode-Execute Cycle
The CPU constantly loops through three steps:
1. **Fetch**: Retrieves the next instruction from RAM.
2. **Decode**: Translates the instruction into a format the Arithmetic Logic Unit (ALU) can understand.
3. **Execute**: Performs the operation (e.g., adding two numbers, moving data in memory).

## WHY it exists
To write efficient software, you must know where your bottlenecks are. Is your app slow because it's doing too much math (CPU bound), loading too much data into active memory (RAM bound), or reading large files from disk (I/O bound)? Understanding these components tells you how to optimize.

## Mental Model & Real-World Analogy
**The Kitchen Analogy**
- **CPU = The Chef**: The chef is the one doing the actual work (chopping, cooking). A faster chef (higher clock speed) or multiple chefs (multi-core processor) can cook faster.
- **RAM = The Counter Space**: The chef needs ingredients nearby to cook quickly. Counter space is limited. If the counter is full, the chef has to put things away to make room (swapping memory), which slows them down. When the kitchen closes (power off), the counter is cleared.
- **Storage = The Pantry/Fridge**: This is where all ingredients are kept permanently. It's huge, but it takes the chef a long time to walk to the pantry, find the ingredient, and bring it to the counter.

## Common Mistakes
- **Confusing Memory with Storage**: Users often say "My computer needs more memory" when they mean storage (hard drive space). Remember: RAM = active tasks, Storage = saved files.
- **Thinking the CPU reads directly from the hard drive**: The CPU only reads instructions from RAM. Storage data must first be loaded into RAM before the CPU can use it.

## Compilation vs Interpretation
How does human-readable code turn into instructions the CPU understands?
- **Compiled Languages (e.g., C++, Go, Rust)**: The entire codebase is translated into machine code *before* execution. It produces an executable file. (Like translating a whole book into another language before reading it). Fast execution, slower start.
- **Interpreted Languages (e.g., JavaScript, Python)**: Code is translated line-by-line *while* the program is running. (Like having a live translator interpreting someone speaking). Slower execution, faster start.

## Exercises
1. Open your computer's Activity Monitor or Task Manager. Identify 3 processes that are currently using the most CPU, and 3 using the most Memory (RAM).
2. If a video game is lagging heavily when lots of characters appear on screen, is it likely a CPU/GPU bottleneck or a Storage bottleneck? Why?

## Summary
The CPU processes data, RAM holds active data for quick access, and Storage keeps data permanently. When we write programs, they are saved in Storage, loaded into RAM when run, and executed by the CPU.

## Completion Checklist
- [ ] I can explain the difference between RAM and Storage.
- [ ] I understand the Kitchen analogy for computer hardware.
- [ ] I know the difference between compiled and interpreted languages.
