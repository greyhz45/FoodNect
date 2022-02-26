//landing page

import React, {useState} from 'react';
import HeaderWraperComponent from "../components/HeaderWraperComponent";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

function LandingPage() {
  const [showSignupPage, setShowSignupPage] = useState(true);
  const [showLoginPage, setLoginPage] = useState(true);

  return (
    <>
      <HeaderWraperComponent />
      { !showSignupPage && <SignupPage /> }
      { showLoginPage && <LoginPage /> }

      {/* header and other landing page contents */}
    </>
  )
}
export default LandingPage;