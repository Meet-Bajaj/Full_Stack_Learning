# Lesson 07: File Uploads & Static Files

## 🎯 Learning Objectives
- Handle `multipart/form-data` requests.
- Use **Multer** to process file uploads safely.
- Understand file size limits and file type validation.
- Serve uploaded or static files to the client using `express.static`.

## 🧠 Mental Model: The Customs Office
Normal JSON data is like a postcard—easy to read and pass through. A file upload is like a massive shipping container. You can't just throw a shipping container into the normal mail sorting room (`express.json()`). 
You need a **Customs Office** (Multer middleware). The customs officers inspect the container (file type/size), stamp it, and move it to a secure warehouse (disk storage). 
Once stored, you open a public viewing gallery (`express.static`) so people can see the container without breaking into the warehouse.

## 📖 Concept Explanation

### Why `multipart/form-data`?
Standard forms send data as `application/x-www-form-urlencoded`. Files are huge binary blobs, so they must be sent as `multipart/form-data`. Express's built-in parsers cannot read this. We need **Multer**.

### Setting Up Multer
```javascript
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Configure where and how to store the files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // The folder MUST exist!
  },
  filename: (req, file, cb) => {
    // Prevent filename collisions by adding a timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// Configure validation and limits
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Not an image! Please upload an image.'), false);
    }
  }
});
```

### Handling Uploads
```javascript
// upload.single('avatar') expects a form field named 'avatar'
app.post('/profile', upload.single('avatar'), (req, res) => {
  // req.file contains information about the uploaded file
  // req.body contains the text fields, if there were any
  
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  res.send(`File uploaded to ${req.file.path}`);
});

// For multiple files
app.post('/photos/upload', upload.array('photos', 5), (req, res) => {
  res.send(`${req.files.length} files uploaded.`);
});
```

### Serving Static Files
To let users view the uploaded images, you must expose the `uploads/` folder.
```javascript
// http://localhost:3000/uploads/12345-image.jpg
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
```

## ⚠️ Common Mistakes
1. **Forgetting `enctype="multipart/form-data"`:** If testing via HTML forms or Postman, you MUST set the encoding type, otherwise `req.file` will be undefined.
2. **Not limiting file size:** Attackers can upload 10GB files and crash your server's disk space. Always set `limits.fileSize`.
3. **Trusting file extensions:** An attacker can rename a `.exe` script to `.jpg`. Validating by `mimetype` is better, but true security requires magic number (buffer) inspection.

## 🏋️ Exercises
1. Set up a route that accepts a maximum of 3 PDF files. If the user uploads an image, it should be rejected.
2. Expose a `public` folder using `express.static` and serve an `index.html` file from it.

## ✅ Summary Checklist
- [ ] I can configure Multer with custom storage and naming conventions.
- [ ] I can filter files by mimetype and limit their size.
- [ ] I can serve directories statically.
