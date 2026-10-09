# Module 36: Linux MCQs

## Beginner

**Q1: What does the `pwd` command do in Linux?**
A) Changes your password.
B) Prints the current working directory path.
C) Pauses a running process.
D) Pings a web server.
**Correct Answer:** B
**Explanation:** `pwd` stands for Print Working Directory.
**Difficulty:** Beginner
**Topic:** Filesystem
**Subtopic:** Navigation

**Q2: Which directory in Linux traditionally stores system-wide configuration files (like Nginx or SSH configs)?**
A) `/home`
B) `/var`
C) `/tmp`
D) `/etc`
**Correct Answer:** D
**Explanation:** `/etc` is the standard location for host-specific system configuration files.
**Difficulty:** Beginner
**Topic:** Filesystem
**Subtopic:** Structure

## Intermediate

**Q3: You need to monitor a web server error log in real-time as users visit the site. Which command is best?**
A) `cat /var/log/nginx/error.log`
B) `nano /var/log/nginx/error.log`
C) `tail -f /var/log/nginx/error.log`
D) `head -n 100 /var/log/nginx/error.log`
**Correct Answer:** C
**Explanation:** `tail -f` (follow) outputs the last lines of a file and keeps the stream open, printing new lines as they are appended to the file.
**Difficulty:** Intermediate
**Topic:** File Operations
**Subtopic:** Viewing Logs

**Q4: A script has permissions `-rwxr-xr--`. What does this mean?**
A) The owner can read/write/execute. The group can read/execute. Others can only read.
B) The owner can read/write. The group can read/write. Others can execute.
C) Everyone has full access.
D) Only root can execute the file.
**Correct Answer:** A
**Explanation:** `rwx` (Owner) = read/write/execute. `r-x` (Group) = read/execute. `r--` (Other) = read only. In numeric form, this is `754`.
**Difficulty:** Intermediate
**Topic:** Permissions
**Subtopic:** Symbolic Permissions

## Advanced / Production

**Q5: A Node.js application running on Port 3000 freezes. You try to restart it, but get an `EADDRINUSE` error. How do you find and kill the process holding the port?**
A) `sudo portkill 3000`
B) `sudo ss -tulnp | grep :3000` to find the PID, then `kill -9 <PID>`
C) `rm -rf /var/run/port3000.pid`
D) Reboot the server.
**Correct Answer:** B
**Explanation:** `ss -tulnp` lists listening ports and their associated PIDs. You grep for the specific port, identify the PID, and use the `kill` command to terminate it.
**Difficulty:** Advanced
**Topic:** Networking & Processes
**Subtopic:** Troubleshooting Ports

**Q6: Why is it critical to disable `PasswordAuthentication` in `/etc/ssh/sshd_config` on a production server?**
A) Because SSH passwords expire every 30 days.
B) To force users to use the root account.
C) Because automated bots constantly scan the internet attempting brute-force dictionary attacks against SSH. Key-based authentication prevents this.
D) Because passwords are transmitted in plaintext over SSH.
**Correct Answer:** C
**Explanation:** SSH traffic is encrypted, but brute-force password guessing is highly prevalent. Ed25519/RSA keys are mathematically impossible to brute-force in a reasonable timeframe.
**Difficulty:** Production
**Topic:** Security
**Subtopic:** SSH Hardening
