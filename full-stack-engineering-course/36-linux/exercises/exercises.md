# Module 36: Linux Exercises

## Exercise 1: Filesystem Navigation & Operations
**Objective:** Master basic CLI commands.
1. Open a terminal (or SSH into a server).
2. Print your current directory.
3. Create a directory named `linux_practice`. Navigate into it.
4. Create an empty file named `server.log`.
5. Add the text "Error: Database disconnected" to the file using the `echo` command and a redirect `>`.
6. Copy the file to `server_backup.log`.
7. Rename `server.log` to `app.log`.

## Exercise 2: Permissions
**Objective:** Understand `chmod`.
1. Create a file called `script.sh`.
2. View its default permissions using `ls -l`.
3. Change the permissions so that:
   - The Owner can read, write, and execute.
   - The Group can read and execute.
   - Others have no permissions at all.
   *(Use numeric chmod mode).*
4. Verify the permissions using `ls -l`.

## Exercise 3: Process Hunting
**Objective:** Find and kill processes.
1. Run this command to start a long-running background process: `sleep 5000 &`
2. Use `ps aux` combined with `grep` to find the Process ID (PID) of the `sleep` command.
3. Use the `kill` command to terminate that PID.
4. Verify it is dead using `jobs` or `ps aux`.

## Exercise 4: Port Troubleshooting
**Objective:** Identify port conflicts.
1. You are trying to start a web server on Port 80, but it fails with "Address already in use".
2. Write the command you would use (involving `ss`) to find out exactly which application (and PID) is holding Port 80.
3. Assuming the PID is `4052`, write the command to forcefully kill it.

## Exercise 5: Basic Shell Scripting
**Objective:** Automate a task.
1. Create a script named `healthcheck.sh`.
2. Add the Shebang line for bash.
3. Write a script that pings `google.com` exactly 3 times (use `ping -c 3 google.com`).
4. If the ping succeeds, echo "Network is UP". If it fails, echo "Network is DOWN". *(Hint: check the exit status `$?`).*
5. Make the script executable and run it.
