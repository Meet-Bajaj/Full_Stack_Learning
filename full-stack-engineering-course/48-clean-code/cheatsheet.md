# Clean Code Cheatsheet

## Naming
- Use intention-revealing names.
- Avoid disinformation (don't call it a `List` if it's an Array).
- Classes are Nouns. Functions are Verbs.

## Functions
- Keep them small (under 20 lines is ideal).
- **Single Responsibility:** Do one thing well.
- Avoid passing boolean flags; split into two functions instead.
- Limit arguments to 2 max. Use config objects for more.
- Prefer Pure Functions over side-effects.

## Error Handling
- Use Exceptions instead of returning Error Codes.
- Fail Fast at the boundaries.
- Extract try/catch blocks from core business logic.
- Do not return or pass `null`.

## Comments
- Good: Explaining the "Why" (business context, complex algorithmic choice).
- Good: JSDoc for public library APIs.
- Bad: Explaining the "What" (the code should do that).
- Bad: Commented-out code.

## Organization
- Group files by Feature/Domain, not by technical role.
- Keep the highest-level logic at the top of the file, details at the bottom.
- Continuous Refactoring: The Boy Scout Rule.
