import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    postTitle: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    postDescription: { type: String },

    image: {
      url: String,
      public_id: String,
    },

    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: String,
      canonicalLink: String,
      focusKeyword: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);