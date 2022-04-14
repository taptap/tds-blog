import styles from "./index.module.scss";

export default function Benefits() {
  return (
    <div className={styles.BenefitsSection}>
      <div className={styles.stage}>
        <div className={styles.contents}>
          <h1>我们的福利</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>平等开放的工作氛围</h2>
              <div className={styles.items}>
                <span>弹性上下班时间</span>
                <span>平等讨论、效率优先</span>
                <span>高效开放的办公环境</span>
                <span>信息在内部高度透明，有充分的上下文</span>
                <span>为负责的工作做专业决策</span>
              </div>
            </div>
            <div className={styles.card}>
              <h2>极具竞争力的薪资福利</h2>
              <div className={styles.items}>
                <span>无加班文化</span>
                <span>无竞业禁止协议</span>
                <span>免费的食堂和三餐</span>
                <span>无限量的带薪休假</span>
                <span>五险一金的基础上额外的补充商业保险</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
