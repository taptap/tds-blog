import style from "../styles/FollowUs.module.scss";

export default function FollowUs() {
  return (
    <div className={style.followUs}>
      <h2>关注我们</h2>
      <ul className={style.linkList}>
        <li>
          <a href="https://taptap.com">TapTap 中国大陆版</a>
        </li>
        <li>
          <a href="https://taptap.io">TapTap 国际版</a>
        </li>
        <li>
          <a href="https://developer.taptap.com">开发者中心</a>
        </li>
      </ul>
    </div>
  );
}
