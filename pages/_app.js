import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="http://taptap.com">
                <a className="logo">
                  <Image
                    src="/taptap.svg"
                    alt="TapTap logo"
                    width="112.5px"
                    height="33.3px"
                  />
                  开发者服务
                </a>
              </Link>
            </li>
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
          </ul>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
