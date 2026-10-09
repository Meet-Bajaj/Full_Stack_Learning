# Lesson 9: Production Configuration

## Worker Processes and Connections
Tune Nginx for your hardware.

```nginx
# In nginx.conf main context
# Set to 'auto' to spawn one worker per CPU core
worker_processes auto; 

events {
    # Max connections per worker
    # Total connections = worker_processes * worker_connections
    worker_connections 1024;
    
    # Efficient connection processing method for Linux
    use epoll;
    multi_accept on;
}
```

## Timeouts
Prevent slow clients from tying up connections.
```nginx
http {
    client_body_timeout 12;
    client_header_timeout 12;
    keepalive_timeout 15;
    send_timeout 10;
}
```

## Logging
Keep access and error logs, but ensure they are rotated (usually handled by `logrotate` in Linux).
```nginx
http {
    # Custom log format
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;
    
    # error_log can be set to different levels: warn, error, crit, alert, emerg
    error_log /var/log/nginx/error.log warn;
}
```

## File Descriptor Limits
Ensure your OS file descriptor limits are high enough to support `worker_connections`.
```nginx
worker_rlimit_nofile 65535;
```
