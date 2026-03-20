import express from "express";
import {
  getAllForms,
  createForm,
  getFormById,
  updateForm,
  deleteForm,
} from "../controllers/form.controller";

const router = express.Router();

router.post("/", createForm);

router.get("/", getAllForms);

router.get("/:id", getFormById);

router.put("/:id", updateForm);

router.delete("/:id", deleteForm);

export default router;
