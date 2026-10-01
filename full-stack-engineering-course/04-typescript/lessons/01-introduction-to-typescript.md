# Lesson 01: Introduction to TypeScript

## Learning Objectives
- Understand what TypeScript is and why it exists.
- Compare TypeScript and JavaScript.
- Learn about the compilation process (tsc).
- Introduction to `tsconfig.json`.

## Why TypeScript Exists
JavaScript is a dynamically typed language, meaning types are checked at runtime. This often leads to `TypeError`s in production. TypeScript is a superset of JavaScript that adds **static typing**. 

**Mental Model:** TypeScript is like a very strict spellchecker and grammar checker for your code. It catches mistakes *before* you run the code.

## TypeScript vs JavaScript
- **JavaScript:** Interpreted, dynamically typed, errors caught at runtime.
- **TypeScript:** Compiled to JS, statically typed, errors caught at compile-time.

## The Compilation Process
Browsers and Node.js (traditionally) do not understand TypeScript. It must be compiled (or transpiled) into plain JavaScript.
```bash
tsc myFile.ts
```
This generates `myFile.js`.

## tsconfig.json
The `tsconfig.json` file dictates how the compiler should behave.

## Summary
TypeScript catches errors early, serves as documentation, and enables rich editor support (autocomplete, refactoring).
