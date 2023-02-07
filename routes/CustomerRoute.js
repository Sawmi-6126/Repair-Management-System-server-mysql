import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomerbyId,
  updateCustomer,
  getCustomerbyMobile,
} from "../controllers/CustomerController.js";

const router = express.Router();

router.get("/customer", getCustomer);
router.get("/customer/:id", getCustomerbyId);
router.post("/customer", createCustomer);
router.patch("/customer/:id", updateCustomer);
router.delete("/customer/:id", deleteCustomer);
router.get("/customer/:mobile", getCustomerbyMobile);

export default router;
