//a modal page for sign in

function LoginPage(){
  return (
    <>
      <div className="fn-container-login">
        <div className="text-center">
          <h1>Welcome</h1>
        </div>
        <div className="fn-input-area">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="text-center p-3">
          <button type="submit" value="Login" className="btn fn-btn-pink">Log In</button>
          <p className="mt-3">
            Don't have a account ?
            <a href="#" className="fn-signup-link-green">Sign Up</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default LoginPage;