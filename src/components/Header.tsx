import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          Your Name
        </a>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>
            About
          </a>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
