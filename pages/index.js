import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";

import { getAllPosts } from "../lib/api";
import { generateFeed } from "../lib/feed";
import { getAuthors } from "../lib/data";
import styles from "../styles/posts.module.scss";
import heroImage from "../public/photos/3.jpg";

export default function Posts({ posts, authors }) {
  return (
    <>
      <Header>
        <div className={styles.heroContent}>
          <h1>团队博客</h1>
          <div className={styles.picture}>
            <div className={styles.image}>
              <Image
                src={heroImage}
                alt="TapTap 办公楼的楼梯。有个人正在上楼。"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </Header>

      <div className={styles.stage}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <section>
              <h2>最近更新</h2>

              <div className={`${styles.list} ${styles.large}`}>
                {posts.map((post) => {
                  const getAuthor = (authorId) =>
                    authors.find((author) => author.id === authorId);
                  const author = getAuthor(post.author) || {};
                  const prettyDate = new Date(post.date).toLocaleDateString(
                    "zh-CN"
                  );

                  return (
                    <Link href={post.permalink} key={post.slug}>
                      <a>
                        <article className={styles.small}>
                          <h3>{post.title}</h3>
                          <p>{post.excerpt}</p>
                          <p className={styles.metadata}>
                            {author.name || post.author} ·{" "}
                            <time dateTime={post.date}>{prettyDate}</time>
                          </p>
                        </article>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();
  generateFeed(posts);

  const authors = getAuthors();

  return {
    props: {
      posts,
      authors,
    },
  };
}
