# Lesson 9: Test Doubles

## Learning Objectives
- Distinguish between stubs, spies, mocks, fakes, and dummies.
- Know when to use each test double pattern.

## Definitions
- **Dummy**: Objects passed around but never actually used.
- **Fake**: Working implementations that take shortcuts (e.g., In-Memory Database).
- **Stub**: Provides canned answers to calls made during the test.
- **Spy**: Stubs that also record information about how they were called.
- **Mock**: Objects pre-programmed with expectations which form a specification.

## Mental Model
If a test double is just standing in, it's a Dummy. If it's returning hardcoded data, it's a Stub. If you're checking how many times it was called, it's a Spy. If it's a lightweight version of the real thing, it's a Fake.
