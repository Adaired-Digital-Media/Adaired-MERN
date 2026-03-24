import express from "express";
import next from "next";
import dotenv from "dotenv";
import { connectDB } from "./backend/config/db";
import serviceRoutes from "./backend/routes/service.routes";
import blogRoutes from "./backend/routes/blogRoutes";
import caseStudyRoutes from "./backend/routes/case-study.routes";
import blogCategoryRoutes from "./backend/routes/blogCategory.routes";
import authRoutes from "./backend/routes/auth.routes";
import mailRoutes from "./backend/routes/mail.routes";
import productRoutes from "./backend/routes/product.route";
import formRoutes from "./backend/routes/form.routes";
import enquiryRoutes from "./backend/routes/enquiry.routes";
import cors from "cors";
dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  await connectDB();

  /* ✅ CORS MUST BE BEFORE ROUTES */
  server.use(
    cors({
      origin: [
        "http://localhost:8000",
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "https://adaired-dem2.vercel.app/",
        "https://adaired.com/", // change this
      ],
      credentials: true,
    }),
  );

  server.use(express.json());

  // Backend API
  server.use("/api/auth", authRoutes);
  server.use("/api/service", serviceRoutes);
  server.use("/api/blog", blogRoutes);
  server.use("/api/case-study", caseStudyRoutes);
  server.use("/api/blog-category", blogCategoryRoutes);
  server.use("/api/products", productRoutes);
  server.use("/api/form", formRoutes);
  server.use("/api/enquiry", enquiryRoutes);
  server.use("/api/mail", mailRoutes);

  // Next.js handles frontend
  server.use((req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });
});
