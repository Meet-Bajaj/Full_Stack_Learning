# Orientation Cheatsheet

## VS Code Essential Shortcuts

Learning to use your editor without the mouse will drastically improve your speed.

| Action | Windows / Linux | Mac |
| :--- | :--- | :--- |
| **Command Palette** | `Ctrl + Shift + P` | `Cmd + Shift + P` |
| **Quick Open File** | `Ctrl + P` | `Cmd + P` |
| **Global Search** | `Ctrl + Shift + F` | `Cmd + Shift + F` |
| **Toggle Terminal** | `` Ctrl + ` `` | `` Cmd + ` `` |
| **Toggle Sidebar** | `Ctrl + B` | `Cmd + B` |
| **Comment Line** | `Ctrl + /` | `Cmd + /` |
| **Duplicate Line Down** | `Shift + Alt + ↓` | `Shift + Option + ↓` |
| **Move Line Down** | `Alt + ↓` | `Option + ↓` |
| **Multiple Cursors** | `Alt + Click` | `Option + Click` |
| **Format Document** | `Shift + Alt + F` | `Shift + Option + F` |

## Terminal Basics

Navigating the command line is essential.

| Command | Description |
| :--- | :--- |
| `pwd` | Print Working Directory (where am I?) |
| `ls` | List files and directories in current folder |
| `ls -la` | List files including hidden ones, with details |
| `cd <path>` | Change Directory (move to a new folder) |
| `cd ..` | Move up one folder |
| `mkdir <name>` | Make Directory (create a new folder) |
| `touch <file>` | Create a new empty file (Mac/Linux) |
| `rm <file>` | Remove (delete) a file |
| `rm -rf <dir>` | Force delete a directory and all its contents |
| `clear` | Clear the terminal screen |

## Git Basics (Preview)

| Command | Description |
| :--- | :--- |
| `git status` | Check which files have been modified |
| `git add .` | Stage all modified files for commit |
| `git commit -m "msg"` | Save the staged changes with a message |
| `git push` | Upload commits to remote repository (GitHub) |
| `git pull` | Download latest commits from remote |

## The Learning Loop

Whenever you face a bug, repeat this loop:
1. Read the error message carefully.
2. Identify the exact line of code failing.
3. Form a hypothesis (Why is it failing?).
4. Test the hypothesis (Add `console.log`, use a debugger).
5. Search Google/Docs if you are stuck.
6. Fix and verify.
