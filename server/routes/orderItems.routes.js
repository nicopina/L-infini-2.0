import { Router } from "express";

import {
    getOrderItems,
    getOrderItem,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem,
    getOrderItemsByOrderId,
} from "../controllers/orderItems.controller.js";

const router = Router();

router.get("/orderItems", getOrderItems);
router.get("/orderItems/:id", getOrderItem);
router.post("/orderItems", createOrderItem);
router.put("/orderItems/:id", updateOrderItem);
router.delete("/orderItems/:id", deleteOrderItem);
router.get("/orderItems/order/:id", getOrderItemsByOrderId);

export default router;