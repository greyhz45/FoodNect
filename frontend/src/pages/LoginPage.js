//a modal page for sign in

function LoginPage({landingCallback}){

  const handleClick = () =>{
    landingCallback();
  }
  
  
  return (
    <>
      <div className="fn-container-login">
        <div className="text-center">
          <h3>Welcome</h3>
        </div>
        <div className="fn-input-area">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="text-center">
          <button type="submit" value="log-in" className="btn fn-btn-pink">Log In</button>
          <div className="mt-3">
            Don't have a account ?
            <p className="fn-signup-link-green" onClick={landingCallback}>Sign Up</p>
          </div>
          <p className="fn-text-petite text-muted"><input type="checkbox" checked disabled style={{display:"inline-block",marginRight:"1em"}}/>By logging in or signing up, you automatically agree to our terms and conditions.</p>
        </div>
      </div>
    </>
  )
}

export default LoginPage;