import { Router } from "express";
import {
  getDishes,
  getDish,
  createDish,
  updateDish,
  deleteDish,
} from "../controllers/dishes.controller.js";

const router = Router();

router.get("/dishes", getDishes);
router.get("/dishes/:id", getDish);
router.post("/dishes", createDish);
router.put("/dishes/:id", updateDish);
router.delete("/dishes/:id", deleteDish);

export default router;
