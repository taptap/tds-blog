import Link from "next/link";
import Image from "next/image";

import Header from "../../components/header";
import { getTalks, getProjects } from "../../lib/data";
import { getAllPages } from "../../lib/api";
import styles from "../../styles/posts.module.scss";
import heroImage from "../../public/photos/1.jpg";

export default function Open({ pages, talks, projects }) {
  pages.sort((first, second) => (first.slug > second.slug ? 1 : -1));

  const culturePages = pages.filter((page) => page.category === "culture");
  const guidePages = pages.filter((page) => page.category === "guide");

  return (
    <>
      <Header>
        <div className={styles.heroContent}>
          <h1>开放资源</h1>
          <div className={styles.picture}>
            <div className={styles.image}>
              <Image
                src={heroImage}
                alt="TapTap 办公楼的公共区域。有个人正坐在椅子上使用电脑，还有两个人从旁边走过。"
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
                  {projects.map((project) => (
                    <li key={project.url}>
                      <a href={project.url} target="_blank" rel="noreferrer">
                        <h3>{project.title}</h3>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2>讲座视频</h2>

              <div className={`${styles.list} ${styles.small}`}>
                <p>
                  以下是心动和 TapTap
                  同事做的内部分享，在征得讲师同意后公开出来，希望对更多人产生价值。
                </p>
                <ul className={styles.small}>
                  {talks.map((t) => (
                    <li key={t.url}>
                      <a href={t.url} target="_blank" rel="noreferrer">
                        <h3>{t.title}</h3>
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
      talks: getTalks(),
      projects: getProjects()
    },
  };
}
