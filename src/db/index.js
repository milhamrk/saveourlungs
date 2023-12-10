const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

console.log(process.env.DB_USER, process.env.DB_HOST, process.env.DB_NAME, process.env.DB_PORT);

const db = {
    init() {
        pool.connect()
        .then(() => console.log('Connected to PostgreSQL'))
        .catch(err => console.log(err));
    },

    async query(text, params) {
        return pool.query(text, params);
    },
};

module.exports = db;
