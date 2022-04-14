import styles from "./index.module.scss";
import { Fade } from "react-slideshow-image";

const fadeImages = [
  "/photos/1.jpg",
  "/photos/2.jpg",
  "/photos/3.jpg",
  "/photos/4.jpg",
  "/photos/5.jpg",
];

export default function Environment() {
  return (
    <div className="slide-container">
      <div className={styles.text}>
        <h1>富有创造力的工作环境</h1>
        <h2>
          上海办公室：静安区大宁中心广场（1 号线） | 北京办公室：朝阳区东大桥（6
          号线、17 号线）
        </h2>
      </div>
      <Fade
        indicators={true}
        arrows={false}
        duration={3000}
        autoplay={true}
        pauseOnHover={false}
      >
        <div className="each-fade">
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${fadeImages[0]})` }}
          ></div>
        </div>
        <div className="each-fade">
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${fadeImages[1]})` }}
          ></div>
        </div>
        <div className="each-fade">
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${fadeImages[2]})` }}
          ></div>
        </div>
        <div className="each-fade">
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${fadeImages[3]})` }}
          ></div>
        </div>
        <div className="each-fade">
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${fadeImages[4]})` }}
          ></div>
        </div>
      </Fade>
    </div>
  );
}
