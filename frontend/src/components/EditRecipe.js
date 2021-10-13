import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function EditRecipe (props) {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');

    const [currentIngredient, setCurrentIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const [step, setStep] = useState('');
    const [method, setMethod] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/recipes/view-recipe/' + props.match.params.id)
        .then(res => {
            setTitle(res.data.title);
            setImage(res.data.image);
            setDescription(res.data.description);
            setAuthor(res.data.author);
            setIngredients(res.data.ingredients);
            setMethod(res.data.method);

        })
        .catch(err => {
            console.log("Error in EditRecipe!" + err);
        })
    }, [])

    const handleSubmit = (e) => {

        e.preventDefault();

        const updatedData = {
            title: title,
            image: image,
            description: description,
            author: author,
            ingredients: ingredients,
            method: method,
        };

        axios.put('http://localhost:4000/recipes/edit-recipe/' + props.match.params.id, updatedData)
        .then((res) => {
            console.log(res.data);
            console.log("Recipe updated!");
        })
        .catch((err) => {
            console.log("Error in Updating" + err);
        })

        props.history.push(`/view-recipe/${props.match.params.id}`);
    };

    const addIngredient = () => {
        setIngredients(ingredients => [...ingredients, currentIngredient]);
        setCurrentIngredient('');
    }

    const addStep = () => {
        setMethod(method => [...method, step]);
        setStep('');
    }

    let ingredientsList, methodList;

    if (!ingredients) {
        ingredientsList = (<p>Please add ingredient </p>);
    } else {
        ingredientsList = ingredients.map((item) => (
            <li>{ item }</li>
        ));
    }

    if (!method) {
        methodList = (<p>Please add method </p>);
    } else {
        methodList = method.map((item) => (
            <li>{ item }</li>
        ));
    }
    
    return (
        <div className="container recipe-page">

            <h4 className="float-left p-4">Edit recipe</h4>

            <div className="row">

                <form className="col-5 mx-4" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Recipe Name </label>
                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Image URL</label>
                        <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Short description</label>
                        <textarea type="text" className="form-control"  value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <div className="col-5">
                
                    <div>
                        <label >Ingredients</label>
                        <input type="text" className="form-control" value={currentIngredient} onChange={(e) => setCurrentIngredient(e.target.value)}/>
                        <button className="btn btn-success m-3" onClick={addIngredient}>+ Add</button>
                        <button className="btn btn-danger m-3" onClick={() => setIngredients([])}>Reset ingredients</button>
                        <ul>
                            { ingredientsList }
                        </ul>
                    </div>

                    <div>
                        <label >Method</label>
                        <input type="text" className="form-control" value={step} onChange={(e) => setStep(e.target.value)}/>
                        <button className="btn btn-success m-3" onClick={addStep}>+ Add</button>
                        <button className="btn btn-danger m-3" onClick={() => setMethod([])}>Reset method</button>
                        <ol>
                            { methodList }
                        </ol>
                    </div>
                        
                    
                </div>

            </div>

            <Link to={`/view-recipe/${props.match.params.id}`}>
                <button>Back</button>
            </Link>
        </div>
    );
}