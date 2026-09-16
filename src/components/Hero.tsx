import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <p className={styles.eyebrow}>Hi, I&apos;m</p>
      <h1 className={styles.title}>Isaiah Ofalt</h1>
      <p className={styles.tagline}>
        Senior Software Engineer | Full Stack Engineer
      </p>
      <p className={styles.location}>Denver Metropolitan Area, CO</p>
      <p className={styles.bio}>
        Software engineer with over 8 years of experience building full
        stack applications and scalable backend systems. Expertise in Java
        services, React and Next.js with TypeScript, REST APIs, and
        PostgreSQL. Strong focus on performance, maintainability, and
        end-to-end ownership in production environments.
      </p>
      <div className={styles.actions}>
        <a href="#experience" className={styles.buttonPrimary}>
          View experience
        </a>
        <a href="#contact" className={styles.buttonSecondary}>
          Get in touch
        </a>
        <a
          href="/Isaiah-Ofalt-Resume.pdf"
          download
          className={styles.buttonSecondary}
        >
          Download resume
        </a>
      </div>
    </section>
  );
}
