import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logoSVG from "../../public/taptap.svg";
import menuIcon from "../../public/icons/menu.svg";
import closeIcon from "../../public/icons/close.svg";

import styles from "./index.module.scss";

export default function Nav({ noShade }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${noShade ? "" : styles.withShade}`}>
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
                  <Link href="/career">
                    <a>加入我们</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
