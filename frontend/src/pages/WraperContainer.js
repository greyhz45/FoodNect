//a wraper container to house all dynamic pages/components

import React, { useState, useContext } from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import { Routes, Route } from "react-router-dom";
import TermsAndConditions from "../components/TermsAndConditions";
import NotFound404 from "./NotFound404";

function WraperContainer() {


  return (
    <div id="fn-wraper-container-main">
      <Routes>
        
        <Route path="/" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} /> 
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />


        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  )
}
export default WraperContainer


