import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();
        
        if (username && password) {
            navigate('/app');
        }
    }
        
  return (
      <div>
        <form className="form" onSubmit={handleLogin}>
            <div>
                <label className="loginInfo">Username</label>
                <input
                className="input"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                />
            </div>
            <div>
                <label className="loginInfo">Password</label>
                <input
                className="input"
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                />
            </div>
            <button className="loginInfo login" type="submit">Login</button>
        </form>
      </div>
  )
}

export default Login