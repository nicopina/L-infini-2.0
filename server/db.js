import {createPool} from 'mysql2';

// export const pool = createPool({
//     host: 'l-infini.ckulsuaxql1r.us-east-1.rds.amazonaws.com',
//     user: 'admin',
//     password: 'hola1320',
//     database: 'infini',
//     port: 3306,
// });

export const pool = createPool({
    host: 'aws-sa-east-1.connect.psdb.cloud',
    user: 'eszp9l5pj3lqpqd3tsfk',
    password: 'pscale_pw_jwiJCpP1WB56qgAhSSwQo149z3GxfO67pszvazThn0z',
    database: 'linfini',
    ssl: {
        rejectUnauthorized: false
    }
});

export const promisePool = pool.promise();

