import React from "react";


export default function RecipeCard (props) {

    return (
        <div className="col-4">
            <div className="card mb-4 box-shadow m-3" key={props.recipe.title}>       
                <h4 className=" text-center m-4">{props.recipe.title}</h4>

                <img
                src={props.recipe.image}
                className="img-rounded img-responsive text-center m-2"
                alt="recipe image"
                />

                <div className="text-right">
                    <ul>
                        {props.recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                    
                    <ol>
                        {props.recipe.method.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}