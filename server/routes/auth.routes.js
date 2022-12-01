import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";

const router = Router();

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);
router.get('/users-by-token/:token', authController.getUserByToken);

export default router;
