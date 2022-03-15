//header component with authenticated navigation links

import React, {useContext} from 'react'
import HeaderAuthenticatedComponent from "./HeaderAuthenticatedComponent";
import HeaderUnauthenticatedComponent from "./HeaderUnauthenticatedComponent";
import { FaSearch } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";




function HeaderWraperComponent() {
  const {isAuthenticated, showSearchBox} = useContext(AuthContext);
  const navigateTo = useNavigate();



  return (
    <>
      <div className="fluid-container p-1 fn-header-dark">
        <div id="header-wrapper-inner" className="container">
          <div className="d-flex" style={{justifyContent: "space-between"}}>
            <Link to={isAuthenticated ? ("/search") : ("/")}>
              <span className="fn-logo text-white">FN</span>
            </Link>
            
            { showSearchBox ? 
                <>
                  <div className="search-box-wrapper">
                    <input type="text" placeholder="Search..." />
                    <button className="btn btn-primary fn-search-btn">
                      <FaSearch />
                    </button>
                  </div> 
                </>
                :
                <>
                </>
            }
          
            <div className="d-flex justify-content-end align-items-center">
              <Link to={"/search"}>
                <button className="btn btn-primary fn-search-btn-pink">
                  <FaSearch />
                </button>
              </Link>
              
              { isAuthenticated ? 
                  <HeaderAuthenticatedComponent /> :
                  <HeaderUnauthenticatedComponent />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderWraperComponent;