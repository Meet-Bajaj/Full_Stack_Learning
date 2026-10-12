# Lesson 2: Linting & Formatting

## 🎯 Learning Objectives
- Differentiate between linting and formatting.
- Configure ESLint and Prettier for a TypeScript project.
- Implement pre-commit hooks using Husky.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A spell-checker vs a typesetter. Prettier is the typesetter (ensuring the margins, spacing, and fonts are uniform). ESLint is the grammar checker (telling you not to end a sentence with a preposition, or in code, not to use an undeclared variable).

**Mental Model:** Automated tools that enforce styling and catch basic errors before the code is even run or committed.

## ❓ WHY does it exist?
Debating tabs vs spaces or single vs double quotes in code reviews is a massive waste of time. Formatting should be automated. Furthermore, linters catch common logic bugs (like unused variables or unreachable code) instantly.

## 🏗️ Core Tools

### 1. Prettier (The Formatter)
Focuses purely on how the code looks. It will automatically wrap long lines, align brackets, and enforce quote styles.
**Config (`.prettierrc`):**
```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100
}
```

### 2. ESLint (The Linter)
Focuses on code quality and logic. It can enforce TypeScript types, prevent the use of `any`, and warn about overly complex functions.
**Config (`.eslintrc.js`):**
```javascript
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'no-console': 'warn'
  }
}
```

### 3. Pre-Commit Hooks (Husky & lint-staged)
You can't trust developers to manually run the linter. Husky runs a script right before a git commit is allowed. `lint-staged` ensures only the modified files are checked (saving time).
```json
// package.json
"lint-staged": {
  "*.ts": ["eslint --fix", "prettier --write"]
}
```

## ⚠️ Common Mistakes
- **Conflicting Rules:** Having ESLint and Prettier fight over formatting (e.g., one wants single quotes, the other wants double). Use `eslint-config-prettier` to turn off ESLint rules that conflict with Prettier.

## 🚀 Exercises
1. Initialize a new Node.js project, install ESLint + Prettier, and configure them to work together.
2. Set up Husky to block commits that contain the use of `console.log`.

## ✅ Summary and Checklist
- [ ] Understand linter vs formatter.
- [ ] Automate formatting with Prettier.
- [ ] Enforce code quality with ESLint.
- [ ] Gate commits with Husky.
