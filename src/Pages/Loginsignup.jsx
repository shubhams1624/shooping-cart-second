import React, { useState } from 'react';
import './CSS/loginsignup.css';

const Loginsignup = () => {
  const [state, setState] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleState = () => {
    setState(prevState => (prevState === "login" ? "signUp" : "login"));
    setFormData({ username: "", password: "", email: "" }); // Clear form on toggle
  };

  const login = async () => {
    console.log("login function executed", formData);
    try {
      const response = await fetch('http://localhost:3004/auth', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: formData.email, password: formData.password })
      });
    
      const responseData = await response.json();
    
      // const newData = JSON.stringify(responseData);
      console.log(responseData)
      
  

      if (responseData.success) {

        localStorage.setItem('user', JSON.stringify(responseData.data));
        localStorage.setItem('auth-token', responseData.token); // Store token
        window.location.replace("/"); // Redirect after login
      } else {
        alert(responseData.errors || "An unknown error occurred."); // Handle errors
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  const signUp = async () => {
    console.log("signup function executed", formData);
    try {
      const response = await fetch('http://localhost:3004/auth', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Pass username, email, password for signup
      });

      const responseData = await response.json();
      console.log(responseData); // Log the entire response for debugging

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token); // Store token if available
        window.location.replace("/"); // Redirect after signup
      } else {
        alert(responseData.errors || "An unknown error occurred."); // Handle errors
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state === "signUp" ? "Sign Up" : "Login"}</h1>
        <div className='loginsignup-field'>
          {state === "signUp" && (
            <input 
              type='text' 
              name='username' 
              value={formData.username} 
              onChange={changeHandler}  
              placeholder='Your name' 
            />
          )}
          <input 
            name='email' 
            value={formData.email} 
            onChange={changeHandler} 
            type='email' 
            placeholder='Your email' 
          />
          <input 
            name='password' 
            value={formData.password} 
            onChange={changeHandler}   
            type='password' 
            placeholder='Password' 
          />
        </div>
        <div>
          <button onClick={() => {
            state === "login" ? login() : signUp();
          }}>Continue</button>
        </div>
        <p className="loginsignup-login">
          {state === "signUp" 
            ? "Already have an account? " 
            : "Create an account."} 
          <span onClick={toggleState} style={{ cursor: 'pointer', color: 'blue' }}>
            {state === "signUp" ? "Login here" : "Sign up here"}
          </span>
        </p>
        <div className="loginsignup-agree">
          <input type='checkbox' id='agree' />
          <p>By continuing, I agree with the terms of use.</p>
        </div>
      </div>
    </div>
  );
}

export default Loginsignup;
