# Lesson 06: Processes and Job Control

## Learning Objectives
By the end of this lesson, you will be able to:
- Monitor running processes and system resources.
- Terminate (kill) unresponsive applications.
- Understand Linux signals.
- Run tasks in the background.

---

## 1. Monitoring Processes

Every running program on a Linux machine is a **Process** with a unique Process ID (PID).

### `ps` (Process Status)
Takes a snapshot of current processes.
- `ps`: Shows processes attached to your current terminal.
- `ps aux`: Shows ALL processes running on the system.
  - *Pro-tip:* `ps aux | grep node` (Find all running Node.js apps).

### `top` and `htop`
`top` is a real-time, interactive task manager (like Windows Task Manager).
- `htop` is a prettier, more colorful, and easier-to-use version of `top` (you usually have to install it: `sudo apt install htop`).

---

## 2. Signals and Killing Processes

When you want to stop a process, you send it a **Signal**.

- **`kill <PID>`**: Sends a `SIGTERM` (Signal 15) to the process. This politely asks the application to shut down, save its state, and close files.
- **`kill -9 <PID>`**: Sends a `SIGKILL` (Signal 9). This forces the kernel to instantly terminate the process. It cannot be ignored by the application. Use this only when a program is totally frozen.

### `killall`
Instead of finding the PID, you can kill by name.
- `killall node` (Kills all Node.js processes).

---

## 3. Background vs Foreground Jobs

If you run a script `node server.js`, it runs in the foreground. If you close your SSH terminal, the process dies!

### Running in the background
Append an ampersand `&` to the end of the command.
`node server.js &` (Runs in the background, freeing up your terminal).

### Backgrounding an already running task
1. Press `Ctrl + Z`. This *pauses* the foreground process.
2. Type `bg`. This resumes the paused process in the background.

### Viewing and Resuming jobs
- `jobs`: Lists all background jobs attached to your terminal.
- `fg %1`: Brings Job #1 back to the foreground.

### `nohup`
Even if a job is in the background, it will die if you close the SSH session. To prevent this, use `nohup` (No Hang Up).
`nohup node server.js &`

*(Note: While `nohup` is good to know, in modern production environments, we use `systemd` or `pm2` to manage long-running background services. We will cover this in Lesson 10).*

## Summary
- Use `ps aux` and `htop` to find resource hogs.
- Send polite `SIGTERM` (`kill`) before aggressive `SIGKILL` (`kill -9`).
- `Ctrl+C` kills a foreground process; `Ctrl+Z` pauses it.
