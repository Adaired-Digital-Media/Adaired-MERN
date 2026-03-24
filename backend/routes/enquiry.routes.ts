import { Router } from "express";
import { sendEnquiry } from "../controllers/enquiry.controller";
import { validate } from "../middleware/validate.ts";
import { enquirySchema } from "../../@core//validations/enquiry.validation"

const router = Router();

/* ===================== ROUTES ===================== */
router.post("/send", validate(enquirySchema), sendEnquiry);

export default router;
