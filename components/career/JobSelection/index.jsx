import { useRouter } from "next/router";
import styles from "./index.module.scss";
import Job from "../Job";

export default function JobSelection({ job, allJobs }) {
  const router = useRouter();

  const change = (e) => {
    router.push(`/career/?job=${e.target.value}`, null, {
      scroll: false,
      shallow: true,
    });
  };
  return (
    <div className={styles.jobsSection}>
      <div className={styles.stage}>
        <div className={styles.contents}>
          <h1>探索你感兴趣的职位</h1>
          <p>
            目前我们在招聘以下这些职位，如果其中有适合你的，可提交申请至{" "}
            <a href="mailto:tds-jobs@taptap.com">tds-jobs@taptap.com</a>。
          </p>
          <div className={styles.selection}>
            <select onChange={change} value={job.slug}>
              {allJobs.map((j) => (
                <option key={j.slug} value={j.slug}>
                  {j.title}
                </option>
              ))}
            </select>
            <a href="mailto:tds-jobs@taptap.com">提交简历</a>
          </div>
          {job && <Job job={job} />}
        </div>
      </div>
    </div>
  );
}
