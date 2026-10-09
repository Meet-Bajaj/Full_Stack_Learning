# Nginx MCQs

*Note: This is a representative sample of the 70 questions covering all difficulty levels.*

## Beginner
**1. What is the primary architectural difference between Nginx and Apache?**
A) Nginx is written in Python, Apache in C
B) Nginx uses an event-driven, asynchronous architecture; Apache is process/thread-driven
C) Apache supports reverse proxying, Nginx does not
D) Nginx only runs on Windows
**Answer:** B
**Explanation:** Nginx was designed to handle the C10K problem by using a non-blocking, event-driven architecture, unlike Apache's traditional process-per-request model.

**2. Which command safely reloads Nginx configuration without dropping connections?**
A) `systemctl restart nginx`
B) `nginx -s stop`
C) `systemctl reload nginx`
D) `nginx reset`
**Answer:** C

## Intermediate
**3. You want to serve static files from `/var/www/assets` when a user requests `/static/logo.png`. Which configuration is correct?**
A) 
```nginx
location /static/ {
    root /var/www/assets;
}
```
B)
```nginx
location /static/ {
    alias /var/www/assets/;
}
```
C) Both A and B
D) Neither A nor B
**Answer:** B
**Explanation:** `root` appends the URI, meaning Nginx would look for `/var/www/assets/static/logo.png`. `alias` maps exactly, so it looks for `/var/www/assets/logo.png`.

**4. What does the `try_files $uri $uri/ /index.html;` directive do?**
A) It causes an infinite loop if `index.html` is missing.
B) It checks if the requested file exists, then if a directory exists, and falls back to `index.html` (crucial for SPAs).
C) It serves three files simultaneously.
D) It only works for PHP applications.
**Answer:** B

## Advanced
**5. How do you configure Nginx to use the "least connections" load balancing algorithm?**
A) Add `least_conn;` inside the `upstream` block.
B) Add `algorithm=least_conn;` in the `location` block.
C) Add `balance least_conn;` in the `http` block.
D) Nginx only supports round-robin.
**Answer:** A

## Production & Architecture
**6. In a high-traffic production environment, you notice Nginx is dropping connections. You see "worker_connections are not enough" in the error log. Where do you increase this?**
A) In the `http` block
B) In the `events` block
C) In the `server` block
D) In the `main` context
**Answer:** B
**Explanation:** The `worker_connections` directive must be placed inside the `events` context.
