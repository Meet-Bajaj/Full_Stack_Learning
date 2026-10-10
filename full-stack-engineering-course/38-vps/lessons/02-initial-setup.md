# Lesson 2: Initial Setup

## Creating a Server
When you create a VPS (often called a Droplet, Instance, or Linode), you select an OS (Ubuntu 22.04 LTS is standard for web servers) and a size.

## SSH Access
Secure Shell (SSH) is how you remotely access your server's command line.

```bash
# Connecting as root (initial setup only)
ssh root@your_server_ip
```

## Initial Security Configuration
Never run your applications as the `root` user. The first step is creating a new user with `sudo` privileges.

```bash
# Create a new user
adduser deploy

# Add to sudo group
usermod -aG sudo deploy
```

## SSH Keys and Disabling Password Auth
Password authentication is vulnerable to brute-force attacks. Use SSH keys.

1. Generate key locally: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. Copy to server: `ssh-copy-id deploy@your_server_ip`
3. Edit `/etc/ssh/sshd_config` on the server:
   ```text
   PermitRootLogin no
   PasswordAuthentication no
   ```
4. Restart SSH service: `sudo systemctl restart ssh`

## UFW Firewall
Enable Uncomplicated Firewall (UFW) to block unwanted traffic.

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```
