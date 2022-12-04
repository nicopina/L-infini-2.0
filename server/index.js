import express from 'express';
import * as dotenv from 'dotenv';
import {PORT} from './config.js';
import cors from 'cors';

import indexRoutes from './routes/index.routes.js';
import orderItemsRoutes from './routes/orderItems.routes.js';
import ordersRoutes from './routes/orders.routes.js';
import usersRoutes from './routes/users.routes.js';
import dishesRoutes from './routes/dishes.routes.js';
import tablesRoutes from './routes/tables.routes.js';
import requestsRoutes from './routes/requests.routes.js';
import rolesRoutes from './routes/roles.routes.js';
import authRoutes from './routes/auth.routes.js';
import dishCategoriesRoutes from './routes/dishesCategories.routes.js';
import {createRoles} from './libs/initialSetup.js';

const app = express();
createRoles();

dotenv.config();

app.use(cors());

app.use(express.json());

app.use(cors());
app.use(indexRoutes);   
app.use(tablesRoutes);
app.use(dishesRoutes);
app.use(ordersRoutes);
app.use(requestsRoutes);
app.use(usersRoutes);
app.use(rolesRoutes);
app.use(orderItemsRoutes);
app.use(authRoutes);
app.use(dishCategoriesRoutes);

app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
});
