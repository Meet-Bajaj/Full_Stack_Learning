# Lesson 6: Load Balancing

## Upstream Blocks for Load Balancing
Load balancing distributes incoming traffic across multiple servers, increasing capacity and reliability.

```nginx
upstream myapp {
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    location / {
        proxy_pass http://myapp;
    }
}
```

## Load Balancing Algorithms
1. **Round Robin (Default):** Distributes requests sequentially.
2. **Least Connections:** Sends traffic to the server with the fewest active connections. Good for long-running requests.
   ```nginx
   upstream myapp {
       least_conn;
       server backend1.example.com;
       server backend2.example.com;
   }
   ```
3. **IP Hash:** Uses the client's IP address to ensure they always hit the same backend server (sticky sessions).
   ```nginx
   upstream myapp {
       ip_hash;
       server backend1.example.com;
       server backend2.example.com;
   }
   ```

## Health Checks
Nginx (Open Source) passively monitors backends. If a server fails, Nginx marks it as down for `fail_timeout`.
```nginx
upstream myapp {
    server backend1.example.com max_fails=3 fail_timeout=30s;
}
```
