import React from "react";


export default function RecipeCard (props) {

    return (
        <div className="col-4">
            <div className="card mb-4 box-shadow m-3" key={props.recipe.title}>       
                <h4 className=" text-center m-4">{props.recipe.title}</h4>

                <img
                src={props.recipe.image}
                className="img-rounded img-responsive text-center m-2"
                alt="food"
                />

                <div className="text-right">
                    <ul>
                        
                        <li >{props.recipe.ingredients}</li>
                    </ul>
                    
                    <ol>
                        
                        <li >{props.recipe.method}</li>
                        
                    </ol>
                </div>
            </div>
        </div>
    );
}