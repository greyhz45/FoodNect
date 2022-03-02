//main component

import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderWraperComponent from "./components/HeaderWraperComponent";
import WraperContainer from "./pages/WraperContainer";
import FooterComponent from "./components/FooterComponent";
import LikeDislike from "./components/LikeDislike";

function App(){
  return (
    <>
      <BrowserRouter>
          <HeaderWraperComponent />

          <WraperContainer />
        <LikeDislike />

          <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
