import express from "express";
import * as controller from "../controllers/companyController";

const router = express.Router();

router.get("/", controller.getCompanyInfo);
router.put("/", controller.updateCompanyInfo);
router.delete("/", controller.deleteCompanyInfo);

export default router;