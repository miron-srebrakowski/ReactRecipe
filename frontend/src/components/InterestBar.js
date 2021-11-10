import React, { useState } from "react";

export default function InterestBar () {

    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();

    return (
        <div className="row">
            <p className="col-4">Please register interest!</p>
            <form className="col-7"> 
                <input type="text" className="form-control" placeholder="Name"
                value={userName} onChange={(e) => setUserName(e.target.value)} />            
                <input type="text" className="form-control" placeholder="Email"
                value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
        </div>
    )
}