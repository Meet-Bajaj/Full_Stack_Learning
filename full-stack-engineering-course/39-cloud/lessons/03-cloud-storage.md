# Lesson 3: Cloud Storage

## Object Storage (Amazon S3)
Simple Storage Service (S3) stores files as "objects" inside "buckets". It is infinitely scalable, extremely durable (11 9's of durability), and ideal for static assets (images, videos, backups). It does not have a traditional file system.

## Block Storage (Amazon EBS)
Elastic Block Store (EBS) provides block level storage volumes for use with EC2 instances. Think of it as a virtual hard drive attached to your VM. It's fast and required for databases running on EC2, but can generally only be attached to one instance at a time.

## File Storage (Amazon EFS)
Elastic File System (EFS) is a managed NFS (Network File System). It can be mounted to multiple EC2 instances simultaneously. Useful for shared wordpress uploads or legacy CMS architectures.

## Content Delivery Network (CloudFront)
A CDN caches your static assets at Edge Locations (servers physically close to users around the world). When a user requests an image, it's served from the nearest Edge Location rather than your main S3 bucket, drastically reducing latency.
