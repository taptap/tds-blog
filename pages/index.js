import Image from "next/image";
import Link from "next/link";

import { getAllPosts } from "../lib/api";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      <h1>TDS 博客</h1>

      {posts.map((post) => {
        const prettyDate = new Date(post.createdAt).toLocaleDateString("zh-CN");

        return (
          <article key={post.slug}>
            <h2>
              <Link href={post.permalink}>
                <a>{post.title}</a>
              </Link>
            </h2>

            <p>{post.excerpt}</p>

            <div>
              <div>
                <time dateTime={post.createdAt}>{prettyDate}</time>
              </div>
            </div>

            <Link href={post.permalink}>
              <a>Read more →</a>
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
