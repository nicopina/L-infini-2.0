import { Router } from "express";

import {
  getTables,
  getTable,
  createTable,
  updateTable,
  deleteTable,
} from "../controllers/tables.controller.js";

const router = Router();

router.get("/tables", getTables);
router.get("/tables/:id", getTable);
router.post("/tables", createTable);
router.put("/tables/:id", updateTable);
router.delete("/tables/:id", deleteTable);

export default router;
