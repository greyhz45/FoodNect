//header component with authenticated navigation links

import React, {useState} from 'react'
import HeaderAuthenticatedComponent from "./HeaderAuthenticatedComponent";
import HeaderUnauthenticatedComponent from "./HeaderUnauthenticatedComponent";
import { FaSearch } from "react-icons/fa";

function HeaderWraperComponent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <div className="fluid-container p-1 fn-header-dark">
        <div id="header-wrapper-inner" className="container">
          <div className="d-flex">
            <div className="fn-logo text-white">FN</div>
            <div className="search-box-wrapper">
              <input type="text" placeholder="Search..." />
              <button className="btn btn-primary search-btn">
                <FaSearch />
              </button>
            </div>
            <div className="d-flex justify-content-end align-items-center">
              { isAuthenticated? 
                  <HeaderUnauthenticatedComponent /> : 
                  <HeaderAuthenticatedComponent />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderWraperComponent;