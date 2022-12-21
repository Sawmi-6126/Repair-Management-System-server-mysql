import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomerbyId,
  updateCustomer,
} from "../controllers/CustomerController.js";

const router = express.Router();

router.get("/customer", getCustomer);
router.get("/customer/:id", getCustomerbyId);
router.post("/customer", createCustomer);
router.put("/customer/:id", updateCustomer);
router.delete("/customer/:id", deleteCustomer);

export default router;
