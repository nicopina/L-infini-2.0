import {createPool} from 'mysql2';

export const pool = createPool({
    host: 'l-infini.ckulsuaxql1r.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'hola1320',
    database: 'infini',
    port: 3306,
});

export const promisePool = pool.promise();

