import Link from "next/link";
import styles from "../styles/footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.stage}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <section>
              <h2>关注我们</h2>

              <div className={styles.lists}>
                <div className={styles.list}>
                  <ul className={styles.small}>
                    <li>
                      <a
                        href="https://taptap.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h3>TapTap 中国大陆版</h3>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://taptap.io"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h3>TapTap 国际版</h3>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://developer.taptap.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h3>开发者中心</h3>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={styles.list}>
                  <ul className={styles.small}>
                    <li>
                      <a
                        href="https://twitter.com/taptap"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h3>@TapTap</h3>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://reddit.com/r/taptap"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h3>r/TapTap</h3>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://weibo.com/taptapgames"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h3>TapTap 官方微博</h3>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={styles.list}>
                  <ul className={styles.small}>
                    <li>
                      <a href="/rss.xml">
                        <h3>RSS Feed</h3>
                      </a>
                    </li>
                    <li>
                      <Link href="/open">
                        <a>
                          <h3>开放资源</h3>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://career.taptap.dev"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h3>加入我们</h3>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <p className={styles.copyright}>&copy; {year} TapTap</p>
        </main>
      </div>
    </footer>
  );
}
