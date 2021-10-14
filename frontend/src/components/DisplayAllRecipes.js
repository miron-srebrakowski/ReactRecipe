import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function DisplayAllRecipes () {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/recipes/display-all')
        .then(res => {
            setRecipes(res.data);
        })
        .catch(err => {
            console.log("Error in DisplayAllRecipes!" + err);
        })
    }, [])

    console.log("PrintRecipe: " + recipes);
    let recipeList;

    if (!recipes) {
        recipeList = "No recipes on record!";
    } else {
        recipeList = recipes.map((recipe, key) => (
            <RecipeCard key={key} recipe={recipe} />
        ));
    }

    return (
        <div className="container main-page">
            <div className="jumboton text-center my-4 p-4">
                <h1>Recipe book</h1>

                <p>
                    Store your favourite recipes and access them quickly when feeling like treating 
                    yourself to something nice. Cooked something new you like? Great! Store it in 
                    your recipe book below (remember to add a picture of how delicous it looked). 
                 </p>

                 <div className="d-grid justify-content-center">
                <Link to="/create-recipe">
                    <button className="btn btn-success">Add recipe</button>
                </Link>
            </div>

            </div>

            <div className="row">{ recipeList }</div>
        
            <footer className="page-footer">
                <div className="text-center footer-copyright p-3">
                    Created by: Miron Srebrakowski 
                </div>
            </footer> 

        </div>

    );
}