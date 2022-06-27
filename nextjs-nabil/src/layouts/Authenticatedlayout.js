import React from "react";
import { useState, createContext, useContext } from "react";
import { LoginContext } from "../context";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

const AuthenticatedLayout = ({ children }) => {
  const { isAuthenticated, setAuthenticated } = useContext(LoginContext);

  if (isAuthenticated === 'true') {
    return (
      <div>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </div>
    );
  } else {
    return <div>{children}</div>;
  }
};

export default AuthenticatedLayout;
