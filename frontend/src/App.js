import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import DisplayAllRecipes from './components/DisplayAllRecipes';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';



export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={DisplayAllRecipes} />
        <Route path="/create-recipe" component={AddRecipe} />
        <Route path="/edit-recipe/:id" component={EditRecipe} />
      </div>
    </Router>
  );
}

