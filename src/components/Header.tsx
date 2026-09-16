import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          Isaiah Ofalt
        </a>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>
            About
          </a>
          <a href="#skills" className={styles.navLink}>
            Skills
          </a>
          <a href="#experience" className={styles.navLink}>
            Experience
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
