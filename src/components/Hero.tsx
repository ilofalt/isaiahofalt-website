import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <p className={styles.eyebrow}>Hi, I&apos;m</p>
      <h1 className={styles.title}>Your Name</h1>
      <p className={styles.tagline}>
        A short tagline about what you do — e.g. software engineer building
        clean, reliable web applications.
      </p>
      <p className={styles.bio}>
        A couple sentences of background: what you work on, what you&apos;re
        interested in, and what you&apos;re currently doing. Keep this brief —
        it&apos;s an introduction, not a resume.
      </p>
      <div className={styles.actions}>
        <a href="#projects" className={styles.buttonPrimary}>
          View projects
        </a>
        <a href="#contact" className={styles.buttonSecondary}>
          Get in touch
        </a>
      </div>
    </section>
  );
}
