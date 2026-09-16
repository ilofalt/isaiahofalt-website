import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        © {new Date().getFullYear()} Isaiah Ofalt. Built with Next.js and
        React.
      </div>
    </footer>
  );
}
