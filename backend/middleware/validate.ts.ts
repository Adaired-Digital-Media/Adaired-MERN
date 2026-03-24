import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body); // ✅ validate + sanitize
      next();
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        errors: error.errors.map((err: any) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      });
    }
  };
