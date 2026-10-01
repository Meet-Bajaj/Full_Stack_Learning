# Lesson 6: Undoing Changes

## Reset vs Revert
- `git reset`: Moves HEAD and branch pointer backward. Can alter history.
  - `--soft`: Keeps changes staged.
  - `--mixed`: Keeps changes unstaged.
  - `--hard`: DANGER! Discards changes.
- `git revert`: Creates a new commit that undoes the changes of a previous commit. Safe for shared history.
