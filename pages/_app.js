import Head from "next/head";
import Footer from "../components/footer";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TapTap 开发者服务博客</title>
      </Head>

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
