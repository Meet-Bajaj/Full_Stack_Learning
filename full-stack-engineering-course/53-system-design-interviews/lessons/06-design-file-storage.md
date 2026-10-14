# Lesson 06: Design a File Storage System (Google Drive)

## Learning Objectives
- Design a scalable cloud storage system.
- Understand block storage and chunking.
- Handle deduplication and syncing.

## Core Concepts
- **Chunking:** Don't upload a 10GB file as one piece. Split it into 4MB chunks. If a chunk fails, retry only that chunk.
- **Deduplication:** Hash each chunk (SHA-256). If the hash already exists in storage, just point to the existing chunk. Saves massive amounts of space.

## Architecture
- **Block Servers:** Handle uploading/downloading chunks to S3/Cloud Storage.
- **Metadata Database:** Relational DB tracking which chunks belong to which file version.
- **Sync Client:** Desktop app that monitors local file changes, chunks them, and syncs to the server.
