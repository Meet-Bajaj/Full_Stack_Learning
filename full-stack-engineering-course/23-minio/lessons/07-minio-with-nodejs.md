# Lesson 7: MinIO with Node.js

Using the AWS SDK v3 (since MinIO is S3-compatible):
```javascript
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const client = new S3Client({ endpoint: 'http://localhost:9000', region: 'us-east-1' });
```
