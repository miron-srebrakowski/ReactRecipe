import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import DisplayAllRecipes from './components/DisplayAllRecipes';
import AddRecipe from './components/AddRecipe';




export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={DisplayAllRecipes} />
        <Route path="/add-recipe" component={AddRecipe} />
      </div>
    </Router>
  );
}

