const provinceModel = require('../models/provinceModel');

exports.insertProvince = async (req, res) => {
    try {
        const { provinceName, provinceCode } = req.body;
        
        // Check if province already exists
        let province = await provinceModel.getProvinceByCode(provinceCode);
        if (province) {
            return res.status(400).json({ error: 'Province already exists' });
        }
        
        // Create province
        const provinceId = await provinceModel.createUser(provinceName, provinceCode);

        res.status(201).json({ message: 'Province insert success', provinceId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllProvince = async (req, res) => {
    try {
        const province = await provinceModel.getAllProvince();

        res.json({ province });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};