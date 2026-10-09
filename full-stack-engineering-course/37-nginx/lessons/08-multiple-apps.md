# Lesson 8: Multiple Applications

## Virtual Hosts (Server Blocks)
You can host multiple domain names on a single Nginx instance using `server` blocks. Nginx uses the `Host` header from the HTTP request to determine which server block should handle the request.

```nginx
# App 1
server {
    listen 80;
    server_name app1.com;
    
    location / {
        proxy_pass http://localhost:3000;
    }
}

# App 2
server {
    listen 80;
    server_name app2.com;
    
    location / {
        proxy_pass http://localhost:4000;
    }
}
```

## Routing by Path
You can also host multiple applications on the *same* domain, routed by the URI path.

```nginx
server {
    listen 80;
    server_name mydomain.com;

    location /api/ {
        # Strip '/api' before passing to backend (optional)
        rewrite ^/api/(.*) /$1 break;
        proxy_pass http://localhost:3000;
    }

    location / {
        # Frontend
        proxy_pass http://localhost:5173;
    }
}
```
