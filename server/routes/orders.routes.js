import { Router } from "express";
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getActiveOrders,
  getIfAllItemsAreOk,
  getLastOrderId,
  getActiveOrderByTableId,
  getCountOrdersToday,
  getCountOrdersMonth,
  getCountOrdersOneFullDate,
} from "../controllers/orders.controller.js";

const router = Router();

router.get("/orders", getOrders);
router.get("/orders/:id", getOrder);
router.post("/orders", createOrder);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);
router.get("/active-orders", getActiveOrders);
router.get("/items-ok/:id", getIfAllItemsAreOk);
router.get("/last-order-id", getLastOrderId);
router.get("/active-orders/:id", getActiveOrderByTableId);
router.get("/orders/count/today", getCountOrdersToday);
router.get("/orders/count/actual_month", getCountOrdersMonth);
router.get("/orders/count/:date", getCountOrdersOneFullDate);


export default router;
