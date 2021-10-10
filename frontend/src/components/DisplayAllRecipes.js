import React from "react";
import RecipeCard from "./RecipeCard";
import { Link } from 'react-router-dom';
import { recipes } from "../data";

export default function DisplayAllRecipes () {

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
                <Link to="/add-recipe">
                    <button className="btn btn-success">Add recipe</button>
                </Link>
            </div>

            <div className="row">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}  
            </div>
        
            <footer className="page-footer">
                <div className="text-center footer-copyright p-3">
                    Some footer info
                </div>
            </footer> 

        </div>

    );
}