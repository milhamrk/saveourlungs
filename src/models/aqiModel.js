const db = require('../db');


// TODO: Revamp
exports.getAqi = async (city, province) => {
    const [rows] = await pool.query(`SELECT * FROM aqi WHERE city = ? AND province = ?`, [city, province]);
    return rows[0];
};

exports.saveAqi = async (aqi) => {
    await pool.query(`INSERT INTO aqi SET ?`, aqi);
};
