import Head from "next/head";
import Footer from "../components/footer";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TapTap 开发者服务博客</title>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="订阅最新内容"
          href="/rss.xml"
        />
      </Head>

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
