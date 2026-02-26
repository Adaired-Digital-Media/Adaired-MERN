import { Request, Response } from "express";
import Blog from "../models/Blog";
import cloudinary from "../config/cloudinary";
import mongoose from "mongoose";

export const getBlogs = async (req: Request, res: Response) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

export const createBlog = async (req: Request, res: Response) => {
  try {
    const blogData: any = { ...req.body };

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

    const blog = await Blog.create(blogData);

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const existingBlog = await Blog.findById(id);
    if (!existingBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    const updateData: any = {};

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
    } else {
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
      if (existingBlog.image?.public_id) {
        await cloudinary.uploader.destroy(existingBlog.image.public_id);
      }

      updateData.image = {
        url: req.file.path,
        public_id: req.file.filename || req.file.originalname,
      };
    } else {
      // ✅ keep old image
      updateData.image = existingBlog.image;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: updatedBlog,
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // ✅ Check valid Mongo ID
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Invalid blog ID",
    //   });
    // }

    const blog = await Blog.findById(id);

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
  } catch (error) {
    console.error("Get Blog By ID Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (Array.isArray(id) || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID",
      });
    }

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // Delete Cloudinary image after DB delete
    if (deletedBlog.image?.public_id) {
      await cloudinary.uploader.destroy(deletedBlog.image.public_id);
    }

    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};