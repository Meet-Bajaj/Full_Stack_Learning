# Lesson 15: File Uploads

## 🎯 Learning Objectives
- Handle `multipart/form-data` in NestJS.
- Use `FileInterceptor` and `FilesInterceptor` (which wrap Multer under the hood).
- Validate file types and sizes using custom Pipes.

## 🧠 Mental Model: The Customs Office
Just like in Express, uploading a file requires a specific customs office (Multer). 
In NestJS, instead of writing raw Multer middleware, Nest wraps it in an **Interceptor**. The `FileInterceptor` catches the file, processes it, and attaches it to `@UploadedFile()` before the controller method executes.

## 📖 Concept Explanation

### 1. Basic Single File Upload
First, install the types: `npm i -D @types/multer`.

```typescript
import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  
  @Post()
  @UseInterceptors(FileInterceptor('file')) // 'file' is the field name in the form
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return { filename: file.originalname, size: file.size };
  }
}
```

### 2. Validation (File Size & Type)
Instead of trusting the user, use a `ParseFilePipe` to validate the upload.

```typescript
@Post('avatar')
@UseInterceptors(FileInterceptor('file'))
uploadAvatar(
  @UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1024 * 1024 }), // 1MB
        new FileTypeValidator({ fileType: 'image/jpeg' }),
      ],
    }),
  ) file: Express.Multer.File,
) {
  // If we reach here, it is definitely a JPEG under 1MB
  return "Uploaded successfully";
}
```

### 3. Multiple Files
Use `FilesInterceptor` (plural) for arrays of files.

```typescript
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadedFiles } from '@nestjs/common';

@Post('gallery')
@UseInterceptors(FilesInterceptor('photos', 5)) // Max 5 files
uploadMultiple(@UploadedFiles() files: Array<Express.Multer.File>) {
  return `${files.length} files uploaded`;
}
```

## ⚠️ Common Mistakes
1. **Saving to Disk in Serverless:** By default, Multer keeps the file in memory (`buffer`). If you configure it to save to `dest: './uploads'`, remember that in cloud environments (like Heroku or AWS Lambda), the local filesystem is ephemeral and the file will be deleted on restart. 
   **Solution:** Pass the `buffer` to an AWS S3 Service.
2. **Missing `multipart/form-data`:** Just like Express, if the client sends `application/json`, the `FileInterceptor` will completely ignore the request.

## 🏋️ Exercises
1. Configure `FileInterceptor` to save files locally to a `./uploads` directory with a unique timestamped filename.
2. Write a `MinioService` or `S3Service` that takes the `file.buffer` and uploads it to cloud storage.

## ✅ Summary Checklist
- [ ] I can use `FileInterceptor` for single files and `FilesInterceptor` for multiple files.
- [ ] I can use `@UploadedFile()` to extract the file metadata.
- [ ] I know how to validate file types and sizes using `ParseFilePipe`.
