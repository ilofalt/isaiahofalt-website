import styles from "./Projects.module.css";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of this project — what it does and the problem it solves.",
    tags: ["TypeScript", "Next.js"],
    href: "#",
  },
  {
    title: "Project Two",
    description:
      "A short description of this project — what it does and the problem it solves.",
    tags: ["Python", "APIs"],
    href: "#",
  },
  {
    title: "Project Three",
    description:
      "A short description of this project — what it does and the problem it solves.",
    tags: ["React", "Design"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <a key={project.title} href={project.href} className={styles.card}>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
