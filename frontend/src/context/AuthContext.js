//by default context hook passes props down from parent to child
//in order to reverse the flow of prop we need "custom hook"

import React, { useState, createContext } from "react";

//context creation should be outside the provider function
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [jwtToken, setJwtToken] = useState({});

  return (
    <AuthContext.Provider value={{jwtToken, setJwtToken}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
