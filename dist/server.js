"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./backend/config/db");
const blogRoutes_1 = __importDefault(require("./backend/routes/blogRoutes"));
const blogCategory_routes_1 = __importDefault(require("./backend/routes/blogCategory.routes"));
const auth_routes_1 = __importDefault(require("./backend/routes/auth.routes"));
dotenv_1.default.config();
const dev = process.env.NODE_ENV !== "production";
const app = (0, next_1.default)({ dev });
const handle = app.getRequestHandler();
app.prepare().then(async () => {
    const server = (0, express_1.default)();
    await (0, db_1.connectDB)();
    server.use(express_1.default.json());
    // Backend API
    server.use("/api/auth", auth_routes_1.default);
    server.use("/api/blog", blogRoutes_1.default);
    server.use("/api/blog-category", blogCategory_routes_1.default);
    // Next.js handles frontend
    server.use((req, res) => {
        return handle(req, res);
    });
    server.listen(process.env.PORT, () => {
        console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
});
