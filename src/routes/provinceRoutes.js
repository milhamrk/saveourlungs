const express = require('express');
const provinceController = require('../controllers/provinceController');

const router = express.Router();

router.get('/list', provinceController.getAllProvince);
router.post('/insert', provinceController.insertProvince);

module.exports = router;
