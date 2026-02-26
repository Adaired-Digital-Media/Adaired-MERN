"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const blogSchema = new mongoose_1.default.Schema({
    postTitle: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Category" },
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
}, { timestamps: true });
exports.default = mongoose_1.default.model("Blog", blogSchema);
