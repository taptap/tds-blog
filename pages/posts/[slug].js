import Head from "next/head";
import Header from "../../components/header";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import styles from "../../styles/post.module.scss";

export default function Post({ post }) {
  const prettyDate = new Date(post.date).toLocaleDateString("zh-CN");

  const getSocialImageURL = (postImage) => {
    const BASE_URL = "https://blog.taptap.dev/";

    if (!postImage) {
      return `${BASE_URL}tap-icon.png`;
    }

    try {
      require(`../../public/photos/${postImage}`);
      return `${BASE_URL}photos/${postImage}`;
    } catch {
      return `${BASE_URL}photos/${postImage}/social.png`;
    }
  };

  return (
    <>
      <Head>
        <title>{post.title} | TDS 博客</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={getSocialImageURL(post.image)} />
        {post.image && (
          <meta property="twitter:card" content="summary_large_image" />
        )}
      </Head>

      <Header postImage={post.image}>
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

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

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
