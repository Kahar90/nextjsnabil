import React, { useEffect } from "react";
import UserProvider, { LoginContext } from "../src/context";
import { useState, createContext, useContext } from "react";
import Layout from "../src/layouts/Layout";
import "../styles/globals.css";
import LoginProvider from "../src/context";

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoginProvider>
  );
}

export default MyApp;
