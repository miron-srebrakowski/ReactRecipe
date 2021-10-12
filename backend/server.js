const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
let cors = require('cors');

// Express Route
const recipeRoute = require('../backend/routes/recipes.routes');

// Connect MongoDB
connectDB();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/recipes', recipeRoute);


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => console.log(`Server running on port ${port}`)); 


// 404 Error
app.use((req, res, next) => {
    next(createErrow(404));
});

app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});






