import styles from "./index.module.scss";
import Head from "next/head";
import Hero from "../Hero";
import Products from "../Products";
import Environment from "../Environment";
import Benefits from "../Benefits";

export default function Template({ children }) {
  return (
    <div className={styles.container}>
      <img
        style={{ display: "none" }}
        src="https://blog.taptap.dev/career/wechat.png"
      />
      <Head>
        <title>加入 TapTap Developer Services 团队</title>
        <meta name="description" content="TDS 多个职位火热招聘中" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gamesTapTap" />
        <meta name="twitter:creator" content="@jiangh" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="加入 TapTap Developer Services 团队" />
        <meta name="og:description" content="TDS 多个职位火热招聘中" />
        <meta
          name="og:image"
          content="https://blog.taptap.dev/career/card.png"
        />
        <meta name="og:url" content="https://blog.taptap.dev/career" />
        <link
          rel="icon"
          href="//assets.tapimg.com/developer-center-v2/favicon.ico"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Products />
        <a id="action"></a>
        {children}
        <Environment />
        <Benefits />
      </main>
    </div>
  );
}
