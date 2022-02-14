import Head from "next/head";
import Header from "../../components/header";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import styles from "../../styles/post.module.scss";

const getSocialImageURL = (post) => {
  const BASE_URL = "https://blog.taptap.dev/";

  if (post.image_folder) {
    return `${BASE_URL}photos/${post.image_folder}/social.png`;
  }
  if (post.image) {
    return `${BASE_URL}photos/${post.image}`;
  }
  return `${BASE_URL}tap-icon.png`;
};

export default function Post({ post }) {
  const prettyDate = new Date(post.date).toLocaleDateString("zh-CN");

  return (
    <>
      <Head>
        <title>{post.title} | TDS 博客</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={getSocialImageURL(post)} />
        {(post.image || post.image_folder) && (
          <meta property="twitter:card" content="summary_large_image" />
        )}
      </Head>

      <Header post={post}>
        <div className={styles.heroContent}>
          <p>
            <time dateTime={post.date}>{prettyDate}</time>
          </p>

          <h1>{post.title}</h1>
        </div>
      </Header>

      <div className={styles.stage}>
        <main className={styles.main}>
          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
}
