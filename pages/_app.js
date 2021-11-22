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
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>TDS Blog</a>
              </Link>
            </li>

            <li>
              <Link href="/work-here">
                <a>Work@TDS</a>
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
