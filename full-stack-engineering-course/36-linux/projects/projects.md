# Module 36: Linux Projects

## Project 1: Filesystem and Permissions Scavenger Hunt
**Difficulty:** Beginner
**Description:** Practice navigating and securing files.
**Requirements:**
- SSH into a Linux machine (or use WSL/VM).
- Create a folder structure: `/home/ubuntu/app/config`.
- Create a file `secrets.env` inside the `config` folder.
- Using `chmod`, restrict the permissions of `secrets.env` so that ONLY the owner can read and write to it. Group and Others must have 0 access.
- Create a script `start.sh` in the `app` folder. Make it executable for everyone.

## Project 2: The Bash Backup Automator
**Difficulty:** Intermediate
**Description:** Write a professional Bash script for server maintenance.
**Requirements:**
- Write a bash script `backup.sh`.
- It must take a directory path as an argument (e.g., `./backup.sh /var/www/html`).
- If the directory does not exist, the script must `echo` an error and `exit 1`.
- If it exists, the script must compress the folder into a `.tar.gz` file and save it in `/tmp/backups/`.
- The backup filename must include the current date (e.g., `backup-2023-10-25.tar.gz`).
- Use `crontab` to schedule this script to run automatically at 3:00 AM every Sunday.

## Project 3: Bare-Metal Deployment & Hardening
**Difficulty:** Advanced
**Description:** Take a fresh, insecure Linux server and make it production-ready.
**Requirements:**
- Spin up a fresh Ubuntu server.
- **Security:**
  1. Create a new user with `sudo` privileges. Do not use `root`.
  2. Setup SSH Key authentication for the new user.
  3. Disable `PasswordAuthentication` in `/etc/ssh/sshd_config`.
  4. Enable `ufw` firewall, allowing only ports 22, 80, and 443.
  5. Install and start `fail2ban`.
- **Deployment:**
  1. Install Node.js via NVM or NodeSource PPA.
  2. Clone a basic Node.js Express repository to `/var/www/myapp`.
  3. Write a custom `systemd` unit file (`/etc/systemd/system/myapp.service`) to run the Node app automatically in the background.
  4. Start and enable the service. Verify it is running by checking `journalctl`.
