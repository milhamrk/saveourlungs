const axios = require('axios');
const aqiModel = require('../models/aqiModel');

exports.getAqi = async (req, res) => {
    const { city, province } = req.params;
    let aqi = await aqiModel.getAqi(city, province);

    if (!aqi) {
        const response = await axios.get(`http://api.airvisual.com/v2/city?city=${city}&state=${province}&country=Indonesia&key=${process.env.IQAIR_API_KEY}`);
        const data = response.data;

        if(data.status === "success") {
            aqi = {
                city: city,
                province: province,
                aqi: data.data.current.pollution.aqius
            };

            await aqiModel.saveAqi(aqi);
        } else {
            return res.status(400).json({error: "Unable to retrieve AQI data"});
        }
    }

    res.json(aqi);
};
