import Image from "next/image";
import Link from "next/link";

import { getAllPosts } from "../lib/api";
import style from "../styles/PostList.module.scss";

export default function Posts({ posts }) {
  return (
    <div className={style.posts}>
      <h1>TDS 博客</h1>

      {posts.map((post) => {
        const prettyDate = new Date(post.date).toLocaleDateString("zh-CN");

        return (
          <article className="post" key={post.slug}>
            <h2>
              <Link href={post.permalink}>
                <a>{post.title}</a>
              </Link>
            </h2>

            <p>{post.excerpt}</p>

            <div>
              <div>
                <time dateTime={post.date}>{prettyDate}</time>
              </div>
            </div>

            <Link href={post.permalink}>
              <a>阅读全文 →</a>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts().map((post) => ({
        ...post,
      })),
    },
  };
}
