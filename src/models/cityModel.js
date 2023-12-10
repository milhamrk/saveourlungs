const db = require('../db');

const userModel = {
    async insertCity(provinceId, cityName, cityCode) {
        const queryText = 'INSERT INTO city (id_province, city_name, citycode) VALUES ($1, $2, $3) RETURNING id';
        const values = [provinceId, cityName, cityCode];
        const { rows } = await db.query(queryText, values);
        return rows[0].id;
    },

    async getAllCity() {
        const queryText = 'SELECT * FROM city';
        const { rows } = await db.query(queryText);
        return rows;
    },

    async getCityByProvinceId(provinceId) {
        const queryText = 'SELECT * FROM city WHERE id_province = $1';
        const { rows } = await db.query(queryText, [provinceId]);
        return rows;
    },

    async getCityByCode(cityCode) {
        const queryText = 'SELECT * FROM city WHERE city_code = $1';
        const { rows } = await db.query(queryText, [cityCode]);
        return rows[0];
    },
};

module.exports = userModel;
