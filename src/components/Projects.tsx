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
    <section id="projects" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group rounded-2xl border border-black/10 p-6 transition-colors hover:border-black/20 dark:border-white/10 dark:hover:border-white/20"
          >
            <h3 className="font-medium transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-foreground/70 dark:bg-white/10"
                >
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
