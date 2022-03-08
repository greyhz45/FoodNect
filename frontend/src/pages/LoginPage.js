//a modal page for sign in

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import FormWraper from "../ui/FormWraper";

function LoginPage(){

  //get form data use: useRef() or useState()
  //useRef() is preferred because no need to track what user types on each keystroke meaning need to read
  //user input only once during form submission
  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleLogIn = (event) => {
    //inbuild event handlers automatically provide events
    event.preventDefault();
    const loginData = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value
    }
    //submit login request
    console.log(loginData);
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
        <div className="fn-input-area">
          <input type="text" placeholder="Username" ref={userNameRef} />
          <input type="password" placeholder="Password" ref={passwordRef} />
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