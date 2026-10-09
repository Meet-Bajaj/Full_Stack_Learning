# Lesson 3: Reverse Proxy

## What is a Reverse Proxy?
A reverse proxy sits in front of one or more backend servers and intercepts requests from clients. This provides security, performance (caching/compression), and load balancing.

## The `proxy_pass` Directive
The core directive for reverse proxying is `proxy_pass`.

```nginx
server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

## Passing Headers
When Nginx proxies a request, the backend server sees the request coming from Nginx (usually `127.0.0.1`), not the original client. We must pass the client's information using headers.

```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

## Upstream Blocks
To proxy to multiple servers (or define a group of servers), use an `upstream` block in the `http` context.

```nginx
upstream node_backend {
    server localhost:3000;
    server localhost:3001;
}
```
