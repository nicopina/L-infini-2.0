import { Router } from "express";
import {
  getDishes,
  getDish,
  createDish,
  updateDish,
  deleteDish,
} from "../controllers/dishes.controller.js";
import { authJwt } from "../middleware/index.js";

const router = Router();

router.get("/dishes", getDishes);
router.get("/dishes/:id", getDish);
router.post("/dishes", [authJwt.verifyToken, authJwt.isAdmin], createDish);
router.put("/dishes/:id", authJwt.verifyToken, updateDish);
router.delete("/dishes/:id",[authJwt.verifyToken, authJwt.isAdmin], deleteDish);

export default router;
