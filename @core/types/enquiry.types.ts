import { Document, Types } from "mongoose";

/* ===================== SERVICE TYPE ===================== */
export interface IService {
  id: Types.ObjectId;
}

/* ===================== ADDITION DETAILS ===================== */
export interface IAdditionalDetails {
  budget: string;
  source: string;
  startFrom: string;
  attachments: string;
}

/* ===================== ENQUIRY TYPE ===================== */
export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone: string;
  website: string;
  services: IService[];
  description: string;
  additionDetails: IAdditionalDetails;
  termsAndCondition?: boolean;
}
