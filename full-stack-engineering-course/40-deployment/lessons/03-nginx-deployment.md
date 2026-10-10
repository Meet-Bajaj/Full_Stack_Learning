# Lesson 3: Nginx Deployment

## Nginx as the Production Gateway
In production, Nginx acts as the single entry point for all traffic. It sits in front of your Docker containers or PM2 processes.

## Key Production Configurations
1.  **SSL Termination:** Nginx handles the HTTPS decryption and forwards raw HTTP to the backend containers. This offloads CPU work from your application.
2.  **Compression:** Enable Gzip to compress API responses and static assets before sending them over the wire.
3.  **Security Headers:** Add strict transport security (HSTS), XSS protection, and frame options.

## Routing Multiple Apps
If you have a frontend container (Next.js) on port 3000 and a backend container (NestJS) on port 4000:

```nginx
server {
    listen 443 ssl;
    server_name myapp.com;
    
    # Route to frontend
    location / {
        proxy_pass http://localhost:3000;
    }
    
    # Route API calls to backend
    location /api/ {
        proxy_pass http://localhost:4000;
    }
}
```
