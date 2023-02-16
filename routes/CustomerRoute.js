import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomerbyId,
  updateCustomer,
  searchCustomer,
} from "../controllers/CustomerController.js";

const router = express.Router();

router.get("/customer", getCustomer);
router.get("/customer/:id", getCustomerbyId);
router.post("/customer", createCustomer);
router.patch("/customer/:id", updateCustomer);
router.delete("/customer/:id", deleteCustomer);
router.get("/search", searchCustomer);

export default router;
