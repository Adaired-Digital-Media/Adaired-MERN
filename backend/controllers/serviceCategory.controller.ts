import { Request, Response } from "express";
import ServiceCategory from "../models/serviceCategory.model";

/* ===================== CREATE ===================== */
export const createServiceCategory = async (req: Request, res: Response) => {
  try {
    const { name, slug } = req.body;

    // ✅ Check duplicate by slug (recommended)
    const existingCategory = await ServiceCategory.findOne({
      $or: [{ slug }, { name }],
    });

    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Service category already exists",
      });
    }

    const category = await ServiceCategory.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Service category created",
      data: category,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ===================== GET ALL ===================== */
export const getServiceCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await ServiceCategory.find().sort({ createdAt: -1 });

    return res.json({
      success: true,
      data: categories,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ===================== GET ONE ===================== */
export const getServiceCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await ServiceCategory.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    return res.json({
      success: true,
      data: category,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
