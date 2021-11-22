import Image from "next/image";
import Link from "next/link";

import { getAllPosts, getPostBySlug } from "../../lib/api";

export default function Post({ post }) {
  const prettyDate = new Date(post.createdAt).toLocaleDateString("zh-CN");

  return (
    <div className="post">
      <h1>{post.title}</h1>

      <div>
        <div>
          <time dateTime={post.createdAt}>{prettyDate}</time>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
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
