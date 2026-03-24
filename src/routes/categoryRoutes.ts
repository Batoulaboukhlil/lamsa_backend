import express from "express";
import * as controller from "../controllers/categoryController";

const router = express.Router();

router.get("/", controller.getCategories);
router.get("/:id", controller.getCategories);
router.post("/", controller.createCategory);
router.delete("/:id", controller.deleteCategory);
export default router;