const express = require('express');
const aqiRoutes = require('./routes/aqiRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// Use the AQI routes
app.use(aqiRoutes);

// Use the User routes
app.use(userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
