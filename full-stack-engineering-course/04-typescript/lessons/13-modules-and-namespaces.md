# Lesson 13: Modules and Namespaces

## ES Modules
TypeScript relies heavily on the ES Module system (`import` and `export`).

## Declaration Files (`.d.ts`)
Provide type information for JavaScript files.
- You can install community-maintained types using `@types/package-name`.
- E.g., `npm i -D @types/react`

## Ambient Declarations
Used to declare variables that exist but aren't explicitly imported (like globals injected by Webpack).
```typescript
declare var __VERSION__: string;
```
