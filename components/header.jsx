import Link from "next/link";
import { useState } from "react";

import styles from "../styles/header.module.scss";

export default function Header({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.stage}>
            <div className={styles.navContent}>
              <a
                href="https://developer.taptap.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.logo}>
                  <img src="/taptap.svg" alt="TapTap logo" />
                  <div className={styles.divider} />
                  <span>开发者服务</span>
                </div>
              </a>

              <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
                <button className={styles.menuToggle} onClick={openMenu}>
                  <img src="/icons/menu.svg" alt="Open menu" />
                </button>

                <div className={styles.menuList} onClick={closeMenu}>
                  <button className={styles.menuToggle}>
                    <img src="/icons/close.svg" alt="Close menu" />
                  </button>

                  <ul>
                    <li>
                      <Link href="/">
                        <a>团队博客</a>
                      </Link>
                    </li>
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
