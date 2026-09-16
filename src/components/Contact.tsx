const links = [
  { label: "Email", href: "mailto:you@example.com" },
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
      <p className="mt-3 max-w-xl text-foreground/70">
        Feel free to reach out — I&apos;m happy to hear about opportunities,
        collaborations, or just to chat.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
