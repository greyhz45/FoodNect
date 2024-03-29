//a wraper container to house all dynamic pages/components

import React, { useState, useContext } from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import { Routes, Route } from "react-router-dom";
import TermsAndConditions from "../components/TermsAndConditions";
import NotFound404 from "./NotFound404";
import ViewResto from "../components/ViewRestoComponent"
import SearchResto from "../components/SearchRestoComponent"
import {RESTOS} from "../Shared/data.js";
import { SearchContext } from '../context/SearchContext'

function WraperContainer() {
    const [ resto, setResto ] = useState("");

  return (
    <div id="fn-wraper-container-main">

      <Routes>
        
        <Route path="/" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} /> 
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />

            <Route path="/api/restaurants/view" element={<ViewResto restaurants={RESTOS}  />} />
            <Route path="/search" element={<SearchResto />} />



        <Route path="*" element={<NotFound404 />} />
      </Routes>

    </div>
  )
}
export default WraperContainer


