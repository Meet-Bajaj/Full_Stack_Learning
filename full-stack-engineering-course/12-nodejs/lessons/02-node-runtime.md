# Lesson 2: The Node.js Runtime

## Node.js vs Browser JavaScript
While both run JavaScript, they operate in completely different environments and serve different purposes.

| Feature | Browser JS | Node.js |
| :--- | :--- | :--- |
| **Global Object** | `window` | `global` |
| **DOM Manipulation**| Yes (`document`) | No (No UI) |
| **File System** | Restricted (Security) | Full Access (`fs` module) |
| **APIs** | Fetch, Web Storage, Geolocation | OS, Network, Crypto, Clusters |

## The Global Object
In Node.js, `global` is the top-level scope. However, variables declared with `var`, `let`, or `const` at the top level of a file are **not** added to the `global` object (unlike `window` in the browser). They are scoped to the module.

### Important Global Variables
1. **`process`**: Provides information and control over the current Node.js process.
   ```javascript
   console.log(process.version); // Node version
   console.log(process.argv); // Command line arguments
   ```
2. **`__dirname`**: The absolute path to the directory containing the currently executing file.
3. **`__filename`**: The absolute path of the currently executing file.
4. **`Buffer`**: Used to handle binary data.

## The REPL
REPL stands for **Read, Eval, Print, Loop**. It's the interactive Node shell.
Type `node` in your terminal to start it.
- **Read**: Reads user input.
- **Eval**: Evaluates the JS code.
- **Print**: Prints the result.
- **Loop**: Waits for the next input.

It's excellent for quickly testing small snippets of JavaScript code.

## Built-in Modules
Node.js ships with dozens of built-in modules so you don't have to install third-party packages for basic tasks:
- `fs`: File system interactions.
- `path`: Working with file and directory paths.
- `http`/`https`: Creating web servers.
- `crypto`: Cryptographic functionality.
- `os`: Operating system related utility methods.

## Best Practices
- Never use `global` to pass variables around between files. It makes code unpredictable and hard to test.
- Prefer built-in modules over third-party packages if the built-in module adequately solves your problem (less dependency bloat).

## Summary Checklist
- [ ] Understand the differences between Node and Browser JS.
- [ ] Know the properties of the `global` object.
- [ ] Launch and use the Node REPL.
- [ ] Identify common built-in modules.
