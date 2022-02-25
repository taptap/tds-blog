import Head from "next/head";
import Header from "../../components/header";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { getAuthors } from "../../lib/data";
import styles from "../../styles/post.module.scss";
import Image from "next/image";
import enterIcon from "../../public/icons/enter.svg";

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

export default function Post({ post, authors }) {
  const getAuthor = (authorId) =>
    authors.find((author) => author.id === authorId);
  const author = getAuthor(post.author) || {};
  const prettyDate = new Date(post.date).toLocaleDateString("zh-CN");

  const AuthorPanel = () =>
    author.url ? (
      <a href={author.url} target="_blank" rel="noreferrer">
        <div className={styles.authorPanel}>
          <p>
            <span className={styles.name}>{author.name || post.author}</span>
            {author.bio && (
              <>
                {" "}
                · <span className={styles.bio}>{author.bio}</span>
              </>
            )}
          </p>
          <p className={styles.url}>
            访问作者网站{" "}
            <Image
              src={enterIcon}
              alt="Open"
              objectFit="contain"
              priority="true"
            />
          </p>
        </div>
      </a>
    ) : null;

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
          <p className={styles.metadata}>
            {author.name || post.author} ·{" "}
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

          <AuthorPanel />
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  const authors = getAuthors();

  return {
    props: {
      post,
      authors,
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
