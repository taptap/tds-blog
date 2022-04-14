import Nav from "../Nav";
import HeaderBackground from "../HeaderBackground";

import styles from "./index.module.scss";

export default function Header({ post, children }) {
  return (
    <header className={styles.header}>
      <div className={styles.background}>
        <HeaderBackground
          image={post?.image}
          image_folder={post?.image_folder}
        />
      </div>

      <div
        className={`${styles.container} ${
          post?.image || post?.image_folder ? styles.neutral : ""
        }`}
      >
        <Nav />

        <div className={styles.hero}>
          <div className={styles.stage}>{children}</div>
        </div>
      </div>
    </header>
  );
}
