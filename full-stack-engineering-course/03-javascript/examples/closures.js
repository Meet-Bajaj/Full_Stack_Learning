/**
 * EXAMPLES: Closures
 * 
 * A closure is the combination of a function bundled together (enclosed) with references 
 * to its surrounding state (the lexical environment). In other words, a closure gives you 
 * access to an outer function's scope from an inner function.
 */

// Example 1: Basic Closure
function createGreeting(greeting) {
  // 'greeting' is captured by the inner function
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  }
}

const sayHello = createGreeting("Hello");
const sayHowdy = createGreeting("Howdy");

sayHello("Alice"); // Output: Hello, Alice!
sayHowdy("Bob");   // Output: Howdy, Bob!


// Example 2: Data Privacy / Encapsulation
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
// console.log(counter.count);    // undefined (cannot access private variable)


// Example 3: Function Factories
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
