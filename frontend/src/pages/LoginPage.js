//a modal page for sign in

import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormWraper from "../ui/FormWraper";
import Service from "../api/Services";
import AuthContext from "../context/AuthContext";

function LoginPage(){

  const [errorMessage, setErrorMessage] = useState("");
  const {setJwtToken, setIsAuthenticated} = useContext(AuthContext);

  //get form data use: useRef() or useState()
  //useRef() is preferred because no need to track what user types on each keystroke meaning need to read user input only once during form submission
  const userNameRef = useRef();
  const passwordRef = useRef();
  const navigateTo = useNavigate();

  const handleLogIn = (event) => {
    //inbuild event handlers automatically provide events
    event.preventDefault();
    const loginData = {
      username: userNameRef.current.value,
      password: passwordRef.current.value
    }
    //console.log(loginData);
    //call api to authenticate and set JWT to context
    try {
      Service.authenticate(loginData)
        .then(res => {
          
          console.log(res.data["accessToken"]);  //axios: res.data, fetch: res.json()
          //return res.data;
          setJwtToken(res.data["accessToken"])
          setIsAuthenticated(true)
          //after successful login redirect to default page
          navigateTo("/search");

        }).catch(error => {
          //set states and show error alert
          // if(!error.response){
          //   setErrorMessage("Error: No server response!")
          // } else if(error?.response?.status == 400){
          //   setErrorMessage("Error: Missing Username or Password.")
          // } else if(error?.response?.status == 401){
          //   setErrorMessage("Error: Incorrect Username or Password..")
          // } else if(error?.response?.status == 403){
          //   setErrorMessage("Error: Unauthorized access.")
          // } else {
          //   setErrorMessage("Error: Unknown error. Please try again.")
          // }
          console.log("Authentication failed.", error)
        })
    } catch (error) {
      console.log("Unknown error occured...", error)        
    }
    //if everything goes well clear and redirect
    //clear inputs
    userNameRef.current.value = "";
    passwordRef.current.value = "";
  }

  
  
  return (
    <FormWraper>

      <form className="fn-container-login" onSubmit={handleLogIn}>
        <div className="text-center">
          <h3>Welcome</h3>
        </div>
      
        <p className="bg-warning px-2">{errorMessage}</p>

        <div className="fn-input-area">
          <input type="text" placeholder="Username" ref={userNameRef} required />
          <input type="password" placeholder="Password" ref={passwordRef} required />
        </div>
        <div className="text-center">
          <button type="submit" value="log-in" className="btn fn-btn-pink">Log In</button>
          <div className="mt-3">
            Don't have a account ?
            <p className="fn-signup-link-green" >
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
          <p className="fn-text-petite text-muted"><input type="checkbox" checked disabled style={{display:"inline-block",marginRight:"1em"}}/>By logging in or signing up, you automatically agree to our <Link to="/terms-and-conditions" className="fn-nav-link">terms and conditions</Link>.</p>
        </div>
      </form>
    </FormWraper>
  )
}

export default LoginPage;