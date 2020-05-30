const mysql = require('mysql');
const Promise = require('bluebird');
const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'newuser',
    password: 'Pass@123', 
    database: 'newTest',
    port: 3306,
    dialect: 'mysql'
});

pool.getConnection((err, connection) => {
    return new Promise((resolve, reject) => {
        if (err) {
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                reject('Database connection was closed.');
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
                reject('Database has too many connections.');
            }
            if (err.code === 'ECONNREFUSED') {
                reject('Database connection was refused.');
            }
        }
        if (connection){
            console.log("connected")
            connection.release();
        }
        resolve();
    });
});

module.exports = pool