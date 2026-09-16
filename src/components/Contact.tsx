import styles from "./Contact.module.css";

const links = [
  { label: "Email", href: "mailto:you@example.com" },
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Get in touch</h2>
      <p className={styles.description}>
        Feel free to reach out — I&apos;m happy to hear about opportunities,
        collaborations, or just to chat.
      </p>
      <div className={styles.links}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={styles.link}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
