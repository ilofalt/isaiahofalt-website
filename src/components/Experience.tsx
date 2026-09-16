import styles from "./Experience.module.css";

type Job = {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    role: "Senior Software Engineer",
    company: "Intelligenesis LLC / Ennoble First",
    dates: "Oct 2023 – Present",
    bullets: [
      "Led development of a full stack application from scratch using React, Next.js, React Query, and TypeScript",
      "Owned backend architecture including Java services, PostgreSQL data layer, and all REST API design and implementation",
      "Integrated Swagger based API documentation and improved developer experience across teams",
      "Built scalable services using Docker and Kubernetes in production environments",
    ],
  },
  {
    role: "Software Engineer",
    company: "Captivation Software",
    dates: "Oct 2020 – Oct 2023",
    bullets: [
      "Built full stack applications using ReactJS, Java, and JavaScript",
      "Developed REST APIs and integrated MySQL data services",
      "Containerized applications with Docker and deployed through Ansible",
    ],
  },
  {
    role: "Software Engineer",
    company: "Boeing Intelligence and Analytics",
    dates: "Mar 2019 – Oct 2020",
    bullets: [
      "Developed Java based Hadoop analytics pipelines processing millions of records per day",
      "Worked within Linux environments using Jupyter notebooks",
    ],
  },
  {
    role: "Software Developer Associate",
    company: "General Dynamics Information Technology",
    dates: "Dec 2017 – Mar 2019",
    bullets: [
      "Maintained JavaScript user interface components",
      "Developed billing and customer database systems using SQL and Python",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.list}>
        {jobs.map((job) => (
          <div key={`${job.company}-${job.dates}`} className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3 className={styles.role}>{job.role}</h3>
              <span className={styles.dates}>{job.dates}</span>
            </div>
            <p className={styles.company}>{job.company}</p>
            <ul className={styles.bullets}>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.education}>
        <h3 className={styles.educationHeading}>Education</h3>
        <div className={styles.educationEntry}>
          <p className={styles.educationSchool}>Liberty University</p>
          <p className={styles.educationDetail}>
            Bachelor of Science in Information Technology, Data Networking
            and Security — 2018
          </p>
        </div>
      </div>
    </section>
  );
}
