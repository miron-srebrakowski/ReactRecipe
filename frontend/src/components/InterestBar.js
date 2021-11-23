import React, { useState } from "react";

export default function InterestBar () {

    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();

    const handleSubmit = () => {
        setUserEmail('');
        setUserName('');
        alert(
            "Thank you for your interest!"
        );
    }

    return (
        <div className="jumboton interest-bar m-4 row">
            
            <form className="col-lg-8 mx-5"> 
                <input type="text" className="form-control m-3 name-field" placeholder="Name"
                value={userName} onChange={(e) => setUserName(e.target.value)} />            
                <input type="text" className="form-control m-3 email-field" placeholder="Email"
                value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                
            </form>
            <button className="btn btn-primary my-3 interest-submit col-lg-4" onClick={handleSubmit}>Register interest!</button>
        </div>
    )
}