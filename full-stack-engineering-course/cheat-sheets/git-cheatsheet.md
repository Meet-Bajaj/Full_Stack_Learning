# Git Cheat Sheet

## Setup & Config
```bash
git config --global user.name "John Doe"
git config --global user.email "john@example.com"
git init                      # Initialize repository
git clone <url>               # Clone remote repository
```

## Basic Workflow
```bash
git status                    # Check working tree status
git add <file>                # Stage specific file
git add .                     # Stage all changes
git commit -m "Message"       # Commit staged changes
git commit -am "Message"      # Stage tracked files and commit
```

## Branching & Merging
```bash
git branch                    # List local branches
git branch <name>             # Create branch
git checkout <name>           # Switch to branch
git checkout -b <name>        # Create and switch to branch (Legacy)
git switch -c <name>          # Create and switch (Modern)

git merge <branch_name>       # Merge <branch_name> into current branch
git rebase <branch_name>      # Rebase current branch onto <branch_name>
```

## Remote Repositories
```bash
git remote add origin <url>   # Add remote
git remote -v                 # List remotes
git fetch                     # Download remote changes without merging
git pull                      # Fetch and merge
git push origin main          # Push branch to remote
git push -u origin main       # Push and set upstream tracking
```

## Undoing Changes
```bash
git restore <file>            # Discard changes in working directory
git restore --staged <file>   # Unstage file (keep changes)
git reset HEAD~1              # Undo last commit (keep changes)
git reset --hard HEAD~1       # Undo last commit (destroy changes)
git revert <commit_id>        # Create new commit that undoes <commit_id>
```

## Stashing
```bash
git stash                     # Save uncommitted changes temporarily
git stash list                # List stashes
git stash pop                 # Apply last stash and remove from list
git stash apply               # Apply last stash, keep in list
git stash drop                # Remove last stash
```

## Logs & Diff
```bash
git log                       # View commit history
git log --oneline --graph     # Compact visual history
git diff                      # Diff working tree vs index (staged)
git diff --staged             # Diff staged vs last commit
```
