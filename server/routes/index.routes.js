import { Router } from "express";
import { useInRouterContext } from "react-router-dom";
import { pool } from '../db.js';

const router = Router();

router.get('/ping', async (req, res) => {
    const [rows] = await pool.query('SELECT 1 + 1 AS solution');
    res.json('pong');
});

router.get('/' , (req,res) => {
    res.json({
        author: 'Ad Infinitum',
        description: 'API for the project',
        version: '1.0.0'
    });
});


export default router;