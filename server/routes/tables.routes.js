import { Router } from "express";
import { authJwt } from "../middleware/index.js";

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
router.post("/tables",[authJwt.verifyToken,authJwt.isAdmin], createTable);
router.put("/tables/:id",[authJwt.verifyToken,authJwt.isAdmin] ,updateTable);
router.delete("/tables/:id",[authJwt.verifyToken,authJwt.isAdmin], deleteTable);

export default router;
