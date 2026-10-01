# Lesson 3: Branching

## What is a Branch?
A branch in Git is simply a lightweight movable pointer to a commit. The default branch name is `main` (or `master`).

## Working with Branches
- `git branch`: List branches.
- `git branch <name>`: Create a branch.
- `git checkout <name>` or `git switch <name>`: Switch to a branch.
- `git checkout -b <name>`: Create and switch.

## Detached HEAD
Occurs when you checkout a specific commit rather than a branch. You are in a state where no branch is currently active.
