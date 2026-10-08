# Lesson 3: HTTP Caching

## 1. Learning Objectives
- Utilize `Cache-Control` headers.
- Understand ETags and conditional requests.
- Leverage CDNs and Browser Caching.

## 2. Browser Caching
Browsers can cache responses so they don't have to re-download assets like images, CSS, and JS.
- `Cache-Control: max-age=31536000`: Tells the browser to cache the file for 1 year. Great for hashed static assets (`app.v1.js`).
- `Cache-Control: no-cache`: Forces the browser to validate with the server before using the cached copy.

## 3. ETags (Entity Tags)
A hash of the resource's content.
1. Server sends `ETag: "12345"`.
2. Browser sends subsequent request with `If-None-Match: "12345"`.
3. If content hasn't changed, Server returns `304 Not Modified` (empty body). Saves bandwidth!

## 4. Summary and Checklist
- [ ] Configure Express.js to send proper Cache-Control headers.
- [ ] Understand how a 304 Not Modified response works.
