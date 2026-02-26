"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.getBlogById = exports.updateBlog = exports.createBlog = exports.getBlogs = void 0;
const Blog_1 = __importDefault(require("../models/Blog"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const mongoose_1 = __importDefault(require("mongoose"));
const getBlogs = async (req, res) => {
    const blogs = await Blog_1.default.find().sort({ createdAt: -1 });
    res.json(blogs);
};
exports.getBlogs = getBlogs;
const createBlog = async (req, res) => {
    try {
        const blogData = { ...req.body };
        // Parse SEO JSON
        if (req.body.seo) {
            blogData.seo = JSON.parse(req.body.seo);
        }
        // ✅ Generate Canonical Link Automatically
        if (!blogData.seo) {
            blogData.seo = {};
        }
        blogData.seo.canonicalLink = `https://adaired.com/blog/${blogData.slug}`;
        // Cloudinary image
        if (req.file) {
            blogData.image = {
                url: req.file.path,
                public_id: req.file.filename || req.file.originalname,
            };
        }
        const blog = await Blog_1.default.create(blogData);
        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            data: blog,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.createBlog = createBlog;
const updateBlog = async (req, res) => {
    var _a;
    try {
        const { id } = req.params;
        const existingBlog = await Blog_1.default.findById(id);
        if (!existingBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }
        const updateData = {};
        /* =========================
           Normal Fields (Safe Update)
        ========================== */
        if (req.body.postTitle)
            updateData.postTitle = req.body.postTitle;
        if (req.body.slug)
            updateData.slug = req.body.slug;
        if (req.body.category)
            updateData.category = req.body.category;
        if (req.body.postDescription)
            updateData.postDescription = req.body.postDescription;
        /* =========================
           SEO Parsing
        ========================== */
        if (req.body.seo) {
            const parsedSEO = JSON.parse(req.body.seo);
            updateData.seo = {
                ...existingBlog.seo,
                ...parsedSEO,
            };
        }
        else {
            updateData.seo = existingBlog.seo;
        }
        /* =========================
           Canonical Auto Update
        ========================== */
        const finalSlug = updateData.slug || existingBlog.slug;
        updateData.seo.canonicalLink =
            `https://adaired.com/blog/${finalSlug}`;
        /* =========================
           Image Handling (IMPORTANT FIX)
        ========================== */
        if (req.file) {
            // delete old image
            if ((_a = existingBlog.image) === null || _a === void 0 ? void 0 : _a.public_id) {
                await cloudinary_1.default.uploader.destroy(existingBlog.image.public_id);
            }
            updateData.image = {
                url: req.file.path,
                public_id: req.file.filename || req.file.originalname,
            };
        }
        else {
            // ✅ keep old image
            updateData.image = existingBlog.image;
        }
        const updatedBlog = await Blog_1.default.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            data: updatedBlog,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.updateBlog = updateBlog;
const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        // ✅ Check valid Mongo ID
        // if (!mongoose.Types.ObjectId.isValid(id)) {
        //   return res.status(400).json({
        //     success: false,
        //     message: "Invalid blog ID",
        //   });
        // }
        const blog = await Blog_1.default.findById(id);
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }
        return res.status(200).json({
            success: true,
            data: blog,
        });
    }
    catch (error) {
        console.error("Get Blog By ID Error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};
exports.getBlogById = getBlogById;
const deleteBlog = async (req, res) => {
    var _a;
    try {
        const { id } = req.params;
        if (Array.isArray(id) || !mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid blog ID",
            });
        }
        const deletedBlog = await Blog_1.default.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }
        // Delete Cloudinary image after DB delete
        if ((_a = deletedBlog.image) === null || _a === void 0 ? void 0 : _a.public_id) {
            await cloudinary_1.default.uploader.destroy(deletedBlog.image.public_id);
        }
        return res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.deleteBlog = deleteBlog;
