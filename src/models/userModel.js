const db = require('../db');

const userModel = {
    async createUser(name, email, password) {
        const queryText = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id';
        const values = [name, email, password];
        const { rows } = await db.query(queryText, values);
        return rows[0].id;
    },

    async findUserByEmail(email) {
        const queryText = 'SELECT * FROM users WHERE email = $1';
        const { rows } = await db.query(queryText, [email]);
        return rows[0];
    }
};

module.exports = userModel;
