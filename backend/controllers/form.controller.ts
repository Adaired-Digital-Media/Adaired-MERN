import { Request, Response } from "express";
import FormModel from "../models/form.model";
import { Types } from "mongoose";

export interface AuthRequest extends Request {
  user?: {
    _id: Types.ObjectId;
  };
}

// CREATE FORM
export const createForm = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const form = new FormModel({
      ...req.body,
      createdBy: req.user?._id,
    });

    const savedForm = await form.save();

    res.status(201).json({
      success: true,
      message: "Form created successfully",
      data: savedForm,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create form",
      error: error.message,
    });
  }
};

// GET ALL FORMS
export const getAllForms = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { status } = req.query;

    const filter: any = {};
    if (status) filter.status = status;

    const forms = await FormModel.find(filter)
    //   .populate("fields.field")
    //   .populate("createdBy updatedBy")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: forms,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch forms",
      error: error.message,
    });
  }
};

// GET FORM BY ID
export const getFormById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;

    const form = await FormModel.findById(id)
    //   .populate("fields.field")
      .populate("createdBy updatedBy");

    if (!form) {
      res.status(404).json({
        success: false,
        message: "Form not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: form,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch form",
      error: error.message,
    });
  }
};

// UPDATE FORM
export const updateForm = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;

    const updatedForm = await FormModel.findByIdAndUpdate(
      id,
      {
        ...req.body,
        updatedBy: req.user?._id,
      },
      { new: true, runValidators: true },
    );

    if (!updatedForm) {
      res.status(404).json({
        success: false,
        message: "Form not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Form updated successfully",
      data: updatedForm,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update form",
      error: error.message,
    });
  }
};

// DELETE FORM
export const deleteForm = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedForm = await FormModel.findByIdAndDelete(id);

    if (!deletedForm) {
      res.status(404).json({
        success: false,
        message: "Form not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Form deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete form",
      error: error.message,
    });
  }
};
