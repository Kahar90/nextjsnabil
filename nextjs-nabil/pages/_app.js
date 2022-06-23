import React, { useEffect } from "react";
import { LoginContext } from "../src/context";
import { useState, createContext, useContext } from "react";
import AuthenticatedLayout from "../src/layouts/Authenticatedlayout";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {

const [isAuthenticated, setAuthenticated] = useState(false);
  
const authlogic = (value) => {
  setAuthenticated(value)
  console.log("test kepajggil")
  console.log(isAuthenticated)
};
    
  
  return (
    <LoginContext.Provider value={{isAuthenticated: isAuthenticated, authlogic: authlogic }}>
        <AuthenticatedLayout>
        <Component {...pageProps} />  
        </AuthenticatedLayout> 
    </LoginContext.Provider>
  );
}

export default MyApp;

