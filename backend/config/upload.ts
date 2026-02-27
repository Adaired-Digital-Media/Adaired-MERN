// import multer from "multer";
// import fs from "fs";
// import path from "path";

// const uploadDir = path.join(__dirname, "../../uploads"); // adjust path

// // Create folder if not exists
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// export default upload;


// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import cloudinary from "./cloudinary"; // import Cloudinary config

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: (req, file) => ({
//     folder: `blog_${Date.now()}`,              // random folder
//     allowed_formats: ["jpg", "jpeg", "png"],   // allowed formats
//     public_id: `${Date.now()}-${file.originalname}`,
//   }),
// });

// const upload = multer({ storage });

// export default upload;


import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    resource_type: "image", // ✅ now TS accepts it
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  }),
});

const upload = multer({ storage });

export default upload;