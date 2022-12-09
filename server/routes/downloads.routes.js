import {Router} from 'express';

import { getOrdersProfit, getOrderItems } from '../controllers/downloads.controller.js';


const router = Router();

router.get('/downloads/orders-profit', getOrdersProfit);
router.get('/downloads/order-items', getOrderItems);

export default router;