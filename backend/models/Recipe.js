const mongoose = require('mongoose');

let recipeSchema = new mongoose.Schema({
    title: {
      type: String
    },
    image: {
      type: String  
    },
    description: {
      type: String 
    },
    author: {
      type: String 
    },
    ingredients: {
      type: [String] 
    },
    method: {
      type: [String] 
    }
  }, {
    collection: 'recipes'
  });

 module.exports = mongoose.model('Recipe', recipeSchema); 