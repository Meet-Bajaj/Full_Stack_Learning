# Lesson 15: Node.js Security

Security is critical when building back-end applications. Here are the most common vulnerabilities in Node.js apps and how to prevent them.

## 1. Directory/Path Traversal
If you serve files dynamically based on user input, a malicious user might send `../../../../etc/passwd` to read sensitive OS files.
**Fix:** Always validate file paths. Never concatenate raw user input into `fs` commands. Use `path.resolve` and check if the resolved path starts with your safe directory.

## 2. Command Injection
If you use `child_process.exec` with user input, attackers can chain commands.
`exec('ping ' + req.body.ip)` -> Attacker sends `8.8.8.8 && rm -rf /`.
**Fix:** Use `child_process.spawn` instead of `exec`, as it doesn't spawn a shell by default.

## 3. Prototype Pollution
Because of JavaScript's prototype-based inheritance, deeply merging objects without validation can allow an attacker to modify `Object.prototype`. This can change the behavior of the entire application globally.
**Fix:** Avoid naive deep merge functions. Use libraries like `lodash` which patch these vulnerabilities, or use `Object.create(null)` for maps.

## 4. Regular Expression Denial of Service (ReDoS)
Poorly written regex can take exponential time to process. An attacker can send a crafted string that blocks the Event Loop for minutes, taking down your server.
**Fix:** Use tools like `safe-regex` to test your expressions.

## 5. NPM Vulnerabilities
Dependencies often have security flaws.
- Run `npm audit` frequently to check for known vulnerabilities in your `node_modules`.
- Run `npm audit fix` to automatically update packages to secure versions.
- Use CI tools like Snyk or GitHub Dependabot.

## Summary Checklist
- [ ] Secure `fs` paths against traversal.
- [ ] Avoid `exec` with user input.
- [ ] Prevent Prototype Pollution.
- [ ] Run `npm audit`.
