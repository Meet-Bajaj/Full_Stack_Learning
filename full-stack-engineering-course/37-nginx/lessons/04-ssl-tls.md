# Lesson 4: SSL/TLS

## SSL/TLS Certificates
Secure Sockets Layer (SSL) and Transport Layer Security (TLS) encrypt the communication between the client and the server. HTTPS relies on these certificates.

## Let's Encrypt and Certbot
Let's Encrypt is a free, automated, and open certificate authority. Certbot is a tool to automatically fetch and deploy these certificates to Nginx.

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com
```

## Manual HTTPS Configuration
If you configure it manually, your server block will look like this:
```nginx
server {
    listen 443 ssl;
    server_name example.com;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # Modern SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
}
```

## Certificate Renewal
Certbot adds a systemd timer or cron job automatically, but you can test it:
```bash
sudo certbot renew --dry-run
```

## HSTS (HTTP Strict Transport Security)
HSTS tells browsers to *only* connect via HTTPS, preventing downgrade attacks.
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```
