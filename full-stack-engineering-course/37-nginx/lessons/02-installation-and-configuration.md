# Lesson 2: Installation and Configuration

## Learning Objectives
- Install Nginx on Ubuntu/Debian.
- Understand the `nginx.conf` file structure.
- Differentiate between `http`, `server`, and `location` contexts.
- Use basic directives.
- Know when to reload vs restart Nginx.

## Installation
On Debian/Ubuntu-based systems:
```bash
sudo apt update
sudo apt install nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

## Configuration Structure (`nginx.conf`)
The main configuration file is usually located at `/etc/nginx/nginx.conf`.
Nginx configurations are built using directives (simple instructions) and blocks (contexts).

### Contexts
- **Main Context:** Global settings (worker processes, user).
- **Events Context:** Connection processing (worker_connections).
- **HTTP Context:** Web server settings applied to all virtual hosts.
- **Server Context:** Settings for a specific virtual host/domain.
- **Location Context:** Settings for specific URIs/paths.

## Reload vs Restart
- `sudo systemctl reload nginx`: Gracefully reloads configuration without dropping active connections. Use this 99% of the time when changing configs.
- `sudo systemctl restart nginx`: Stops and starts Nginx. Drops connections. Only needed for major upgrades or if Nginx is entirely stopped.
