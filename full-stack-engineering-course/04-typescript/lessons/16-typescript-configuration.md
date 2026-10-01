# Lesson 16: TypeScript Configuration

## `tsconfig.json` Basics
The root file for a TS project.

## Strict Mode
Always enable `"strict": true`. It enables:
- `noImplicitAny`
- `strictNullChecks`
- etc.

## Other Important Flags
- `target`: Which version of JS to output (e.g., `ES2022`).
- `module`: The module system to use (e.g., `CommonJS`, `ESNext`).
- `outDir`: Where to put compiled files.
- `paths`: Path aliases.
