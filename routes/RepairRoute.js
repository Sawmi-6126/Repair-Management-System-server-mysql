import express from "express";
import {
  createRepair,
  getRepair,
  getRepairbyId,
  updateRepair,
  deleteRepair,
  countPending,
  searchJobId,
  countCompleted,
  countOngoing,
} from "../controllers/RepairController.js";

const router = express.Router();

router.get("/repair", getRepair);
router.get("/repair/:id", getRepairbyId);
router.post("/repair", createRepair);
router.patch("/repair/:id", updateRepair);
router.delete("/repair/:id", deleteRepair);
router.get("/count/pending", countPending);
router.get("/count/completed", countCompleted);
router.get("/count/ongoing", countOngoing);
router.get("/search/jobid", searchJobId);

export default router;
