const mysql = require('mysql');
require('dotenv').config({ path: '.env' });

const conectarDB = async () => {

    try {

        await mysql.createConnection(process.env, {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT,
            database: process.env.DB_DATABASE
        })
        console.log('BD Conectada');
        
    } catch (error) {
        console.log(error);
        process.exit(1); 
    }

}

module.exports = conectarDB