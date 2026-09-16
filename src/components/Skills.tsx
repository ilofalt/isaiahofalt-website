import styles from "./Skills.module.css";

const skillCategories = [
  { label: "Languages", skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"] },
  { label: "Frontend", skills: ["ReactJS", "Next.js", "React Query"] },
  { label: "Backend", skills: ["REST APIs", "Swagger", "Microservices"] },
  { label: "Data", skills: ["PostgreSQL", "MySQL", "ElasticSearch", "Hadoop"] },
  { label: "DevOps", skills: ["Docker", "Kubernetes", "Ansible", "Terraform", "AWS"] },
  { label: "Systems", skills: ["Linux", "CentOS", "RHEL"] },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.heading}>Core Technologies</h2>
      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <div key={category.label} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.label}</h3>
            <div className={styles.tags}>
              {category.skills.map((skill) => (
                <span key={skill} className={styles.tag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
