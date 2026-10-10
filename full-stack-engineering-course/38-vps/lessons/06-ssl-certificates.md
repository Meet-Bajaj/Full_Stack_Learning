# Lesson 6: SSL Certificates

## Securing Your Server with HTTPS
HTTPS is mandatory for modern web applications. It encrypts data between the client and your server.

## Let's Encrypt and Certbot
Let's Encrypt provides free SSL certificates. Certbot is the standard tool to fetch and install them.

```bash
sudo apt install certbot python3-certbot-nginx
```

## Running Certbot
Once your Nginx server blocks are configured with your domain names (and DNS has propagated), run:

```bash
sudo certbot --nginx -d example.com -d www.example.com
```
Certbot will:
1. Verify you own the domain.
2. Generate the SSL certificate and private key.
3. Automatically modify your Nginx configuration to listen on port 443 and include the certificate paths.
4. Set up an HTTP to HTTPS redirect.

## Auto-Renewal
Let's Encrypt certificates are valid for 90 days. Certbot installs a cron job or systemd timer to renew them automatically. Verify it with:
```bash
sudo certbot renew --dry-run
```

## Wildcard Certificates
If you have many subdomains (e.g., tenant architectures), you might need a wildcard cert (`*.example.com`). This requires DNS-based challenge verification rather than the standard HTTP challenge.
