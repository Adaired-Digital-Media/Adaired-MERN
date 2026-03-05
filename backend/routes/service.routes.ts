import express from "express";
import {
  getAllServices,
  getServiceBySlug,
} from "../controllers/service.controller";

const router = express.Router();

// Get All Services
// GET /api/services
router.get("/", getAllServices);

// Get Single Service By Slug
// GET /api/services/:slug
router.get("/:slug", getServiceBySlug);

export default router;
