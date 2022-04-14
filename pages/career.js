import { getJobs } from "../lib/data";
import { useRouter } from "next/router";
import Template from "../components/career/Template";
import JobSelection from "../components/career/JobSelection";

export default function Career({ jobs }) {
  const router = useRouter();
  const slug = router.query.job;
  let job = jobs.find((j) => j.slug === slug);
  if (!job && jobs.length > 0) {
    job = jobs[0];
  }

  return (
    <Template>
      <JobSelection job={job} allJobs={jobs} />
    </Template>
  );
}

export async function getStaticProps() {
  const jobs = getJobs();
  return {
    props: { jobs },
  };
}
