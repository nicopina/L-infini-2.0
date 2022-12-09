import { Router } from "express";

import {
    getOrderItems,
    getOrderItem,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem,
    getOrderItemsByOrderId,
    getOrderItemsTopBestN,
    getOrderItemsTopWorstN,
    getOrderItemsTopBestNByDate,
    getProfitToday,
    getProfitEntireMonth,
    getProfitByOneDate,
    getProfitByDateRange,
    getItemsSoldByHour,
    getProfitByAllDates,
    
} from "../controllers/orderItems.controller.js";

const router = Router();

router.get("/orderItems", getOrderItems);
router.get("/orderItems/:id", getOrderItem);
router.post("/orderItems", createOrderItem);
router.put("/orderItems/:id", updateOrderItem);
router.delete("/orderItems/:id", deleteOrderItem);
router.get("/orderItemsByID/:id", getOrderItemsByOrderId);
router.get("/orderItems/top/:n", getOrderItemsTopBestN);
router.get("/orderItems/topWorst/:n", getOrderItemsTopWorstN);
router.get("/orderItems/top/:start_date/:end_date/:n", getOrderItemsTopBestNByDate);
router.get("/orderItems/profit/today", getProfitToday);
router.get("/orderItems/profit/actual_month",getProfitEntireMonth);
router.get("/orderItems/profit/:date",getProfitByOneDate);
router.get("/orderItems/profit/:start_date/:end_date",getProfitByDateRange);
router.get("/orderItems-quantity-hour",getItemsSoldByHour);
router.get("/orderItems-profit-all-dates",getProfitByAllDates);




export default router;