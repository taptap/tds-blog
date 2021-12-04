import Link from "next/link";
import Header from "../../components/header";

import { getAllPages } from "../../lib/api";
import styles from "../../styles/posts.module.scss";

export default function Open({ pages }) {
  pages.sort((first, second) => (first.slug > second.slug ? 1 : -1));

  const culturePages = pages.filter((page) => page.category === "culture");
  const guidePages = pages.filter((page) => page.category === "guide");
  const projectPages = pages.filter((page) => page.category === "project");
  const talkPages = pages.filter((page) => page.category === "talk");

  return (
    <>
      <Header>
        <div className={styles.heroContent}>
          <h1>开放资源</h1>
          <div className={styles.picture}>
            <img
              src="/photos/1.jpg"
              alt="TapTap 办公楼的公共区域。有个人正坐在椅子上使用电脑，还有两个人从旁边走过。"
            />
          </div>
        </div>
      </Header>

      <div className={styles.stage}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <section>
              <h2>在 TDS 工作</h2>

              <div className={styles.list}>
                <ul className={styles.small}>
                  {culturePages.map((page) => (
                    <li key={page.slug}>
                      <Link href={page.permalink}>
                        <a>
                          <h3>{page.title}</h3>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2>指南文档</h2>

              <div className={`${styles.list} ${styles.small}`}>
                <p>
                  这是一些我们内部使用的指南性文档，在这里开放出来以期对其他人也有参考价值。
                </p>
                <ul className={styles.small}>
                  {guidePages.map((page) => (
                    <li key={page.slug}>
                      <Link href={page.permalink}>
                        <a>
                          <h3>{page.title}</h3>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2>开源项目</h2>

              <div className={styles.list}>
                <ul className={styles.small}>
                  {projectPages.map((page) => (
                    <li key={page.slug}>
                      <a href={page.url} target="_blank" rel="noreferrer">
                        <h3>{page.title}</h3>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2>讲座视频</h2>

              <div className={styles.list}>
                <ul className={styles.small}>
                  {talkPages.map((page) => (
                    <li key={page.slug}>
                      <a href={page.url} target="_blank" rel="noreferrer">
                        <h3>{page.title}</h3>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      pages: getAllPages(),
    },
  };
}
