# Module 36: Linux Assessment

## Part 1: Filesystem and Commands
Match the following commands to their correct description:
- Commands: `pwd`, `tail -f`, `grep`, `chmod`, `chown`
1. Changes the owner of a file or directory.
2. Searches for a specific text string within files.
3. Prints the absolute path of the current directory.
4. Watches a file live as new lines are appended to it.
5. Modifies the read, write, and execute permissions of a file.

## Part 2: Permissions Mathematics
You have a file `script.sh`. You want the owner to have full permissions (Read, Write, Execute), the Group to have Read and Execute permissions, and Others to have absolutely no permissions.
1. What numeric `chmod` command do you execute? Explain the math.

## Part 3: Process Management Scenario
You deploy a Node.js API to a Linux server. When you run `npm start`, it crashes with `Error: listen EADDRINUSE: address already in use :::3000`.
Provide the exact sequence of terminal commands you would use to:
1. Identify the rogue process occupying port 3000.
2. Terminate that process forcefully.

## Part 4: Security Hardening
Explain three critical steps you must take to secure a brand-new, bare-metal Ubuntu server before deploying a production application to it. (Focus on SSH, Firewalls, and Updates).
