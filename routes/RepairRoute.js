import express from "express";
import {
  createRepair,
  getRepair,
  getRepairbyId,
  updateRepair,
} from "../controllers/RepairController.js";

const router = express.Router();

router.get("/repair", getRepair);
router.get("/repair/:id", getRepairbyId);
router.post("repair", createRepair);
router.post("repair/:id", updateRepair);

export default router;
