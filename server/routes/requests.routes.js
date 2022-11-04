import { Router } from "express";
import {
  getRequests,
  getRequest,
  createRequest,
  updateRequest,
  deleteRequest,
} from "../controllers/requests.controllers.js";

const router = Router();

router.get("/requests", getRequests);
router.get("/requests/:id", getRequest);
router.post("/requests", createRequest);
router.put("/requests/:id", updateRequest);
router.delete("/requests/:id", deleteRequest);

export default router;
