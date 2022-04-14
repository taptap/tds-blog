import Nav from "../../Nav";

import styles from "./index.module.scss";

function actionClicked(e) {
  e.preventDefault();
  document.querySelector(e.target.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
}

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <Nav noShade />
      <div className={styles.contents}>
        <div className={styles.stage}>
          <div className={styles.all}>
            <div className={styles.text}>
              <div className={styles.title}>
                加入
                <img
                  className={styles.taptapInline}
                  alt="TapTap"
                  src="/taptap.svg"
                />
                开发者服务
              </div>
              <div className={styles.subtitle}>
                TapTap 开发者服务致力于为游戏开发者提供一流的工具、平台和服务
              </div>
              <a
                href="#action"
                onClick={actionClicked}
                className={styles.joinButton}
              >
                加入我们
              </a>
            </div>
            <div className={styles.tarara} />
          </div>
        </div>
      </div>
    </div>
  );
}
