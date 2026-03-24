import mongoose, { Schema } from "mongoose";
import { IServiceCategory } from "../../@core/types/serviceCategory.types";

const serviceCategorySchema = new Schema<IServiceCategory>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IServiceCategory>(
  "ServiceCategory",
  serviceCategorySchema,
);
