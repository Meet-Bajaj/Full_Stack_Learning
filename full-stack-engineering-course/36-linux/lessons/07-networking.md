# Lesson 07: Networking and Troubleshooting

## Learning Objectives
By the end of this lesson, you will be able to:
- Test network connectivity and DNS resolution.
- View open ports and active connections.
- Make HTTP requests directly from the CLI.

---

## 1. Connectivity Testing

When a server can't reach the database, or an API isn't responding, these are your first tools.

### `ping`
Tests if a host is reachable via ICMP echo requests.
`ping google.com`
*(Press Ctrl+C to stop, otherwise it runs forever on Linux).*

### `traceroute`
Shows the exact path (routers/hops) your packet takes to reach the destination. Useful for finding where a network connection is dropping.
`traceroute google.com`

---

## 2. Making HTTP Requests (`curl` and `wget`)

### `wget`
Best for downloading files.
`wget https://example.com/file.zip`

### `curl` (Client URL)
The ultimate tool for interacting with REST APIs from the command line.
- **GET request:** `curl https://api.github.com/users/octocat`
- **Show headers (-I):** `curl -I https://example.com` (Great for checking if Nginx is returning a 200 or 502).
- **POST request:** 
  ```bash
  curl -X POST https://api.example.com/data \
       -H "Content-Type: application/json" \
       -d '{"name": "Alice"}'
  ```

---

## 3. Ports and Connections (`ss` / `netstat`)

If you try to start a Node server and get `EADDRINUSE (Port 3000 is already in use)`, how do you find out what is using it?

Historically, engineers used `netstat`. The modern replacement is `ss` (Socket Statistics).

- **View listening ports:** `sudo ss -tuln`
  - `-t`: TCP ports
  - `-u`: UDP ports
  - `-l`: Listening sockets only
  - `-n`: Numeric output (don't resolve IPs to hostnames, which is faster)

- **Find the specific process blocking a port:** `sudo ss -tulnp | grep :3000`
  - The `-p` flag shows the Process ID (PID) holding the port. You can then `kill` that PID.

## Summary
- `ping` tests basic connectivity.
- `curl` is essential for debugging APIs and web server responses.
- `ss -tulnp` is the fastest way to find which application is occupying a specific port.
