# Lesson 8: Monitoring and Maintenance

## Server Monitoring
You need to know if your server is running out of resources.
- `htop` or `top`: Real-time CPU and RAM usage.
- `df -h`: Disk space usage.
- `free -m`: Memory usage.

For production, install monitoring agents like Prometheus/Grafana or use third-party services like Datadog or New Relic.

## Uptime Monitoring
Use a service like UptimeRobot, Pingdom, or Better Stack to ping your `/health` endpoint every minute. They will alert you via email, SMS, or Slack if your server goes down.

## System Updates
Keep your server secure by regularly applying security updates.
```bash
sudo apt update
sudo apt upgrade
```
*Note: Consider setting up `unattended-upgrades` on Ubuntu for automatic security patches.*

## Log Rotation
Logs grow over time and will eventually fill up your disk. Ensure `logrotate` is configured for Nginx, Docker, and any native applications.

```bash
# Check Docker disk usage
docker system df

# Clean up unused Docker resources
docker system prune -a --volumes
```
