import express from "express";
import { getBlogs, createBlog, updateBlog, getBlogById, deleteBlog, getBlogBySlug } from "../controllers/blogController";
import upload from "../config/upload";

const router = express.Router();

router.get("/get", getBlogs);
router.post("/", upload.single("image"), createBlog);
router.patch("/update/:slug", upload.single("image"), updateBlog);
// router.get("/:id", getBlogById);
router.get("/:slug", getBlogBySlug);

router.delete("/delete/:id", deleteBlog);




export default router;