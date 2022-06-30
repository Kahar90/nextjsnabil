import Layout from "../src/layouts/Layout";
import "../styles/globals.scss";
import AppProvider from "../src/context";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <link rel="icon" href="/icon.svg"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </AppProvider>
  );
}

export default MyApp;
