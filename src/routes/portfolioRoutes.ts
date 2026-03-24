import express from "express";
import * as controller from "../controllers/portfolioController";

const router = express.Router();

router.get("/", controller.getPortfolio);
router.post("/", controller.createPortfolio);

export default router;