"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogCategory_controller_1 = require("../controllers/blogCategory.controller");
const router = express_1.default.Router();
router.post("/create", blogCategory_controller_1.createCategory);
router.get("/read", blogCategory_controller_1.getAllCategories);
router.put("/update/:id", blogCategory_controller_1.updateCategory);
router.delete("/delete/:id", blogCategory_controller_1.deleteCategory);
exports.default = router;
