import { z } from "zod";
import { COMMON_MESSAGES, ENQUIRY_MESSAGES } from "../constants/messages";

/* ===================== SERVICE ===================== */
export const serviceSchema = z.object({
  id: z
    .string()
    .min(1, COMMON_MESSAGES.REQUIRED("Service ID"))
    .regex(/^[0-9a-fA-F]{24}$/, ENQUIRY_MESSAGES.OBJECT_ID_INVALID),
});

/* ===================== ADDITION DETAILS ===================== */
export const additionalDetailsSchema = z.object({
  budget: z.string().min(1, COMMON_MESSAGES.REQUIRED("Budget")),
  source: z.string().min(1, COMMON_MESSAGES.REQUIRED("Source")),
  startFrom: z.string().min(1, COMMON_MESSAGES.REQUIRED("Start date")),
  attachments: z.string().optional(),
});

/* ===================== MAIN ===================== */
export const enquirySchema = z.object({
  name: z.string().min(2, ENQUIRY_MESSAGES.NAME_MIN),

  email: z.string().email(ENQUIRY_MESSAGES.EMAIL_INVALID),

  phone: z.string().regex(/^[0-9]{10}$/, ENQUIRY_MESSAGES.PHONE_INVALID),

  website: z.string().url(ENQUIRY_MESSAGES.WEBSITE_INVALID),

  services: z.array(serviceSchema).min(1, ENQUIRY_MESSAGES.SERVICES_REQUIRED),

  description: z.string().min(10, ENQUIRY_MESSAGES.DESCRIPTION_MIN),

  additionDetails: additionalDetailsSchema,

  termsAndCondition: z.boolean().refine((val) => val === true, {
    message: ENQUIRY_MESSAGES.TERMS_REQUIRED,
  }),
});
