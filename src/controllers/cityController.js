const cityModel = require('../models/cityModel');

exports.insertCity = async (req, res) => {
    try {
        const { provinceId, cityName, cityCode } = req.body;
        
        // Check if city already exists
        let city = await cityModel.getCityByCode(cityCode);
        if (city) {
            return res.status(400).json({ error: 'City already exists' });
        }
        
        // Create city
        const cityId = await cityModel.insertCity(provinceId, cityName, cityCode);

        res.status(201).json({ message: 'City insert success', cityId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllCity = async (_, res) => {
    try {
        const city = await cityModel.getAllCity();

        res.json({ city });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllCityByProvinceId = async (req, res) => {
    try {
        const { provinceId } = req.params;

        const city = await cityModel.getCityByProvinceId(provinceId);
        if (city) {
            return res.status(400).json({ error: 'City not found' });
        }

        res.json({ city });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};