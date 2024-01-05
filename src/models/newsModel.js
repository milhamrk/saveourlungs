const db = require('../db');

const newsModel = {
    // Create a new news article
    async createNews(title, body, writer, image) {
        const queryText = 'INSERT INTO news (title, body, writer, image) VALUES ($1, $2, $3, $4) RETURNING id';
        const values = [title, body, writer, image];
        const { rows } = await db.query(queryText, values);
        return rows[0].id;
    },

    // Read a news article by ID
    async getNewsById(id) {
        const queryText = 'SELECT * FROM news WHERE id = $1';
        const { rows } = await db.query(queryText, [id]);
        return rows[0];
    },

    // Read all news 
    async getAllNews() {
        const queryText = 'SELECT * FROM news';
        const { rows } = await db.query(queryText);
        return rows;
    },

    // Update a news article
    async updateNews(id, title, body, writer, image) {
        const queryText = 'UPDATE news SET title = $2, body = $3, writer = $4, image = $5, updated_at = NOW() WHERE id = $1 RETURNING *';
        const values = [id, title, body, writer, image];
        const { rows } = await db.query(queryText, values);
        return rows[0];
    },

    // Delete a news article
    async deleteNews(id) {
        const queryText = 'DELETE FROM news WHERE id = $1';
        const { rows } = await db.query(queryText, [id]);
        return rows.rowCount; // Returns the number of rows affected
    }
};

module.exports = newsModel;
