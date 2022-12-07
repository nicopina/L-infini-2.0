import {Router} from 'express';

import { getOrdersProfit } from '../controllers/downloads.controller.js';

const router = Router();

router.get('/downloads/orders-profit', getOrdersProfit);

export default router;