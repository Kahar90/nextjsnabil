import React from "react";
import { useContext } from "react";
import { AppContext } from "../context";

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const { isAuthenticated } = useContext(AppContext);

  if (isAuthenticated === "true") {
    return (
      <div>
        <Navbar></Navbar>

        {children}
        <Footer> </Footer>
      </div>
    );
  } else {
    return <div>{children}</div>;
  }
};

export default Layout;
