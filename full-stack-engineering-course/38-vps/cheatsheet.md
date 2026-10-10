# VPS Cheatsheet

## User & Security Management
```bash
adduser <username>                  # Create user
usermod -aG sudo <username>         # Grant sudo
ssh-keygen -t ed25519               # Generate SSH key (run locally)
ssh-copy-id user@ip                 # Copy key to server (run locally)
sudo ufw allow OpenSSH              # Allow SSH through firewall
sudo ufw allow 'Nginx Full'         # Allow HTTP/HTTPS
sudo ufw enable                     # Enable firewall
```

## System Monitoring
```bash
htop                                # Interactive process viewer
df -h                               # Disk usage
free -m                             # RAM usage
tail -f /var/log/syslog             # Tail system logs
journalctl -u nginx -f              # Tail Nginx service logs
```

## Docker Management
```bash
docker ps                           # List running containers
docker compose up -d                # Start stack in background
docker compose down                 # Stop stack
docker system prune -a              # Clean up unused images/containers
docker logs -f <container_name>     # Follow container logs
```

## SSL with Certbot
```bash
sudo certbot --nginx -d example.com -d www.example.com
sudo certbot renew --dry-run        # Test auto-renewal
```
