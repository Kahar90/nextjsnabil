import Layout from "../src/layouts/Layout";
import "../styles/globals.scss";
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
