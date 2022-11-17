import { Router } from "express";
import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:rut", getUser);
router.post("/users", createUser);
router.put("/users/:rut", updateUser);
router.delete("/users/:rut", deleteUser);

export default router;