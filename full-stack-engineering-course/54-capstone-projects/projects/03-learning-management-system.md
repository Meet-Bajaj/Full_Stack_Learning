# Project 03: Learning Management System (LMS)

## Project Overview
Build a comprehensive platform for hosting and consuming educational content, similar to Udemy.

## Tech Stack
- **Frontend:** React, Next.js, Tailwind, Stripe Elements.
- **Backend:** Node.js, GraphQL (Apollo Server), PostgreSQL, Prisma.
- **Storage:** AWS S3 for video hosting, AWS CloudFront (CDN) for video delivery.

## Core Features
- **Instructor Dashboard:** Upload videos, create courses, define curriculum, view sales.
- **Student Portal:** Purchase courses, track progress (mark lessons complete), video player.
- **Payments:** Stripe Connect integration so instructors can receive payouts.
- **Video Processing:** (Bonus) Use AWS MediaConvert to transcode uploaded videos into HLS format for adaptive bitrate streaming.

## Database Schema (Prisma)
- `User` (Role: Student or Instructor)
- `Course` (Title, Description, Price, published status)
- `Chapter` (Belongs to Course)
- `Lesson` (Belongs to Chapter, holds video URL)
- `Purchase` (Maps User to Course)
- `UserProgress` (Tracks completed lessons)

## Architecture Challenges
- Ensuring users can only access videos if they have purchased the course (Signed URLs).
- Handling large file uploads reliably (Multipart uploads to S3 directly from the client).
