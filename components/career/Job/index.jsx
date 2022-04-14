import styles from "./index.module.scss";

export default function Job({ job }) {
  return (
    <div className={styles.job}>
      <div className={styles.requirements}>
        <h2>要求</h2>
        <ul>
          {job.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
        {job.bonuses && (
          <>
            <h2>加分项</h2>
            <ul>
              {job.bonuses.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className={styles.responsibilities}>
        <h2>职责</h2>
        <ul>
          {job.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
