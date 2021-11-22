import Link from "next/link";

import { getAllPages, getPageBySlug } from "../../lib/api";

export default function Page({ page }) {
  return (
    <div>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
    </div>
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
