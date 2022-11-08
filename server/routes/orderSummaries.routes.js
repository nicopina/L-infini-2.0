import { Router } from "express";

import {
    getOrderSummaries,
    getOrderSummary,
    createOrderSummary,
    updateOrderSummary,
    deleteOrderSummary,
    getActiveOrderSummaries,
} from "../controllers/orderSummaries.controller.js";

const router = Router();

router.get("/orderSummaries", getOrderSummaries);
router.get("/orderSummaries/:id", getOrderSummary);
router.get("/active-orderSummaries/", getActiveOrderSummaries);
router.post("/orderSummaries", createOrderSummary);
router.put("/orderSummaries/:id", updateOrderSummary);
router.delete("/orderSummaries/:id", deleteOrderSummary);

export default router;