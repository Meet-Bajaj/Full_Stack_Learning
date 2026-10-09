# Module 36: Linux Cheatsheet

## 1. Navigation & Directories
- `pwd`: Print current absolute path.
- `cd /var/log`: Move to absolute path.
- `cd ..`: Move up one directory.
- `ls -la`: List all files (including hidden `.`), with detailed permissions.

## 2. File Operations
- `touch file.txt`: Create empty file.
- `mkdir -p a/b/c`: Create nested directories.
- `cp src.txt dest.txt`: Copy file. (`-r` for folders).
- `mv old.txt new.txt`: Move / Rename file.
- `rm -rf folder/`: Force delete folder and contents (DANGEROUS).

## 3. Viewing & Searching
- `cat file.txt`: Print whole file.
- `less file.txt`: Scroll through file.
- `tail -f error.log`: Watch file live as it updates.
- `grep "Error" log.txt`: Search for string in file (`-i` for case-insensitive, `-r` for recursive in folder).
- `find /var/www -name "*.html"`: Search filesystem for files by name.

## 4. Permissions (`chmod` / `chown`)
**Numeric:** Read=4, Write=2, Execute=1.
- `chmod 755 script.sh`: Owner (rwx=7), Group (r-x=5), Other (r-x=5).
- `chmod 644 file.txt`: Standard text file (rw-r--r--).
- `chmod 600 id_rsa`: Private SSH key (rw-------).
- `sudo chown www-data:www-data index.html`: Change owner:group.

## 5. Processes & Network
- `ps aux`: List all running processes.
- `top` / `htop`: Live task manager.
- `kill 1234`: Gracefully terminate Process ID 1234.
- `kill -9 1234`: Force terminate.
- `sudo ss -tulnp`: Show all listening ports and the PIDs holding them.
- `ping google.com`: Test connectivity.
- `curl -I https://example.com`: Fetch HTTP headers.

## 6. systemd (Services)
- `sudo systemctl status nginx`: Check if Nginx is running.
- `sudo systemctl start/stop/restart nginx`: Control service.
- `sudo systemctl enable nginx`: Make it start on server boot.
- `sudo journalctl -u nginx -f`: Follow live logs for the service.

## 7. Package Management (Ubuntu/Debian)
- `sudo apt update`: Sync package list (Do this first!).
- `sudo apt upgrade`: Install security updates.
- `sudo apt install nodejs`: Install software.
