//a modal component for signup

import React from 'react'

function SignupPage({landingCallback}) {  //destructure as {loginCallback}, as prop is an object or use pass props and do props.landingCallback

  const handleClick = () =>{
    landingCallback();
  }
   
  return (
    <>
      <div className="fn-container-login">
        <div className="text-center">
          <h3>New User</h3>
        </div>
        <div className="fn-input-area">
          <input type="text" placeholder="Email Id" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        
        <div className="text-center">
          <button type="submit" value="sign-up" className="btn fn-btn-pink">Sign Up</button>
          <div className="mt-3">
            Already have an account ?
            <p className="fn-signup-link-green" onClick={landingCallback}>Log In</p>
          </div>
          <p className="fn-text-petite text-muted"><input type="checkbox" checked disabled style={{display:"inline-block",marginRight:"1em"}}/>By logging in or signing up, you automatically agree to our terms and conditions.</p>
        </div>
      </div>
    </>
  )
}
export default SignupPage;