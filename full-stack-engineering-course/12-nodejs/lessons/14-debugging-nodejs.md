# Lesson 14: Debugging Node.js

`console.log()` is the most common debugging tool, but Node provides much more powerful mechanisms.

## The Node.js Inspector
Node.js includes an out-of-process debugging utility accessible via a V8 Inspector and built-in debugging clients.
Run your script with the `--inspect` flag:
```bash
node --inspect app.js
```
Then, open Google Chrome and navigate to `chrome://inspect`. You can set breakpoints, step through code, and inspect memory just like debugging browser JavaScript.

Use `--inspect-brk` to pause execution on the very first line of your script.

## The `debugger` Statement
You can pause execution by placing the `debugger;` statement in your code. When running with the inspector attached, it acts as a breakpoint.

## VS Code Debugger
VS Code has excellent built-in Node.js debugging.
1. Open the Run and Debug pane.
2. Click "create a launch.json file".
3. Select Node.js.
4. Press F5 to start debugging.

## Logging in Production
In production, `console.log()` is synchronous and blocks the event loop slightly. Also, it doesn't provide structured data.
Use logging libraries like **Pino** or **Winston**.

```javascript
// Pino example
const pino = require('pino');
const logger = pino();

logger.info('Server started');
logger.error({ err: new Error('DB failed') }, 'Database connection error');
```

## Summary Checklist
- [ ] Use `node --inspect`.
- [ ] Debug using Chrome DevTools.
- [ ] Set up a launch configuration in VS Code.
- [ ] Understand why structured loggers (Pino/Winston) are preferred for production.
