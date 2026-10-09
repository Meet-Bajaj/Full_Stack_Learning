# Lesson 08: SSH (Secure Shell)

## Learning Objectives
By the end of this lesson, you will be able to:
- Authenticate to remote servers using SSH keys instead of passwords.
- Secure the SSH daemon configuration.
- Transfer files securely using `scp`.

---

## 1. What is SSH?

SSH is a cryptographic network protocol used to operate network services securely over an unsecured network. It operates on **Port 22**.

Basic usage: `ssh username@ip_address`

---

## 2. Key-Based Authentication

Password authentication is susceptible to brute-force attacks. The industry standard is Asymmetric Cryptography (Public/Private Key Pairs).

### Step 1: Generate a Key Pair (On your LOCAL machine)
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
*(Ed25519 is newer, faster, and more secure than RSA).*
This creates two files in your `~/.ssh/` folder:
- `id_ed25519` (Your PRIVATE key. NEVER share this. Protect it with a passphrase).
- `id_ed25519.pub` (Your PUBLIC key. You put this on the servers you want to access).

### Step 2: Copy the Public Key to the Server
If you still have password access to the server, use:
```bash
ssh-copy-id username@server_ip
```
This automatically appends your public key to the server's `~/.ssh/authorized_keys` file.

Now, when you type `ssh username@server_ip`, you will log in instantly without a password prompt!

---

## 3. Securing the SSH Server

Once key-based auth is working, you MUST disable password authentication to secure the server from bots.

Log into the server and edit the SSH configuration:
`sudo nano /etc/ssh/sshd_config`

Find and change these lines:
```text
PermitRootLogin no        # Never allow root to login via SSH directly
PasswordAuthentication no # Force key-based auth only
```

Save the file, then restart the SSH service:
`sudo systemctl restart ssh`

*(Warning: Keep your current SSH session open in one terminal window, and try to log in via a new window. If you messed up the config, you won't be locked out of the active session).*

---

## 4. Secure Copy (`scp`)

You can transfer files over SSH using `scp`.

- **Local to Server:** 
  `scp ./build.zip ubuntu@192.168.1.10:/var/www/`
- **Server to Local:**
  `scp ubuntu@192.168.1.10:/var/log/nginx/error.log ./local_folder/`
- **Copy an entire folder (Recursive):**
  `scp -r ./dist ubuntu@192.168.1.10:/var/www/myapp/`

## Summary
- SSH is the standard tool for remote server management.
- Always use Ed25519 key-pairs instead of passwords.
- Disable `PasswordAuthentication` in `/etc/ssh/sshd_config` for security.
- Use `scp` to push/pull files securely.
