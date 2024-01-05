const express = require('express');
const cityController = require('../controllers/cityController');

const router = express.Router();

router.get('/list', cityController.getAllCity);
router.get('/:provinceId', cityController.getAllCityByProvinceId);
router.post('/insert', cityController.insertCity);

module.exports = router;
