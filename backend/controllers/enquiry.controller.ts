import { Request, Response } from "express";
import EnquiryModel from "../models/enquiry.model";

export const sendEnquiry = async (req: Request, res: Response) => {
  try {
    const enquiry = await EnquiryModel.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: enquiry,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
