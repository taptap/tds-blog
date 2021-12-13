import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HeaderBackground from "./HeaderBackground";

import styles from "../styles/header.module.scss";
import logoSVG from "../public/taptap.svg";
import menuIcon from "../public/icons/menu.svg";
import closeIcon from "../public/icons/close.svg";

export default function Header({ post, children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

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
        <nav className={styles.nav}>
          <div className={styles.stage}>
            <div className={styles.navContent}>
              <Link href="/">
                <a>
                  <div className={styles.logo}>
                    <div className={styles.image}>
                      <Image
                        src={logoSVG}
                        alt="TapTap logo"
                        layout="fill"
                        objectFit="contain"
                        priority="true"
                      />
                    </div>
                    <div className={styles.divider} />
                    <span>开发者服务博客</span>
                  </div>
                </a>
              </Link>

              <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
                <button className={styles.menuToggle} onClick={openMenu}>
                  <Image
                    src={menuIcon}
                    alt="Open menu"
                    layout="fill"
                    objectFit="contain"
                    priority="true"
                  />
                </button>

                <div className={styles.menuList} onClick={closeMenu}>
                  <button className={styles.menuToggle}>
                    <Image
                      src={closeIcon}
                      alt="Close menu"
                      layout="fill"
                      objectFit="contain"
                      priority="true"
                    />
                  </button>

                  <ul>
                    <li>
                      <Link href="/open">
                        <a>开放资源</a>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://career.taptap.dev"
                        target="_blank"
                        rel="noreferrer"
                      >
                        加入我们
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className={styles.hero}>
          <div className={styles.stage}>{children}</div>
        </div>
      </div>
    </header>
  );
}
