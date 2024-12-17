const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const errorHandler = require('./src/middleware/errorHandler');
const userAuthRouters = require('./src/router/userAuthRouter');
const authenticateToken = require('./src/middleware/authenticateToken');
const userRoutes = require('./src/router/userRouter'); //

dotenv.config();
connectDB();

const app = express();


app.use(express.json());

// Define routes
app.use('/api/auth', userAuthRouters); // Includes login and createUser, no token validation here
app.use('/api/users',authenticateToken, userRoutes,); // All other routes require token validation


app.use(errorHandler);

// ///-------------SERVER START-------------------------///
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
