import express from "express";
import * as controller from "../controllers/serviceController";

const router = express.Router();

router.get("/", controller.getServices);
router.get("/:id", controller.getServiceById);
router.post("/", controller.createService);
router.put("/:id", controller.updateService);
router.delete("/:id", controller.deleteService);

export default router;