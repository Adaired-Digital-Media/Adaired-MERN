import { Request, Response } from "express";
import BlogCategory from "../models/blogCategory.model";

/* ============================
   Generate Slug
============================ */
const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-");
};

/* ============================
   CREATE CATEGORY
============================ */
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const slug = generateSlug(name);

    // Prevent duplicate
    const existing = await BlogCategory.findOne({ slug });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Category already exists",
      });
    }

    const category = await BlogCategory.create({
      name,
      slug,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ============================
   READ ALL CATEGORY
============================ */
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await BlogCategory.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ============================
   UPDATE CATEGORY
============================ */
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, status } = req.body;

    const slug = generateSlug(name);

    const category = await BlogCategory.findByIdAndUpdate(
      id,
      { name, slug, description, status },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ============================
   DELETE CATEGORY
============================ */
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await BlogCategory.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};