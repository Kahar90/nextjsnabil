import React from "react";
import { useContext } from "react";
import { LoginContext } from "../context";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const { isAuthenticated, setAuthenticated, isTabletOrMobile } =
    useContext(LoginContext);

  if (isAuthenticated === "true") {
    return (
      <div>
        <NavBar></NavBar>

        {children}
        <Footer> </Footer>
      </div>
    );
  } else {
    return <div>{children}</div>;
  }
};

export default Layout;
