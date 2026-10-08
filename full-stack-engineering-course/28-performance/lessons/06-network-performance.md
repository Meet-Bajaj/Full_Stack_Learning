# Lesson 6: Network Performance

## Learning Objectives
- Enable response compression (Gzip/Brotli).
- Understand the benefits of HTTP/2 and HTTP/3.
- Use DNS Prefetch and Resource Preload.

## Compression
Minifying code removes whitespace. Compression (Gzip or Brotli) uses algorithms to find repeating patterns, significantly shrinking payloads. Always compress text-based responses (HTML, CSS, JS, JSON).

## HTTP/2 Multiplexing
HTTP/1.1 required a new TCP connection for every asset, leading to Head-of-Line blocking. HTTP/2 multiplexes multiple requests over a single TCP connection, making it much faster.

## Resource Hints
- `<link rel="dns-prefetch" href="...">`
- `<link rel="preload" as="style" href="...">`
