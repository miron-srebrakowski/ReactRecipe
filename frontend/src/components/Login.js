import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

async function loginUser(credentials) {
    return fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login ({ setToken, setLoggedIn }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
        setLoggedIn(true);

      }

    return (
        <div className="login-wrapper">
            <h1 className="p-4">Please Log In</h1>
            <form className="p-2" onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <Link to="/display-all">
                      <button type="submit">Submit</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}