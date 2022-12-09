import { Router } from "express";
import {
  getDishCategories,
  getDishCategory,
  createDishCategories,
  updateDishCategories,
  deleteDishCategories,
  getDishCategoriesProfit
} from "../controllers/dishCategories.controller.js";
import { authJwt } from "../middleware/index.js";

const router = Router();

router.get("/dishesCategory", getDishCategories);
router.get("/dishesCategory/:id", getDishCategory);
router.post("/dishesCategory", [authJwt.verifyToken, authJwt.isAdmin], createDishCategories);
router.put("/dishesCategory/:id", authJwt.verifyToken, updateDishCategories);
router.delete("/dishesCategory/:id",[authJwt.verifyToken, authJwt.isAdmin], deleteDishCategories);
router.get("/dishesCategory-profit", getDishCategoriesProfit);


export default router;
