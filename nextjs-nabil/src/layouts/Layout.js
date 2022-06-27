import React from "react";
import { useState, createContext, useContext } from "react";
import { LoginContext } from "../context";
import FooterDesktop from "../components/FooterDesktop";
import NavBarDesktop from "../components/NavBarDesktop";
import { Drawer } from "@mui/material";
import NavBarMobile from "../components/NavbarMobile";
import FooterMobile from "../components/FooterMobile";

const Layout = ({ children }) => {
  const { isAuthenticated, setAuthenticated, isTabletOrMobile } =
    useContext(LoginContext);

  if (isAuthenticated === "true" && isTabletOrMobile) {
    return (
      <div>
        <NavBarMobile></NavBarMobile>
        
        {children}
        <FooterMobile></FooterMobile>
      </div>
    );
  } else if (isAuthenticated === "true" && !isTabletOrMobile) {
    return (
      <div>
        <NavBarDesktop></NavBarDesktop>
        {children}
        <FooterDesktop></FooterDesktop>
      </div>
    );
  } else {
    return <div>{children}</div>;
  }
};

export default Layout;
