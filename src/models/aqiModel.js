const mysql = require('mysql2/promise');
require('dotenv').config();

// Create a MySQL pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

exports.getAqi = async (city, province) => {
    const [rows] = await pool.query(`SELECT * FROM aqi WHERE city = ? AND province = ?`, [city, province]);
    return rows[0];
};

exports.saveAqi = async (aqi) => {
    await pool.query(`INSERT INTO aqi SET ?`, aqi);
};
