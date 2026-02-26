"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.getAllCategories = exports.createCategory = void 0;
const blogCategory_model_1 = __importDefault(require("../models/blogCategory.model"));
/* ============================
   Generate Slug
============================ */
const generateSlug = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, "-");
};
/* ============================
   CREATE CATEGORY
============================ */
const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const slug = generateSlug(name);
        // Prevent duplicate
        const existing = await blogCategory_model_1.default.findOne({ slug });
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Category already exists",
            });
        }
        const category = await blogCategory_model_1.default.create({
            name,
            slug,
            description,
        });
        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: category,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.createCategory = createCategory;
/* ============================
   READ ALL CATEGORY
============================ */
const getAllCategories = async (req, res) => {
    try {
        const categories = await blogCategory_model_1.default.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            data: categories,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.getAllCategories = getAllCategories;
/* ============================
   UPDATE CATEGORY
============================ */
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, status } = req.body;
        const slug = generateSlug(name);
        const category = await blogCategory_model_1.default.findByIdAndUpdate(id, { name, slug, description, status }, { new: true });
        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            data: category,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.updateCategory = updateCategory;
/* ============================
   DELETE CATEGORY
============================ */
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await blogCategory_model_1.default.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Category deleted successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.deleteCategory = deleteCategory;
