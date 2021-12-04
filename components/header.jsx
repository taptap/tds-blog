import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "../styles/header.module.scss";
import logoSVG from "../public/taptap.svg";
import menuIcon from "../public/icons/menu.svg";
import closeIcon from "../public/icons/close.svg";

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
              <Link href="/">
                <a>
                  <div className={styles.logo}>
                    <Image
                      className={styles.image}
                      src={logoSVG}
                      alt="TapTap logo"
                    />
                    <div className={styles.divider} />
                    <span>开发者服务博客</span>
                  </div>
                </a>
              </Link>

              <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
                <button className={styles.menuToggle} onClick={openMenu}>
                  <Image src={menuIcon} alt="Open menu" />
                </button>

                <div className={styles.menuList} onClick={closeMenu}>
                  <button className={styles.menuToggle}>
                    <Image src={closeIcon} alt="Close menu" />
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
