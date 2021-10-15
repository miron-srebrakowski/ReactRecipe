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

// Authentication
app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => console.log(`Server running on port ${port}`)); 


app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});









