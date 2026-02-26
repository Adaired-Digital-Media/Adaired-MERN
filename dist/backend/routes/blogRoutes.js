"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogController_1 = require("../controllers/blogController");
const upload_1 = __importDefault(require("../config/upload"));
const router = express_1.default.Router();
router.get("/get", blogController_1.getBlogs);
router.post("/", upload_1.default.single("image"), blogController_1.createBlog);
router.patch("/update/:id", upload_1.default.single("image"), blogController_1.updateBlog);
router.get("/:id", blogController_1.getBlogById);
router.delete("/delete/:id", blogController_1.deleteBlog);
exports.default = router;
