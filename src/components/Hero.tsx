export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 pb-20 pt-20 sm:pt-28">
      <p className="mb-4 text-sm font-medium text-accent">Hi, I&apos;m</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Your Name
      </h1>
      <p className="mt-4 max-w-xl text-lg text-foreground/70">
        A short tagline about what you do — e.g. software engineer building
        clean, reliable web applications.
      </p>
      <p className="mt-6 max-w-xl leading-relaxed text-foreground/70">
        A couple sentences of background: what you work on, what you&apos;re
        interested in, and what you&apos;re currently doing. Keep this brief —
        it&apos;s an introduction, not a resume.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
