import react from "react";
import { Link } from 'react-router-dom';

export default function AddRecipe () {

    return (
        <div>
            <h1>It works!</h1>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    );
}