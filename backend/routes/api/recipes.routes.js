const express = require('express');
const router = express.Router();

//Load Recipe model

const Recipe = require('../../models/recipeSchema');

// @router GET api/recipes/test
// @descriprion tests recipes route
// @access Public

router.get('/test', (req, res) => res.send('recipe route testing'));

// @route GET api/recipes
// @description Get all recipes
// @access Public

router.get('/', (req, res) => {
    Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(404).json({ norecipesfound: 'No Recipes found'}))
});

// @route GET api/recipes/:id
// @description Get single recipe by id
// @access Public

router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(404).json({norecipefound: 'No Recipe found' }))
});

// @route GET api/recipes
// @description add/save recipe
// @access Public

router.post('/create', (req, res) => {
    Recipe.create(req.body)
    .then(recipe => res.json({msg: 'Recipe added successfully'}))
    .catch(err => res.status(400).json({ error: 'Unable to add this recipe'}))
});

// @route GET api/recipes/:id
// @description Update recipe
// @access Public

router.put(':/id', (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then(recipe => res.json({msg: 'Updated successfully'}))
    .catch(err => res.status(400).json({ error: 'Unable to update database'}))
});

// @route GET api/recipes/:id
// @description Delete recipe by id
// @access Public

router.delete('/:id', (req, res) => {
    Recipe.findByIdAndRemove(req.params.id, req.body)
    .then(recipe => res.json({msg: 'Recipe entry deleted successfully'}))
    .catch(err => res.status(404).json({ error: 'No such recipe'}))
});

module.exports = router;
