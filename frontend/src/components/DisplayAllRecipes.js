import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function DisplayAllRecipes () {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/recipes/')
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
        <div className="container">
            <div className="jumboton text-center m-4">
                <h1>Janusz Pizza</h1>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                 </p>
            </div>

            <div className="d-flex justify-content-center my-4">
                <Link to="/create-recipe">
                    <button className="btn btn-success">Add recipe</button>
                </Link>
            </div>

            <div className="row">{ recipeList }</div>
        
            <footer className="page-footer">
                <div className="text-center footer-copyright p-3">
                    Some footer info
                </div>
            </footer> 

        </div>

    );
}