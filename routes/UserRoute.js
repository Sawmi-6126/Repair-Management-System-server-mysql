import express from "express";
import { login, createUser } from "../controllers/UserController.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/", login);

export default router;
