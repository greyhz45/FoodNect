import React, { useState, createContext } from "react";

//context creation should be outside the provider function
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const [jwtToken, setJwtToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(true);
  const [restoLink, setRestoLink] = useState([]);

  return (
    <AuthContext.Provider value={
      {
        jwtToken, setJwtToken, 
        isAuthenticated, setIsAuthenticated,
        restoLink, setRestoLink
        }
      }>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
