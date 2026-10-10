# Lesson 4: DNS Configuration

## What is DNS?
The Domain Name System (DNS) translates human-readable domain names (like `google.com`) into machine-readable IP addresses (like `142.250.190.46`).

## Core DNS Records
- **A Record:** Maps a domain to an IPv4 address. (Essential for connecting your domain to your VPS).
- **AAAA Record:** Maps a domain to an IPv6 address.
- **CNAME (Canonical Name):** Maps one domain name to another (alias). Often used for `www` to point to the root domain.
- **MX (Mail Exchange):** Directs email to a mail server.
- **TXT Record:** Text records, commonly used for domain verification (Google Search Console) and email security (SPF, DKIM).

## Configuring Your Domain
1. Log into your domain registrar (e.g., Namecheap, Cloudflare, Route53).
2. Go to DNS settings.
3. Add an `A` record:
   - **Host/Name:** `@` (represents the root domain, e.g., `example.com`)
   - **Value:** `<Your VPS IP Address>`
   - **TTL:** Auto or 3600 (1 hour)
4. Add a `CNAME` for `www`:
   - **Host/Name:** `www`
   - **Value:** `example.com`

## DNS Propagation
Changes to DNS records are not instant. They must propagate across DNS servers globally. This can take anywhere from a few minutes to 48 hours, though modern DNS typically updates very quickly. Use tools like `whatsmydns.net` to check propagation.
