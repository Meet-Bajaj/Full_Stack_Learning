# Nginx Cheat Sheet

## Basic Commands (Linux)
```bash
nginx -t                    # Test configuration syntax
nginx -s reload             # Reload config without dropping connections
systemctl status nginx      # Check service status
```

## File Structure (Ubuntu/Debian)
- `/etc/nginx/nginx.conf`: Main configuration file
- `/etc/nginx/sites-available/`: Where server blocks (vhosts) are defined
- `/etc/nginx/sites-enabled/`: Symlinks to sites-available to enable them

## Static File Server
```nginx
server {
    listen 80;
    server_name example.com www.example.com;
    
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## Reverse Proxy (Node.js App)
```nginx
server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://localhost:3000;
        
        # Essential headers for proxying
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Load Balancing
```nginx
upstream myapp {
    # Round robin by default
    server localhost:3001;
    server localhost:3002;
    server localhost:3003 weight=3; # Higher weight = more traffic
}

server {
    listen 80;
    server_name loadbalanced.example.com;

    location / {
        proxy_pass http://myapp;
    }
}
```

## SPA (React/Vue/Angular) Configuration
For Single Page Applications handling their own routing, redirect all 404s to `index.html`.
```nginx
server {
    listen 80;
    server_name app.example.com;
    root /var/www/my-spa/dist;
    index index.html;

    location / {
        # Fallback to index.html for client-side routing
        try_files $uri $uri/ /index.html;
    }
}
```

## SSL & HTTP/2 Configuration
```nginx
server {
    listen 443 ssl http2;
    server_name example.com;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # Recommended Security Protocols
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    # HSTS Header
    add_header Strict-Transport-Security "max-age=31536000" always;
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name example.com;
    return 301 https://$host$request_uri;
}
```
