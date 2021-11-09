import React, { useState, useEffect } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
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

            <div className="navbar">
                <h3 className="nav-buttons">
                    <a href="/login">Login</a>
                    <a href="/contact-me">Contact Me</a>
                </h3>
            </div>

            <div className="row my-4">
                <div className="col-5 p-4 my-4">
                    {!isAuthenticated && (<h1 className="p-4"> Welcome to Recipe Finder </h1>)}
                    {isAuthenticated && (<h1 className="p-4"> Hello {user.name}! </h1>)}
                    <img
                    src="https://spoonacular.com/application/frontend/images/food-api/ontology2.svg"
                    className="img-rounded img-responsive text-center m-2"
                    alt="food"
                    />
                </div>

                <div className="col-5 p-4 my-4">
                    <p className="my-4 py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.
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
            

            <hr />
            <hr />

            <div className="img-box">
                <h4>{ mealTitle }</h4>
                <a href= { mealTutorial } target="_blank">
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