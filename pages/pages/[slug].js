import Head from "next/head";
import Header from "../../components/Header";

import { getAllPages, getPageBySlug } from "../../lib/api";
import styles from "../../styles/post.module.scss";

export default function Page({ page }) {
  return (
    <>
      <Head>
        <title>{page.title} | TDS 博客</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://blog.taptap.dev/tap-icon.png"
        />
      </Head>
      <Header>
        <div className={styles.heroContent}>
          <h1>{page.title}</h1>
        </div>
      </Header>

      <div className={styles.stage}>
        <main className={styles.main}>
          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: page.body }} />
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      page: await getPageBySlug(params.slug),
    },
  };
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPages().map((page) => ({
      params: {
        slug: page.slug,
      },
    })),
  };
}
