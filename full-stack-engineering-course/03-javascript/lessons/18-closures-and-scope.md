# Lesson 18: Closures and Scope (Deep Dive)

## Learning Objectives
- Differentiate Lexical, Block, and Function Scope.
- Deeply understand what a Closure is.
- Use closures for data privacy.

## Types of Scope
1. **Global Scope:** Variables declared outside any function or block. Accessible everywhere.
2. **Function Scope:** Variables declared inside a function (using `var`, `let`, or `const`).
3. **Block Scope:** Variables declared inside `{}` (like `if` statements or `for` loops) using `let` or `const`.

## Lexical Scoping
JavaScript uses lexical (or static) scoping. This means a function's scope is determined by **where it is physically written in the code**, not where it is called from. An inner function always has access to the variables of outer functions.

## What is a Closure?
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

**In plain English:** A closure allows a function to "remember" the variables from its outer scope even after that outer scope has finished executing.

```javascript
function createBankCounter() {
  let balance = 0; // This variable is "closed over"

  return function(deposit) {
    balance += deposit;
    return balance;
  }
}

const myAccount = createBankCounter();
// createBankCounter has finished running! 'balance' should theoretically be destroyed in memory.
// BUT, the inner function maintains a reference to it. This is a closure.

console.log(myAccount(100)); // 100
console.log(myAccount(50));  // 150
```

## Practical Uses of Closures
1. **Data Privacy (Encapsulation):** In the example above, there is absolutely no way to access or modify `balance` from the outside except through the returned function.
2. **Function Factories:** Creating functions that generate other configured functions (e.g., `multiplyBy(x)`).
3. **React Hooks:** `useState` relies entirely on closures to maintain state between component renders.

## Summary Checklist
- [ ] Understand Lexical vs Block scope.
- [ ] Explain a closure in your own words.
- [ ] Identify how closures enable private variables.
