//landing page

import React, {useState, useEffect} from 'react';
import HeaderWraperComponent from "../components/HeaderWraperComponent";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

function LandingPage() {
  const [showLogin, setShowLogin] = useState(true)

  //pass this function to login and signup component
  const callback = () => {
    setShowLogin(!showLogin);
  }

  return (
    <>
      <HeaderWraperComponent />
      { 
        showLogin ? 
          <LoginPage landingCallback={callback} /> : 
          <SignupPage landingCallback={callback} /> 
      }
    </>
  )
}
export default LandingPage;