/**
 * Event Loop Demo
 * Demonstrates the order of execution in the Node.js Event Loop.
 */
const fs = require('fs');

console.log('1. Script start (Call Stack)');

setTimeout(() => {
  console.log('5. setTimeout 1 (Timers Phase)');
}, 0);

setImmediate(() => {
  console.log('6. setImmediate (Check Phase)');
});

fs.readFile(__filename, () => {
  console.log('7. fs.readFile callback (Poll Phase)');
  
  setTimeout(() => {
    console.log('10. setTimeout inside readFile (Timers Phase)');
  }, 0);
  
  setImmediate(() => {
    console.log('8. setImmediate inside readFile (Check Phase)');
  });
  
  process.nextTick(() => {
    console.log('9. process.nextTick inside readFile (Microtask)');
  });
});

Promise.resolve().then(() => {
  console.log('3. Promise.then (Microtask - Promise queue)');
});

process.nextTick(() => {
  console.log('2. process.nextTick (Microtask - nextTick queue)');
});

console.log('4. Script end (Call Stack)');
