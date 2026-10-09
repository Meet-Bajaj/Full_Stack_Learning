# Lesson 10: systemd and Services

## Learning Objectives
By the end of this lesson, you will be able to:
- Manage background services using `systemctl`.
- Write custom systemd unit files to keep your Node.js/Python apps running permanently.
- View system logs using `journalctl`.

---

## 1. What is systemd?

`systemd` is the initialization system and service manager for modern Linux distributions. It is the very first process that starts when a Linux server boots (PID 1), and it manages all other background services (like Nginx, PostgreSQL, SSH, and your custom apps).

---

## 2. Using `systemctl`

You interact with `systemd` using the `systemctl` command.

- **Check status:** `sudo systemctl status nginx` (Shows if it's running, failed, and recent logs).
- **Start/Stop:** `sudo systemctl start nginx` / `sudo systemctl stop nginx`
- **Restart:** `sudo systemctl restart nginx`
- **Enable on Boot:** `sudo systemctl enable nginx` (Ensures the service starts automatically if the server reboots).
- **Disable on Boot:** `sudo systemctl disable nginx`

---

## 3. Creating a Custom Service (Keeping Node.js alive)

While tools like `pm2` are popular in the Node ecosystem, `systemd` is native, uses zero extra RAM, and is industry standard.

Let's create a service file for a Node API.
1. Create a Unit File: `sudo nano /etc/systemd/system/myapp.service`
2. Add the configuration:

```ini
[Unit]
Description=My Node.js API
After=network.target

[Service]
# The user that should run the app
User=ubuntu
Group=ubuntu
WorkingDirectory=/var/www/myapp

# The command to start the app
ExecStart=/usr/bin/node server.js

# Restart policy: If it crashes, restart it automatically!
Restart=always
RestartSec=3

# Environment variables
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
```

3. Reload systemd to recognize the new file: `sudo systemctl daemon-reload`
4. Start the app: `sudo systemctl start myapp`
5. Enable it on boot: `sudo systemctl enable myapp`

---

## 4. Reading Logs with `journalctl`

`systemd` captures all `console.log` and `console.error` outputs from your app automatically!

- **View logs for a service:** `sudo journalctl -u myapp`
- **Follow logs live (like tail -f):** `sudo journalctl -u myapp -f`
- **See logs since last boot:** `sudo journalctl -u myapp -b`

## Summary
- `systemd` manages long-running background processes (daemons).
- Use `systemctl` to start, stop, and enable services.
- Writing a custom `.service` file is the professional way to deploy applications on Linux without external dependencies like PM2.
