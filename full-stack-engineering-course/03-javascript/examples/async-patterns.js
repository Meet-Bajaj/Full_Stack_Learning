/**
 * EXAMPLES: Asynchronous Patterns in JavaScript
 * 
 * Demonstrates Callbacks, Promises, and Async/Await using a simulated API.
 */

// Simulated database fetch
function fetchUserDatabase(id, callback) {
  setTimeout(() => {
    if (id === 1) {
      callback(null, { id: 1, name: "John Doe" });
    } else {
      callback(new Error("User not found"), null);
    }
  }, 1000);
}

// 1. CALLBACK HELL (The old way)
console.log("--- Callbacks ---");
fetchUserDatabase(1, (err, user) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("User fetched via callback:", user.name);
    // Imagine nesting more callbacks here...
  }
});


// 2. PROMISES
function fetchUserPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: "Jane Doe" });
      } else {
        reject(new Error("User not found"));
      }
    }, 1500);
  });
}

console.log("--- Promises ---");
fetchUserPromise(1)
  .then(user => {
    console.log("User fetched via Promise:", user.name);
    return user.id;
  })
  .then(id => {
    console.log("Chained promise received ID:", id);
  })
  .catch(err => {
    console.error("Promise Error:", err.message);
  })
  .finally(() => {
    console.log("Promise operation completed.");
  });


// 3. ASYNC / AWAIT (Modern Approach)
console.log("--- Async/Await ---");
async function getUserData() {
  try {
    const user = await fetchUserPromise(1);
    console.log("User fetched via Async/Await:", user.name);
    
    // Concurrent execution example
    const [user1, user2] = await Promise.all([
      fetchUserPromise(1),
      fetchUserPromise(1)
    ]);
    console.log("Fetched concurrently:", user1.name, user2.name);
    
  } catch (err) {
    console.error("Async/Await Error:", err.message);
  }
}

// Call the async function
getUserData();
