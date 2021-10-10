import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function AddRecipe () {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [method, setMethod] = useState('');

    const onSubmit = () => {
        const data = {
            title: title,
            image: image,
            ingredients: ingredient,
            method: method,
        };
        alert(JSON.stringify(data));

        // CONNECT API TO POST INPUT DATA
    }

    return (
        <div className="container">

            <h4 className="text-center p-4">Add new recipe</h4>

            <form onSubmit={() => onSubmit()}>
                <div className="form-group">
                    <label>Recipe Name </label>
                    <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input type="text" className="form-control" onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Ingredient</label>
                    <input type="text" className="form-control" onChange={(e) => setIngredient(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Method</label>
                    <input type="text" className="form-control" onChange={(e) => setMethod(e.target.value)} />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    );
}