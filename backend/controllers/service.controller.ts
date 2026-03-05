import { Request, Response } from "express";
import Service from "../models/service.model";

/**
 * @desc   Get All Services
 * @route  GET /api/services
 */
export const getAllServices = async (req: Request, res: Response) => {
  try {
    const { status } = req.query;

    const filter: any = {};
    if (status) {
      filter.status = status;
    }

    const services = await Service.find(filter)
      .populate("parentService", "serviceName slug")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch services",
      error: error.message,
    });
  }
};

/**
 * @desc   Get Single Service By Slug
 * @route  GET /api/services/:slug
 */
export const getServiceBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const service = await Service.findOne({
      slug,
      status: "publish", // remove this if you want draft access
    }).populate("parentService", "serviceName slug");

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: service,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch service",
      error: error.message,
    });
  }
};
