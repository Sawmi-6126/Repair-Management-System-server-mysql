import express from "express";
import {
  createRepair,
  getRepair,
  getRepairbyId,
  updateRepair,
  deleteRepair,
} from "../controllers/RepairController.js";

const router = express.Router();

router.get("/repair", getRepair);
router.get("/repair/:id", getRepairbyId);
router.post("/repair", createRepair);
router.patch("/repair/:id", updateRepair);
router.delete("/repair/:id", deleteRepair);

export default router;
