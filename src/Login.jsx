import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
  

const Login = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    let length = password.length

    function handleLogin(event) {
        event.preventDefault();
        
        if(password.length < 5) {
            alert("Your password is too short.")
        } else if(password.trim() && username.trim()) {
            navigate("/app");
        } else {
            alert("Please provide a valid username and password");
        }
        
    }
    
    function togglePassword() {
        if (showPassword == false) {
            setShowPassword(true) 
        } else if (showPassword == true) {
            setShowPassword(false)
        }
       
    }
        
  return (
      <div>
        <form className="form" onSubmit={handleLogin}>
            <div>
                <label className="loginInfo">Username</label>
                <input
                required="text"
                className="input"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <label className="loginInfo">Password</label>
                <input
                required="password"
                className="input"
                type={showPassword ? "text" : "password"}
                // Password måste vara minst 5 tecken lång för att vi ska kunna navigeras till /app
                value={password} //  vadå
                onChange={(event) => setPassword(event.target.value)} 
                />
            </div> 
                <input
                
                onClick={() => togglePassword()}
                type="checkbox"
                /> Show Password 
            <button className="loginInfo login" type="submit">Login</button>
        </form>
      </div>
  )
}

export default Login
