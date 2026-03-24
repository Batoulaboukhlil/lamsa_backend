import express from "express";
import * as controller from "../controllers/contactController";

const router = express.Router();

router.post("/", controller.createContact);
router.get("/", controller.getContacts);
router.get("/:id", controller.getContact);
router.delete("/:id", controller.createContact);

export default router;