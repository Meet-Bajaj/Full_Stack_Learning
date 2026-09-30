# Lesson 01: What is Programming?

## Learning Objectives
- Understand what programming is and why it exists.
- Differentiate between machine code, low-level languages, and high-level languages.
- Explain the difference between compiled and interpreted languages.

## Concept Explanation
At its core, **programming** is the act of writing instructions for a computer to execute. Computers are extremely fast and precise, but they are completely literal and have no common sense. They only do exactly what they are told.

**Mental Model**: Programming = Writing a very precise recipe.
If you tell a human to "make a PB&J sandwich," they know to open the bread bag, take out two slices, open the peanut butter, etc. If you tell a computer to "make a PB&J sandwich," it will crash because it doesn't know what "make", "PB&J", or "sandwich" means. You have to break it down into excruciatingly detailed, unambiguous steps.

## How Computers Execute Instructions
Computers ultimately only understand **Machine Code**—streams of 1s and 0s (binary) representing electrical signals (on/off).

Writing in 1s and 0s is nearly impossible for humans. Therefore, we use **programming languages** as an intermediary.

1. **High-Level Languages**: Languages designed to be readable by humans (e.g., Python, JavaScript, Java, C++). They abstract away hardware details.
2. **Low-Level Languages**: Closer to machine code (e.g., Assembly). Harder to read, but provides more direct control over hardware.

## Compiled vs. Interpreted Languages
Since the computer only understands machine code, high-level code must be translated.

- **Compiled Languages** (e.g., C, C++, Rust, Go): The entire program is translated (compiled) into a machine code file *before* it is run. 
  - *Analogy*: Translating a whole book from English to Spanish before giving it to a Spanish reader.
- **Interpreted Languages** (e.g., JavaScript, Python, Ruby): A separate program (an interpreter) reads the code line by line and executes it on the fly.
  - *Analogy*: A live translator translating your speech sentence by sentence to an audience.

## Summary
- Programming is providing exact instructions to a computer.
- We use high-level languages to write code efficiently.
- Compilers or interpreters translate our code into machine code that the computer can execute.

## Completion Checklist
- [ ] I understand the recipe analogy for programming.
- [ ] I can explain the difference between high-level and low-level languages.
- [ ] I know the difference between compiling and interpreting code.
