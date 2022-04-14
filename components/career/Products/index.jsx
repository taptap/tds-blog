import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const getElemByClass = (name) => {
  return document.getElementsByClassName(name)[0];
};

export default function Products() {
  const [progress, setProgress] = useState(0);
  const [maxSliderOffset, setMaxSliderOffset] = useState(0);
  const switchToTap = () => {
    setProgress(0);
  };
  const switchToTDS = () => {
    setProgress(1);
  };

  useEffect(() => {
    const top = getElemByClass(styles.productsSection).offsetTop;
    const animationStartY = Math.max(0, top - window.innerHeight / 4);
    const animationEndY = Math.max(100, top - window.innerHeight / 6);
    const updateMaxSliderOffset = () => {
      setMaxSliderOffset(
        getElemByClass(styles.rail).clientWidth -
          getElemByClass(styles.slider).offsetWidth
      );
    };
    const handleScroll = () => {
      // Calculated progress
      let cp =
        (window.scrollY - animationStartY) / (animationEndY - animationStartY);
      cp = cp < 0 ? 0 : cp;
      cp = cp > 1 ? 1 : cp;
      setProgress(cp);
    };
    updateMaxSliderOffset();
    document.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateMaxSliderOffset);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMaxSliderOffset);
    };
  }, []);

  return (
    <div className={styles.productsSection}>
      <div className={styles.tapBackground}></div>
      <div className={styles.tdsBackground} style={{ opacity: progress }}></div>
      <div className={styles.contents}>
        <h1>快速发展的产品服务</h1>
        <div className={styles.lowerContainerTDS}>
          <div className={styles.image}>
            <img
              className={styles.taptapUI}
              src="/career/taptap-ui.png"
              style={{ opacity: 1 - progress }}
            />
            <div
              className={styles.sausagemanContainer}
              style={{ opacity: progress }}
            >
              <img
                className={styles.tdsImage}
                src="/career/sausageman-screen.png"
              />
            </div>
          </div>
          <div className={styles.productsText}>
            <div className={styles.tabs}>
              <div
                className={styles.taptapTab}
                onClick={switchToTap}
                style={{ opacity: 1 - progress / 2 }}
              >
                <img
                  className={styles.taptapLogo}
                  alt="TapTap"
                  src="/taptap.svg"
                />
              </div>
              <div
                className={styles.tdsTab}
                onClick={switchToTDS}
                style={{ opacity: 0.5 + progress / 2 }}
              >
                <img
                  className={styles.taptapLogo}
                  alt="TapTap"
                  src="/taptap.svg"
                />
                <div>开发者服务</div>
              </div>
              <div className={styles.rail}>
                <div
                  className={styles.slider}
                  style={{ marginLeft: maxSliderOffset * progress + "px" }}
                />
              </div>
            </div>
            <div className={styles.tabContents}>
              <div
                className={styles.taptapText}
                style={{ opacity: 1 - progress }}
              >
                <p>
                  发现好游戏！秉持「官方包、不分成、精品化」商业模式，TapTap
                  现已成为游戏推荐平台，亦是高品质玩家社区
                </p>
              </div>
              <div className={styles.tdsText} style={{ opacity: progress }}>
                <p>
                  提供全套游戏生态服务。让你更方便地发布、运营并管理游戏，为全球性的游戏发行提供了完善的游戏服务和统一的
                  SDK
                </p>
              </div>
            </div>
            <a href="https://developer.taptap.com" className={styles.learnMore}>
              了解更多
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
