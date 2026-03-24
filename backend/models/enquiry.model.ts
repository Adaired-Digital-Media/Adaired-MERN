import mongoose, { Schema } from "mongoose";
import { IEnquiry, IService } from "../../@core/types/enquiry.types";

/* ===================== SERVICE SCHEMA ===================== */
const serviceSchema = new Schema<IService>({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
});

/* ===================== ENQUIRY SCHEMA ===================== */
const enquirySchema = new Schema<IEnquiry>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  website: { type: String, required: true },

  // Array of services
  services: { type: [serviceSchema], required: true },

  description: { type: String, required: true },

  additionDetails: {
    budget: { type: Number, required: true },
    source: { type: String, required: true },
    startFrom: { type: String, required: true },
    attachments: { type: String, required: true },
  },

  termsAndCondition: { type: String, required: true },
});

/* ===================== MODEL ===================== */
export default mongoose.model<IEnquiry>("Enquiry", enquirySchema);
