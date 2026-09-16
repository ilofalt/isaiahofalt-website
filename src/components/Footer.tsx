import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        © {new Date().getFullYear()} Your Name. Built with Next.js and React.
      </div>
    </footer>
  );
}
