/* ===================== COMMON ===================== */
export const COMMON_MESSAGES = {
  REQUIRED: (field: string) => `${field} is required`,
  INVALID: (field: string) => `Invalid ${field}`,
};

/* ===================== ENQUIRY ===================== */
export const ENQUIRY_MESSAGES = {
  NAME_MIN: "Name must be at least 2 characters",
  EMAIL_INVALID: "Invalid email address",
  PHONE_INVALID: "Phone must be 10 digits",
  WEBSITE_INVALID: "Invalid website URL",
  DESCRIPTION_MIN: "Description must be at least 10 characters",
  SERVICES_REQUIRED: "At least one service is required",
  TERMS_REQUIRED: "You must accept terms and conditions",
  OBJECT_ID_INVALID: "Invalid ObjectId",
};
