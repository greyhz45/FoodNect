//main component

import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderWraperComponent from "./components/HeaderWraperComponent";
import WraperContainer from "./pages/WraperContainer";
import FooterComponent from "./components/FooterComponent";
import ViewResto from "./components/ViewRestoComponent";
import {RESTOS} from "./Shared/data.js";

function App(){
  return (
    <>
      <BrowserRouter>
          <HeaderWraperComponent />
           <ViewResto restaurants={RESTOS} />
          <WraperContainer />

          <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
