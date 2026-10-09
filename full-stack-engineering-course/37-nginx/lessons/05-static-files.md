# Lesson 5: Serving Static Files

## Nginx as a Static File Server
Nginx is incredibly fast at serving static assets (HTML, CSS, JS, images) because it reads them directly from disk and streams them to the client asynchronously.

## `root` vs `alias`
- **`root`**: Appends the URI to the root path.
- **`alias`**: Maps the URI precisely to the defined path, replacing the matched part.

```nginx
location /images/ {
    # Request for /images/logo.png maps to /var/www/assets/images/logo.png
    root /var/www/assets;
}

location /static/ {
    # Request for /static/main.css maps to /var/www/app/main.css (NOT /var/www/app/static/main.css)
    alias /var/www/app/;
}
```

## The `try_files` Directive
Essential for SPAs (React, Vue, Angular). It checks if a file exists, and if not, falls back to `index.html`.

```nginx
location / {
    root /var/www/frontend;
    try_files $uri $uri/ /index.html;
}
```

## Compression (Gzip)
Enable Gzip to reduce payload size.
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml;
gzip_min_length 1000;
```
