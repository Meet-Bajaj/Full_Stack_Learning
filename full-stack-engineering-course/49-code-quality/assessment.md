# Code Quality Assessment

## Part 1: Multiple Choice
1. What is the primary purpose of Mutation Testing?
   a) To test how fast the code runs under load.
   b) To verify the effectiveness of your automated tests.
   c) To automatically format your code.

2. Which of the following belongs in a Pull Request Review?
   a) Pointing out that a function is missing a semicolon.
   b) Debating whether to use tabs or spaces.
   c) Noting that a database query is missing a `LIMIT` clause and could crash the server.

## Part 2: Configuration
**Task:** Write a simple GitHub Actions YAML workflow that installs dependencies, runs the linter, and runs the test suite.

## Part 3: ADR Writing
**Task:** Write an ADR for switching from a manual code review process to requiring a successful CI pipeline (Quality Gate) before merging.
