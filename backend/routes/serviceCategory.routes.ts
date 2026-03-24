import { Router } from "express";
import {
  createServiceCategory,
  getServiceCategories,
  getServiceCategoryById,
} from "../controllers/serviceCategory.controller";
import { validate } from "../middleware/validate.ts";
import { serviceCategorySchema } from "../../@core/validations/serviceCategory.validation";

const router = Router();

/* ===================== ROUTES ===================== */
router.post("/create", validate(serviceCategorySchema), createServiceCategory);
router.get("/", getServiceCategories);
router.get("/:id", getServiceCategoryById);

export default router;
