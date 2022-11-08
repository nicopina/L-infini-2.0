import { Router } from "express";
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrdersByOrderSummaryId,
} from "../controllers/orders.controller.js";

const router = Router();

router.get("/orders", getOrders);
router.get("/orders/:id", getOrder);
router.post("/orders", createOrder);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);
router.get("/orders/orderSummary/:id", getOrdersByOrderSummaryId);

export default router;
