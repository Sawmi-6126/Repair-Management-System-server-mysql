import express from "express";
import {
  getParts,
  getPartsbyId,
  createParts,
  updateParts,
  deleteParts,
} from "../controllers/PartsController.js";

const router = express.Router();

router.get("/parts", getParts);
router.get("/parts/:id", getPartsbyId);
router.post("/parts", createParts);
router.patch("/parts/:id", updateParts);
router.delete("/parts/:id", deleteParts);

export default router;
