//main component

import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderWraperComponent from "./components/HeaderWraperComponent";
import WraperContainer from "./pages/WraperContainer";
import FooterComponent from "./components/FooterComponent";
import {AuthProvider} from "./context/AuthContext";

function App(){

  

  return (
    <>
    <AuthProvider>
      
      <BrowserRouter>
        <HeaderWraperComponent />

        <WraperContainer />

        <FooterComponent />
      </BrowserRouter>

      </AuthProvider>
    </>
  );
}

export default App;
