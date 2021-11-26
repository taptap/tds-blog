import Image from "next/image";
import Link from "next/link";

import { getAllPages } from "../../lib/api";
import style from "../../styles/open.module.scss";

export default function OpenResources({ pages }) {
  const culturePages = pages.filter((page) => page.category === "culture");
  const projectPages = pages.filter((page) => page.category === "project");
  return (
    <div>
      <h1>开放资源</h1>

      <h2>在 TDS 工作</h2>

      <ul className={style.pageList}>
        {culturePages.map((page) => {
          return (
            <li key={page.slug}>
              <Link href={page.permalink}>
                <a>{page.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>

      <h2>开源项目</h2>
      <ul className={style.pageList}>
        {projectPages.map((page) => {
          return (
            <li key={page.slug}>
              <Link href={page.url}>
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
