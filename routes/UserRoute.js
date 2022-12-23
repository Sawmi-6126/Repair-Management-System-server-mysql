import express from "express";
import {
  getUser,
  getUserbyId,
  createUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.post("/signup ", createUser);
router.get("/user", getUser);
router.get("/user/:id", getUserbyId);

export default router;
