import Head from "next/head";
import Header from "../../components/header";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import styles from "../../styles/post.module.scss";

export default function Post({ post }) {
  const prettyDate = new Date(post.date).toLocaleDateString("zh-CN");
  const postImage = post.image && require(`../../public/photos/${post.image}`);

  return (
    <>
      <Head>
        <title>{post.title} | TDS 博客</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:image"
          content="https://blog.taptap.dev/tap-icon.png"
        />
      </Head>

      <Header postImage={postImage}>
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
