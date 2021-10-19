import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import DisplayAllRecipes from './components/DisplayAllRecipes';
import AddRecipe from './components/AddRecipe';
import ViewRecipe from './components/ViewRecipe';
import EditRecipe from './components/EditRecipe';
import LandingPage from './components/LandingPage';
import Login from './components/Login';



export default function App() {

  const [token, setToken] = useState();
  const [loggedIn, setLoggedIn] = useState();

  return (
    <Router>
      <div>
        <Route exact path="/"><LandingPage /></Route>
        <Route path="/display-all" component={DisplayAllRecipes} />
        <Route path="/create-recipe" component={AddRecipe} />
        <Route path="/view-recipe/:id" component={ViewRecipe} />
        <Route path="/edit-recipe/:id" component={EditRecipe} />
        <Route path="/login"><Login setToken={setToken} setLoggedIn={setLoggedIn} /></Route>
      </div>
    </Router>
  );
}

