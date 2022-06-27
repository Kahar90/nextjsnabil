import React, { useEffect } from "react";
import UserProvider, { LoginContext } from "../src/context";
import { useState, createContext, useContext } from "react";
import AuthenticatedLayout from "../src/layouts/Authenticatedlayout";
import "../styles/globals.css";
import LoginProvider from "../src/context";

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <AuthenticatedLayout>
        <Component {...pageProps} />
      </AuthenticatedLayout>
    </LoginProvider>
  );
}

export default MyApp;
