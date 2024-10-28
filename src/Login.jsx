import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


// Exakt så. Vi hade kunnat skriva showPassword == true ? "text" : "password"
// men med booleans, så kan du bara skriva "showPassword" för att kolla om den e true
// precis samma i en "if"
// if(showpassword) är samma sak som if(showPassword == true)

 // ta inte bort alla kommentarer där nere  nu spammas de i konsolen "nu körs" ohhfan. Ahh man ska inte anropa metoder så egentligen. kom ner
  

const Login = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    let length = password.length

    function handleLogin(event) {
        event.preventDefault();
        
        if(password.length < 5) {
            alert("Your password is too short. Like my dick.")
        } else if(password.trim() && username.trim()) {
            navigate("/app");
        } else {
            alert("Please provide a valid username and password");
        }
        
    }
    // Kolla först längden på password. Kolla sedan username.trim() && password.trim(). 

    // ja kan inte syntax på språken kan man använda minLength eller .length? hemsidan fungerar inte
    
    function togglePassword() {
        if (showPassword == false) { // false = vi visar INTE password
            setShowPassword(true) // kommer vi hit så visar vi password
        } else if (showPassword == true) {
            setShowPassword(false)
        }
        // det vi vill göra nu är att toggla type=password beroende på vad showPassword värdet är (true/false)
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
                type={showPassword ? "text" : "password"} // if it works it worksssssss
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