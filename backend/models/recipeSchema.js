const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    ingredients: {
      type: String,
      required: true
    },
    method: {
      type: String,
      require: true
    },
    id: {
      type: Date,
      default: Date.now
    }
  });

 module.exports = mongoose.model('recipe', RecipeSchema); 