# Nginx Exercises

## Exercise 1: Static Site Hosting
**Task:** Configure Nginx to serve a static HTML site.
1. Create a directory `/var/www/mysite` and place an `index.html` inside.
2. Create a new Nginx configuration file in `/etc/nginx/sites-available/mysite`.
3. Configure a `server` block listening on port 80 for `mysite.local`.
4. Enable the site by symlinking to `sites-enabled`.
5. Reload Nginx and test.

## Exercise 2: Reverse Proxy
**Task:** Proxy traffic to a local Node.js app.
1. Start a simple Node server on port 3000.
2. Configure Nginx to listen on port 80 for `api.local`.
3. Use `proxy_pass` to route traffic to `http://localhost:3000`.
4. Ensure the `X-Forwarded-For` header is set.

## Exercise 3: Load Balancing
**Task:** Distribute traffic across three backend instances.
1. Run three instances of a backend app on ports 3001, 3002, 3003.
2. Create an `upstream` block named `backend_cluster`.
3. Configure a `server` block to proxy pass to `http://backend_cluster`.
4. Test that requests are round-robined across the instances.

## Exercise 4: Rate Limiting
**Task:** Protect a login route.
1. Define a `limit_req_zone` in the `http` context allowing 1 request per second per IP.
2. Apply `limit_req` to a `location /login` block with a burst of 5.
3. Test using `curl` or `ab` (Apache Bench) to ensure 503 errors are returned when exceeding the limit.
