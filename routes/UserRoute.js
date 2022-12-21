import express from "express";
import {
  createUser,
  getUser,
  getUserbyId,
} from "../controllers/CustomerController.js";

const router = express.Router();

router.get("/user", getUser);
router.get("/user/:id", getUserbyId);
router.post("/user", createUser);

export default router;
