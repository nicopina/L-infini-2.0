import { Router } from "express";

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
router.post("/roles", createRole);
router.put("/roles/:id", updateRole);
router.delete("/roles/:id", deleteRole);

export default router;