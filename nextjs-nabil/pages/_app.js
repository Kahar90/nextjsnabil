import React from "react";
import Layout from "../src/layouts/Layout";
import "../styles/globals.scss";
import AppProvider from "../src/AppContext";
import Head from "next/head";
import LoginProvider from "../src/LoginContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <LoginProvider>
        <Head>
          <link rel="icon" href="/icon.svg"></link>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoginProvider>
    </AppProvider>
  );
}

export default MyApp;
