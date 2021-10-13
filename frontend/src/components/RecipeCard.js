import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


export default function RecipeCard (props) {

    const deleteRecipe = () => {
        axios.delete('http://localhost:4000/recipes/delete-recipe/' + props.recipe._id)
        .then((res) => {
            console.log("Recipe successfully deleted!");
            alert("Recipe deleted!");
        })
        .catch((err) => {console.log(err);});
    }

    return (
        <div className="col-4 my-4">
            <div className="card mb-4 box-shadow m-3" key={props.recipe._id}>       
                <h4 className=" text-center m-4">     
                    {props.recipe.title}
                </h4>

                <img
                src={props.recipe.image}
                className="img-rounded img-responsive text-center m-2"
                alt="food"
                />

                <div className="m-2">
                    <p className="text-center">{props.recipe.description}</p>
                    <h6 className="text-right"><i> Recipe by: {props.recipe.author}</i></h6>
                </div>

                <div className="text-center">
                    <Link to={`/view-recipe/${props.recipe._id}`}>
                        <button className="left-btn btn btn-success">View Recipe</button>
                    </Link>

                    <button className="right-btn btn btn-danger" onClick={deleteRecipe}>Delete</button>
                </div>
            </div>
        </div>
    );
}