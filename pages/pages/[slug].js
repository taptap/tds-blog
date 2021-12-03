import Header from "../../components/header";

import { getAllPages, getPageBySlug } from "../../lib/api";
import styles from "../../styles/post.module.scss";

export default function Page({ page }) {
  return (
    <>
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

export function getStaticProps({ params }) {
  return {
    props: {
      page: getPageBySlug(params.slug),
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
