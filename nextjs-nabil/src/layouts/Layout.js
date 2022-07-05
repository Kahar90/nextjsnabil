import React from "react";
import { useContext } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { LoginContext } from "../LoginContext";

const Layout = ({ children }) => {
  const { isAuthenticated } = useContext(LoginContext);

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
