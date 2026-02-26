"use strict";
// import multer from "multer";
// import fs from "fs";
// import path from "path";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const multer_1 = __importDefault(require("multer"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_1 = __importDefault(require("./cloudinary")); // import Cloudinary config
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.default,
    params: (req, file) => ({
        folder: `blog_${Date.now()}`, // random folder
        allowed_formats: ["jpg", "jpeg", "png"], // allowed formats
        public_id: `${Date.now()}-${file.originalname}`,
    }),
});
const upload = (0, multer_1.default)({ storage });
exports.default = upload;
