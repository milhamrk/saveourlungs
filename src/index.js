require('dotenv').config();

const express = require('express');
const aqiRoutes = require('./routes/aqiRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

const apiRouter = express.Router();

apiRouter.use('/auth', userRoutes);
apiRouter.use('/aqi', aqiRoutes);

app.use('/api', apiRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
