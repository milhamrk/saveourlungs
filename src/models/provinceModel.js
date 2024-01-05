const db = require('../db');

const userModel = {
    async insertProvinvce(provinceName, provinceCode) {
        const queryText = 'INSERT INTO city (province_name, province_code) VALUES ($1, $2) RETURNING id';
        const values = [provinceName, provinceCode];
        const { rows } = await db.query(queryText, values);
        return rows[0].id;
    },

    async getAllProvince() {
        const queryText = 'SELECT * FROM province';
        const { rows } = await db.query(queryText);
        return rows;
    },

    async getProvinceByCode(provinceCode) {
        const queryText = 'SELECT * FROM province WHERE province_code = $1';
        const { rows } = await db.query(queryText, [provinceCode]);
        return rows[0];
    },
};

module.exports = userModel;
