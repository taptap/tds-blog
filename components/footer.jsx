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
            </section>
          </div>

          <p className={styles.copyright}>&copy; {year} TapTap</p>
        </main>
      </div>
    </footer>
  );
}
