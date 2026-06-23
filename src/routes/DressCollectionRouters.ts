import express from "express";
import * as controller from "../controllers/DressCollectionController";

const router = express.Router();

router.get("/", controller.getDressCollections);
router.get("/:id", controller.getDressCollection);
router.post("/", controller.createDressCollection);
router.delete("/:id", controller.deleteDressCollection);
export default router;