import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export default function DisplayAllRecipes () {

    const { user } = useAuth0();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/recipes/display-all')
        .then(res => {
            setRecipes(res.data);
            console.log("Success")
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
            <div className="jumboton-main text-center p-4">
                <h1>{user.name}'s Recipes</h1>

                <p>
                    Store your favourite recipes and access them quickly when feeling like treating 
                    yourself to something nice. Cooked something new you like? Great! Store it in 
                    your recipe book below (remember to add a picture of how delicous it looked). 
                </p>

                <div className="btn-group">
                    <Link to="/">
                        <button className="btn btn-primary mx-2">Home</button>
                    </Link>
                    
                    <Link to="/create-recipe">
                        <button className="btn btn-success mx-2">Add recipe</button>
                    </Link>
                </div>

            </div>

            <hr />
            <hr />
            

            <div className="row">{ recipeList }</div>

            <hr />
            <hr />
        
            <footer className="page-footer m-4">
                <div className="text-center footer-copyright p-3">
                    Created by: Miron Srebrakowski 
                </div>
            </footer> 

        </div>

    );
}