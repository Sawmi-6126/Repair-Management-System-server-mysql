import express from "express";
import {
  getTechnician,
  getTechnicianbyId,
  createTechnician,
  updateTechnician,
  deleteTechnician,
  countTechnician,
} from "../controllers/TechnicianController.js";

const router = express.Router();

router.get("/technician", getTechnician);
router.get("/technician/:id", getTechnicianbyId);
router.post("/technician", createTechnician);
router.patch("/technician/:id", updateTechnician);
router.delete("/technician/:id", deleteTechnician);
router.get("/count/technician", countTechnician);

export default router;
