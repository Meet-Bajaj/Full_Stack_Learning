# Lesson 12: Server Security Hardening

## Learning Objectives
By the end of this lesson, you will be able to:
- Configure a UFW Firewall to block unauthorized ports.
- Install and configure Fail2Ban to prevent brute-force attacks.
- Enable unattended security upgrades.

---

## 1. Firewalls (`ufw`)

By default, an exposed Linux server might have database ports or cache ports open to the internet. We must block everything except HTTP (80), HTTPS (443), and SSH (22).

Ubuntu comes with **UFW** (Uncomplicated Firewall).

### Setup
1. Allow SSH (CRITICAL: Do this BEFORE enabling UFW, or you will lock yourself out!).
   `sudo ufw allow ssh`
2. Allow Web Traffic.
   `sudo ufw allow http`
   `sudo ufw allow https`
3. Enable the firewall.
   `sudo ufw enable`
4. Check status.
   `sudo ufw status`

Now, if a PostgreSQL database is running on 5432, it can be accessed by localhost, but an external attacker trying to hit Port 5432 will just drop connection.

---

## 2. Defeating Brute Force (`fail2ban`)

If you look at your `/var/log/auth.log`, you will see hundreds of bots trying to guess your SSH password every hour. 

`fail2ban` scans log files for malicious behavior (like too many failed login attempts) and dynamically updates the firewall to ban their IP address temporarily.

### Setup
1. `sudo apt install fail2ban`
2. Enable it: `sudo systemctl enable fail2ban`
3. Start it: `sudo systemctl start fail2ban`

By default, if an IP fails SSH authentication 5 times, it is banned for 10 minutes. This makes brute-force attacks mathematically impossible.

To view banned IPs: `sudo fail2ban-client status sshd`

---

## 3. Unattended Upgrades

Security vulnerabilities are discovered in Linux packages constantly. Keeping packages updated is tedious. `unattended-upgrades` automates the installation of critical security patches.

### Setup
1. `sudo apt install unattended-upgrades`
2. Reconfigure it to ensure it's active:
   `sudo dpkg-reconfigure --priority=low unattended-upgrades` (Select "Yes").

This runs silently in the background daily, keeping the server safe from Zero-Day exploits without requiring manual `apt upgrade` commands.

---

## 4. Minimum Server Checklist Before Launch

- [ ] Connected via SSH Key; `PasswordAuthentication` set to `no`.
- [ ] Logged in as a standard user with `sudo`, NOT `root`.
- [ ] `ufw` enabled, allowing only ports 22, 80, 443.
- [ ] `fail2ban` active.
- [ ] `unattended-upgrades` configured.

## Summary
Securing a server takes 10 minutes but saves you from catastrophic data breaches. Firewalls, brute-force protection, and automated patching are non-negotiable for production infrastructure.
