import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage () {

    return (
        <div className="container text-center landing-page">

            <div className="row">
                <div className="col-5 p-4">
                    <h1 className="p-4"> Recipe App </h1>

                    <img
                    src="https://spoonacular.com/application/frontend/images/food-api/ontology2.svg"
                    className="img-rounded img-responsive text-center m-2"
                    alt="food"
                    />
                </div>

                <div className="col-5 p-4">
                    <p className="my-4 py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.
                    </p>

                    <br />

                    <Link to="/display-all">
                        <button className="btn btn-primary m-4">View all recipes</button>
                    </Link>

                    <Link to="/login">
                        <button className="btn btn-primary m-4">Login</button>
                    </Link>
                </div>
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