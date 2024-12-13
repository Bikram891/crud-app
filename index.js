const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/router/userRouter');
const errorHandler = require('./src/middleware/errorHandler');
const userAuthRouters = require('./src/router/userAuthRouter');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/users',userAuthRouters);
app.use(errorHandler);

// ///-------------SERVER START-------------------------///
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
