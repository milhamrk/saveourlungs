const express = require('express');
const newsController = require('../controllers/newsController');

const router = express.Router();

// Route to create a news article
router.post('/create', newsController.createNews);

// Route to get all news
router.get('/list', newsController.getAllNews);

// Route to update a news article by its ID
router.put('/update/:id', newsController.updateNews);

// Route to delete a news article by its ID
router.delete('/delete/:id', newsController.deleteNews);

// Route to get a single news article by its ID
router.get('/:id', newsController.getNewsById);

module.exports = router;
