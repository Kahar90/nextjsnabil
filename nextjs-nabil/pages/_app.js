import Layout from "../src/layouts/Layout";
import "../styles/globals.scss";
import LoginProvider from "../src/context";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Head>
        <link rel="icon" href="/icon.svg"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </LoginProvider>
  );
}

export default MyApp;
