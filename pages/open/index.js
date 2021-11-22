import Image from "next/image";
import Link from "next/link";

import { getAllPages } from "../../lib/api";
import style from "../../styles/open.module.scss";

export default function OpenResources({ pages }) {
  return (
    <div>
      <h1>开放资源</h1>

      <h2>工作文化</h2>

      <ul className={style.pageList}>
        {pages.map((page) => {
          return (
            <li key={page.slug}>
              <Link href={page.permalink}>
                <a>{page.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      pages: getAllPages(),
    },
  };
}
