import express from 'express';
import {PORT} from './config.js';
import cors from 'cors';

import indexRoutes from './routes/index.routes.js';
import tablesRoutes from './routes/tables.routes.js';
import dishesRoutes from './routes/dishes.routes.js';
import ordersRoutes from './routes/orders.routes.js';
import requestsRoutes from './routes/requests.routes.js';
import orderSummariesRoutes from './routes/orderSummaries.routes.js';
import usersRoutes from './routes/users.routes.js';
import rolesRoutes from './routes/roles.routes.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use(cors());
app.use(indexRoutes);   
app.use(tablesRoutes);
app.use(dishesRoutes);
app.use(ordersRoutes);
app.use(requestsRoutes);
app.use(orderSummariesRoutes);
app.use(usersRoutes);
app.use(rolesRoutes);

app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
});
