import Head from "next/head";
import Footer from "../components/footer";
import posthog from "posthog-js";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    posthog.init("phc_Pa7xhS8B3uf8EUNShqJRh2KoCcvmhrTimZCYWRNmSn5", {
      api_host: "https://app.posthog.com",
    });
  }
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
