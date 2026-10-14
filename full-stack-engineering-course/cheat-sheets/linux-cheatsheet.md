# Linux Cheat Sheet

## File Operations
```bash
ls -la               # List all files, long format (permissions, sizes)
cd /path/to/dir      # Change directory
pwd                  # Print working directory
mkdir newdir         # Create directory
rm file.txt          # Remove file
rm -r dir/           # Remove directory recursively
cp source dest       # Copy file
cp -r src/ dest/     # Copy directory
mv old new           # Move or rename
cat file.txt         # Print file contents
less file.txt        # Scroll through file
tail -n 100 file.log # View last 100 lines
tail -f file.log     # Follow file as it grows
```

## Search & Filter
```bash
grep "error" file.txt       # Search for "error" in file
grep -r "auth" src/         # Recursively search in directory
find . -name "*.js"         # Find files ending in .js
find . -type f -mtime -7    # Find files modified in last 7 days
```

## Permissions (chmod / chown)
Read (4), Write (2), Execute (1)
- User, Group, Others
```bash
chmod 755 script.sh  # rwx for user, r-x for group/others
chmod +x script.sh   # Make executable
chown user:group file# Change owner and group
```

## Process Management
```bash
ps aux               # List all running processes
top / htop           # Interactive process viewer
kill <PID>           # Terminate process gracefully (SIGTERM)
kill -9 <PID>        # Force kill process (SIGKILL)
lsof -i :8080        # Find process running on port 8080
```

## System & Networking
```bash
df -h                # Disk space usage
free -m              # RAM usage
curl -I https://x.com# Fetch HTTP headers
ping google.com      # Check network connectivity
netstat -tulpn       # List listening ports
```

## SSH & SCP
```bash
ssh user@server_ip            # Connect via SSH
ssh -i key.pem user@server_ip # Connect using private key
scp file.txt user@ip:/path/   # Secure copy to remote
```

## Systemd (Services)
```bash
sudo systemctl start nginx    # Start service
sudo systemctl stop nginx     # Stop service
sudo systemctl restart nginx  # Restart service
sudo systemctl status nginx   # Check status
sudo systemctl enable nginx   # Enable on boot
sudo journalctl -u nginx -f   # View service logs
```
