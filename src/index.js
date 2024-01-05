require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const provinceRoutes = require('./routes/provinceRoutes');
const cityRoutes = require('./routes/cityRoutes');
const newsRoutes = require('./routes/newsRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// JWT Authentication Middleware
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

const apiRouter = express.Router();

// Apply JWT authentication middleware to protected routes
apiRouter.use('/news', authenticateJWT, newsRoutes);
apiRouter.use('/provinces', authenticateJWT, provinceRoutes);
apiRouter.use('/cities', authenticateJWT, cityRoutes);

// userRoutes (signup and login) don't require authentication
apiRouter.use('/auth', userRoutes);

app.use('/api', apiRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
