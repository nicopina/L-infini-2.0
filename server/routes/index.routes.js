import { Router } from "express";
import { useInRouterContext } from "react-router-dom";
import { pool } from '../db.js';

const router = Router();

router.get('/ping', async (req, res) => {
    const [rows] = await pool.query('SELECT 1 + 1 AS solution');
    console.log(rows);
    res.json('pong');
});


export default router;