const express = require('express');
const aqiRoutes = require('./routes/aqiRoutes');

const app = express();
app.use(express.json());

app.use(aqiRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
