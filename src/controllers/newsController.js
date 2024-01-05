const newsModel = require('../models/newsModel');

exports.createNews = async (req, res) => {
    try {
        const { title, body, writer, image } = req.body;

        // Create news article
        const newsId = await newsModel.createNews(title, body, writer, image);

        res.status(201).json({ message: 'News article created successfully', newsId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNewsById = async (req, res) => {
    try {
        const { id } = req.params;

        const news = await newsModel.getNewsById(id);
        if (!news) {
            return res.status(404).json({ error: 'News article not found' });
        }

        res.json({ news });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllNews = async (req, res) => {
    console.log("abc")
    try {
        const news = await newsModel.getAllNews();

        res.json({ news });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateNews = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, body, writer, image } = req.body;

        const updatedNews = await newsModel.updateNews(id, title, body, writer, image);
        if (!updatedNews) {
            return res.status(404).json({ error: 'News article not found' });
        }

        res.json({ message: 'News article updated successfully', updatedNews });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteNews = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await newsModel.deleteNews(id);
        if (deleted === 0) {
            return res.status(404).json({ error: 'News article not found' });
        }

        res.json({ message: 'News article deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
