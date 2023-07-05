const express = require('express');
const aqiController = require('../controllers/aqiController');

const router = express.Router();

router.get('/api/aqi/:city/:province', aqiController.getAqi);

module.exports = router;
