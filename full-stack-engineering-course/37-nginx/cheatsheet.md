# Nginx Cheatsheet

## Basic Commands
```bash
sudo systemctl start nginx    # Start Nginx
sudo systemctl stop nginx     # Stop Nginx
sudo systemctl restart nginx  # Restart (drops connections)
sudo systemctl reload nginx   # Graceful reload (safe for prod)
sudo systemctl status nginx   # Check status
sudo nginx -t                 # Test configuration syntax
```

## Basic Static Server
```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## Reverse Proxy
```nginx
location /api/ {
    proxy_pass http://localhost:3000/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

## Load Balancing
```nginx
upstream backend {
    server 10.0.0.1;
    server 10.0.0.2;
}
server {
    location / {
        proxy_pass http://backend;
    }
}
```

## SSL / HTTPS
```nginx
server {
    listen 443 ssl;
    server_name example.com;
    ssl_certificate /path/to/cert.crt;
    ssl_certificate_key /path/to/private.key;
}
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name example.com;
    return 301 https://$host$request_uri;
}
```
