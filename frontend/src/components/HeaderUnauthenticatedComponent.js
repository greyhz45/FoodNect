//header component with unauthenticated navigation links (singup, login)
//inject to HeaderWraperComponent if not authenticated

import React from 'react'
import {Link} from "react-router-dom";


function HeaderUnauthenticatedComponent() {
  return (
    <>
      <div className="d-inline-block">
        <Link to={"/login"}>
          <span className="btn fn-btn-pink">Sign In</span>
        </Link>
      </div>
      <div className="d-inline-block ms-3 fn-text-light-pink">
        <p className="m-0 p-0">
          New user? <Link to={"/signup"}> 
            <span className="fn-signup-link">Signup</span>
          </Link>
        </p>
      </div>
    </>
  )
}

export default HeaderUnauthenticatedComponent;