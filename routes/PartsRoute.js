import express from "express";
import {
  getParts,
  getPartsbyId,
  createParts,
  updateParts,
  deleteParts,
  searchPart,
} from "../controllers/PartsController.js";

const router = express.Router();

router.get("/parts", getParts);
router.get("/parts/:id", getPartsbyId);
router.post("/parts", createParts);
router.patch("/parts/:id", updateParts);
router.delete("/parts/:id", deleteParts);
router.get("/searchpart", searchPart);

export default router;
