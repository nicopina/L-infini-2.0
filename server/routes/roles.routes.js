import { Router } from "express";
import { authJwt } from "../middleware/index.js";

import {
    getRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole,
} from "../controllers/roles.controller.js";

const router = Router();

router.get("/roles", getRoles);
router.get("/roles/:id", getRole);
router.post("/roles",[authJwt.verifyToken,authJwt.isAdmin], createRole);
router.put("/roles/:id",[authJwt.verifyToken,authJwt.isAdmin], updateRole);
router.delete("/roles/:id",[authJwt.verifyToken,authJwt.isAdmin], deleteRole);

export default router;