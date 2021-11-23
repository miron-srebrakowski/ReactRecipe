import React, { useState, useEffect } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import InterestBar from "./InterestBar";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LandingPage () {

    const { user, isAuthenticated } = useAuth0();
    const [mealImage, setMealImage] = useState();
    const [mealTitle, setMealTitle] = useState();
    const [mealTutorial, setMealTutorial] = useState();

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => {
            const data = res.data.meals[0]
            setMealImage(data.strMealThumb);
            setMealTitle(data.strMeal);  
            setMealTutorial(data.strYoutube);
        })
        .catch(err => {
            console.log("Error in getting API image!" + err);
        })
    }, [])

    return (
        <div className="container text-center landing-page">

            <div className="row my-4">
                <div className="col-lg-5 p-4 my-4">
                    {!isAuthenticated && (<h1 className="p-4"> Welcome to Recipe Finder </h1>)}
                    {isAuthenticated && (<h1 className="p-4"> Hello {user.name}! </h1>)}
                    <img
                    src="https://spoonacular.com/application/frontend/images/food-api/ontology2.svg"
                    className="img-rounded img-responsive text-center m-2"
                    alt="food"
                    />
                </div>

                <div className="col-lg-5 p-4 my-4">
                    <p className="my-2 py-4">
                    If you're tired of writing down your favourite recipes and losing them or simply want
                    a place where you can store, edit and access your instructions when cooking or anytime
                    for that matter? Then you've come to the right place! Recipe Finder is a simple to use web application
                    which allows you to store, edit and share your favourite culinary recipes and have them
                    easily accessible whenever you neeed.
                    </p>
                    <p>
                    <strong>Interested?</strong> Let me know below and I'll set you up
                    with your own recipe book! 
                    </p>
                    <p>
                    <strong>Need inspiration?</strong> Check out the recipe suggestions
                    along with video cooking tutorials below!  
                    </p>

                    <br />

                    {!isAuthenticated && ( <LoginButton /> )}
                    
                    {isAuthenticated && (
                        <>
                        <Link to="/display-all">
                            <button className="btn btn-primary m-4"> View recipes </button>
                        </Link>
                        
                        <LogoutButton />
                        </>
                    )}
                    
                </div>
            </div>
            
            <InterestBar />
            
            <hr />
            <hr />

            <div className="img-box">
                <h4 className="my-2">{ mealTitle }</h4>
                <a className="my-4" href= { mealTutorial } target="_blank">
                    <button className="btn btn-secondary">View instructions</button>
                </a>
                <img className="example-recipe" src={ mealImage } /> 
            </div>

            <hr />
            <hr />
            
            <footer className="page-footer">
                <div className="text-center footer-copyright p-3">
                    Created by: Miron Srebrakowski 
                </div>
            </footer> 

            <hr />
            <hr />
            
        </div>
    );
}