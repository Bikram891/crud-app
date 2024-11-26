require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const userRoutes = require('../src/router/userRouter');



app.use(express.json());

// Routes
app.use('/api/users', userRoutes);




connectDB();

///-------------SERVER START-------------------------///
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});