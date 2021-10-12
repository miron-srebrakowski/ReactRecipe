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


// READ all Recipes
router.route('/').get((req, res) => {
    recipeSchema.find((err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
});


// READ single Recipe
router.route('/edit-recipe/:id').get((req, res) => {
    recipeSchema.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
});


// DELETE Recipe
router.delete('/delete-recipe/:id', (req, res) => {
    recipeSchema.findByIdAndRemove(req.params.id, req.body)
    .then(recipe => res.json( { msg: "Deleted" }))
    .catch(err => res.status(404).json({error: "None found"})); 
});

module.exports = router;

