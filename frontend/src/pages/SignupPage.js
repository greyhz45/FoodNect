//a modal component for signup

import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormWraper from "../ui/FormWraper";


function SignupPage() {
  const navigate = useNavigate();
  //const history = useHistory() is replaced with useNavigate() in v6+
  //history.replace("/") => can't go back once redirected to "/" => <v6
  //navigate("/", {replace: true}) => can't go back once redirected to "/" => >=v6
  //history.push() and navigate() adds to browser history and replace replaces current location history

  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSignUp = (event) => {
    event.preventDefault();
    if(passwordRef.current.value === confirmPasswordRef.current.value){
      const signUpData = {
        email: emailRef.current.value,
        userName: userNameRef.current.value,
        password: passwordRef.current.value,
      }
      console.log(signUpData);
      //use history/useNavigate with fetch->.then() block
      navigate("/login");

      emailRef.current.value = "";
      userNameRef.current.value = "";
      passwordRef.current.value = "";
    } else {
      alert("password and confirm password does not match")
    }
    
  }

  return (
    <FormWraper>
      <form className="fn-container-login" onSubmit={handleSignUp}>
        <div className="text-center">
          <h3>New User</h3>
        </div>
        <div className="fn-input-area">
          <input type="text" placeholder="Email Id" ref={emailRef} />
          <input type="text" placeholder="Username" ref={userNameRef} />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <input type="password" placeholder="Confirm Password" ref={confirmPasswordRef} />
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