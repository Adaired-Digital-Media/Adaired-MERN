import express from "express";
import {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/blogCategory.controller";

const router = express.Router();

router.post("/create", createCategory);
router.get("/read", getAllCategories);
router.put("/update/:id", updateCategory);
router.delete("/delete/:id", deleteCategory);

export default router;