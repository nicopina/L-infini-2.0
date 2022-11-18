import {createPool} from 'mysql2';

export const pool = createPool({
    host: 'baq8qzviobhep4fc4pao-mysql.services.clever-cloud.com',
    user: 'u2kaqvibciy2bnpl',
    password: 'i5vt6x9oXJS73IW7tOY4',
    database: 'baq8qzviobhep4fc4pao',
    port: 3306,
});

export const promisePool = pool.promise();

