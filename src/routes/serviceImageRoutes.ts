import express from "express";
import * as controller from "../controllers/serviceImageController";

const router = express.Router();

router.get("/", controller.getServiceImages);
router.get("/:id", controller.getServiceImage);
router.post("/", controller.createServiceImage);
router.delete("/:id", controller.deleteServiceImage);
export default router;
