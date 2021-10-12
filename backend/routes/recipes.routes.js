const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Load Recipe model
const recipeSchema = require('../models/Recipe');

// CREATE Recipe
router.route('/create-recipe').post((req, res, next) => {
    recipeSchema.create(req.body, (err, data) => {
        if (err) {
            return next(err);
        } else {
            console.log(data);
            res.json(data);
        }
    })
});


// READ Recipes
router.route('/').get((req, res) => {
    recipeSchema.find((err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
});

module.exports = router;

