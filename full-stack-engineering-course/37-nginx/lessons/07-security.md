# Lesson 7: Security Configurations

## Security Headers
Protect your application from common web vulnerabilities by adding HTTP headers.

```nginx
# Prevent Clickjacking
add_header X-Frame-Options "SAMEORIGIN";

# Prevent MIME-sniffing
add_header X-Content-Type-Options "nosniff";

# Enable XSS filtering in browsers
add_header X-XSS-Protection "1; mode=block";
```

## Hiding Nginx Version
Don't broadcast your Nginx version to potential attackers.
```nginx
# In http block
server_tokens off;
```

## Rate Limiting
Protect against brute force or DDoS by limiting requests.
```nginx
# In http block: Define the zone
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;

server {
    location /login {
        # Apply the zone: burst allows temporary spikes
        limit_req zone=mylimit burst=20 nodelay;
    }
}
```

## Access Control (IP Blocking)
Deny or allow specific IP addresses.
```nginx
location /admin {
    allow 192.168.1.0/24;
    deny all;
}
```
