import express from "express";
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
} from "../controllers/case-study.controller";
const router = express.Router();

// Get All Case Studies
// GET /api/case-studies
router.get("/", getAllCaseStudies);

// Get Single Case Study By Slug
// GET /api/case-studies/:slug
router.get("/:slug", getCaseStudyBySlug);

export default router;
