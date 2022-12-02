import { Router } from "express";
import { authJwt } from "../middleware/index.js";
import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getRole,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/users",[authJwt.verifyToken], getUsers);
router.get("/users/:rut", getUser);
router.post("/users" ,[authJwt.verifyToken,authJwt.isAdmin], createUser);
router.put("/users/:rut",[authJwt.verifyToken,authJwt.isAdmin], updateUser);
router.delete("/users/:rut",[authJwt.verifyToken,authJwt.isAdmin], deleteUser);
router.get("/users/role/:rut", getRole);

export default router;