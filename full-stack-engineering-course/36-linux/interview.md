# Module 36: Linux Interview Questions

## Junior Level

**1. What is the difference between an absolute path and a relative path in Linux?**
*Expected Answer:* An absolute path starts from the root directory (`/`), like `/var/www/html`. A relative path starts from the current working directory, using `./` (current) or `../` (parent directory).

**2. How do you check what is consuming the most CPU or Memory on a Linux server?**
*Expected Answer:* Use the `top` or `htop` commands to view a live, interactive task manager. You can also use `ps aux` to take a snapshot of all running processes.

**3. What does `chmod 755` do?**
*Expected Answer:* It sets file permissions. The Owner gets read, write, execute (4+2+1 = 7). The Group and Others get read and execute (4+1 = 5).

## Mid Level

**1. You try to start a Node.js application, but it throws an `EADDRINUSE` error for port 8080. How do you fix this via the CLI?**
*Expected Answer:* Use `sudo ss -tulnp | grep :8080` (or `netstat -tulnp`) to find the Process ID (PID) that is listening on port 8080. Then use `kill <PID>` (or `kill -9 <PID>` if it's stuck) to terminate the process, freeing the port.

**2. Explain what `tail -f` and `grep` do, and how you would combine them.**
*Expected Answer:* `tail -f` outputs the end of a file and follows it live as new lines are added. `grep` searches for a specific string. You combine them with a pipe `|`. For example, `tail -f /var/log/syslog | grep "Error"` will watch the log file in real-time and only print lines that contain the word "Error".

**3. Why should you disable password authentication in SSH?**
*Expected Answer:* Port 22 is constantly scanned by botnets attempting brute-force dictionary attacks against user passwords. Key-based authentication (RSA/Ed25519) relies on cryptographic keys that are mathematically impossible to brute-force, securing the server against these attacks.

## Senior Level

**1. What is `systemd` and why is it preferred over running apps in `tmux` or `nohup`?**
*Expected Answer:* `systemd` is the init system and service manager for Linux (PID 1). It manages background daemons. Unlike `tmux` or `nohup`, a `systemd` service file allows you to define auto-restart policies on failure, dependencies (e.g., start only after the network is up), strict user permissions, and automatic startup on server reboot. It also centralizes logging into `journalctl`.

**2. Describe the architecture of Linux file permissions. How does the SUID (Set Owner User ID) bit alter this?**
*Expected Answer:* Permissions are split into Owner, Group, and Other, applying read/write/execute rights. Normally, an executable runs with the privileges of the user who *executed* it. The SUID bit (e.g., `chmod u+s`) changes this so the file executes with the privileges of the *owner* of the file. This is how a standard user can execute `/usr/bin/passwd` to change their password (which modifies `/etc/shadow`), because the executable is owned by root and has the SUID bit set.
