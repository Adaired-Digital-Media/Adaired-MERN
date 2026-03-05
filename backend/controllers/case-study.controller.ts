import { Request, Response } from "express";
import CaseStudyModel from "../models/case-study.model";

/**
 * @desc   Get All Case Studies
 * @route  GET /api/case-studies
 */
export const getAllCaseStudies = async (req: Request, res: Response) => {
  try {
    const { status } = req.query;

    const filter: any = {};
    if (status) {
      filter.status = status;
    }

    const caseStudies = await CaseStudyModel.find(filter)
      // .populate("category", "name slug")
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      count: caseStudies.length,
      data: caseStudies,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch case studies",
      error: error.message,
    });
  }
};

/**
 * @desc   Get Single Case Study By Slug
 * @route  GET /api/case-studies/:slug
 */
export const getCaseStudyBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const caseStudy = await CaseStudyModel.findOne({
      slug,
      status: "active", // remove if you want inactive access
    })
      // .populate("category", "name slug")
      .lean();

    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        message: "Case study not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: caseStudy,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch case study",
      error: error.message,
    });
  }
};
