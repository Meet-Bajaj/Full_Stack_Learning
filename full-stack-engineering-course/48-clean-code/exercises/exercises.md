# Clean Code Exercises

## 1. Naming
**Task:** Given a snippet of code with terrible names (`let a`, `function proc(b)`), rename all variables and functions so that comments are no longer necessary.

## 2. Function Splitting
**Task:** Take a provided 80-line function that handles HTTP validation, database querying, data transformation, and email sending. Split it into at least 4 smaller, single-responsibility functions.

## 3. Error Handling Refactor
**Task:** Refactor a legacy module that returns `-1`, `0`, or `1` for error states. Change the implementation to throw custom Error classes (`ValidationError`, `NotFoundError`) and catch them at the application boundary.

## 4. Barrel Exports
**Task:** Reorganize a flat `src/` directory containing 15 files into logical feature folders, and implement `index.ts` barrel exports for each folder.
