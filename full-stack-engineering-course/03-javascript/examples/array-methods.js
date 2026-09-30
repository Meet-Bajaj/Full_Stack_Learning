/**
 * EXAMPLES: Advanced Array Methods
 * 
 * Functional programming patterns using map, filter, reduce, etc.
 */

const users = [
  { id: 1, name: "Alice", role: "Admin", active: true, age: 28 },
  { id: 2, name: "Bob", role: "User", active: false, age: 34 },
  { id: 3, name: "Charlie", role: "User", active: true, age: 22 },
  { id: 4, name: "Diana", role: "Manager", active: true, age: 41 },
];

// 1. FILTER: Returns a new array with elements that pass the test
const activeUsers = users.filter(user => user.active);
console.log("Active Users:", activeUsers.map(u => u.name)); 
// Output: [ 'Alice', 'Charlie', 'Diana' ]

// 2. MAP: Returns a new array transformed by the callback
const userNames = users.map(user => user.name.toUpperCase());
console.log("Uppercase Names:", userNames);
// Output: [ 'ALICE', 'BOB', 'CHARLIE', 'DIANA' ]

// 3. REDUCE: Accumulates values into a single result
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log("Average Age:", totalAge / users.length);

// Grouping with reduce
const usersByRole = users.reduce((acc, user) => {
  if (!acc[user.role]) {
    acc[user.role] = [];
  }
  acc[user.role].push(user.name);
  return acc;
}, {});
console.log("Users Grouped By Role:", usersByRole);
/* Output:
{
  Admin: [ 'Alice' ],
  User: [ 'Bob', 'Charlie' ],
  Manager: [ 'Diana' ]
}
*/

// 4. FIND: Returns the first element that matches the condition
const firstAdmin = users.find(user => user.role === "Admin");
console.log("First Admin:", firstAdmin.name);

// 5. SOME & EVERY
const hasInactiveUsers = users.some(user => !user.active);
console.log("Are there inactive users?", hasInactiveUsers); // true

const allAdults = users.every(user => user.age >= 18);
console.log("Is everyone an adult?", allAdults); // true

// 6. CHAINING METHODS (Very common in React/modern JS)
const activeUserNames = users
  .filter(user => user.active)
  .sort((a, b) => a.age - b.age) // Sort by age ascending
  .map(user => user.name);

console.log("Active users sorted by age:", activeUserNames);
