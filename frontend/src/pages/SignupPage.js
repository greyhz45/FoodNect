//a modal component for signup

import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormWraper from "../ui/FormWraper";
import Service from "../api/Services";



function SignupPage() {
  //setup errors
  const [errorMessage, setErrorMessage] = useState("");



  const navigateTo = useNavigate();
  //const history = useHistory() is replaced with useNavigate() in v6+
  //history.replace("/") => can't go back once redirected to "/" => <v6
  //navigate("/", {replace: true}) => can't go back once redirected to "/" => >=v6
  //history.push() and navigate() adds to browser history and replace replaces current location history

  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  
  
  //handle form submission
  const handleSignUp = (event) => {
    event.preventDefault();
    if(passwordRef.current.value === confirmPasswordRef.current.value){
      //collect form data
      const signUpData = {
        emailId: emailRef.current.value,
        username: userNameRef.current.value,
        password: passwordRef.current.value,
      }
      //call signup api
      Service.saveNewUser(signUpData)
        .then(res => console.log("New user created."))

      //use history/useNavigate with fetch->.then() block
      //after singup navigate to signin
      navigateTo("/login");

      emailRef.current.value = "";
      userNameRef.current.value = "";
      passwordRef.current.value = "";
    } else {
      //alert("password and confirm password does not match")
      setErrorMessage("Invalid input. Please try again.")
    }
    
  }


  return (
    <FormWraper>
      <form className="fn-container-login" onSubmit={handleSignUp}>
        <div className="text-center">
          <h3>New User</h3>
          {errorMessage.length>0?
            <p>{errorMessage}</p> :
            ""
          }
        </div>
        <div className="fn-input-area">
          <input type="text" placeholder="Email Id" ref={emailRef} required />
          <input type="text" placeholder="Username" ref={userNameRef} required />
          <input type="password" placeholder="Password" ref={passwordRef} required />
          <input type="password" placeholder="Confirm Password" ref={confirmPasswordRef} required />
        </div>
        
        <div className="text-center">
          <button type="submit" value="sign-up" className="btn fn-btn-pink">Sign Up</button>
          <div className="mt-3">
            Already have an account ?
            <p className="fn-signup-link-green" >
              <Link to="/login">Log In</Link>
            </p>
          </div>
          <p className="fn-text-petite text-muted"><input type="checkbox" checked disabled style={{display:"inline-block",marginRight:"1em"}}/>By logging in or signing up, you automatically agree to our <Link to="/terms-and-conditions" className="fn-nav-link">terms and conditions</Link>.</p>
        </div>
      </form>
    </FormWraper>
  )
}
export default SignupPage;