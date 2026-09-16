export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 dark:border-white/10">
      <div className="mx-auto max-w-4xl px-6 text-sm text-foreground/50">
        © {new Date().getFullYear()} Your Name. Built with Next.js and
        Tailwind CSS.
      </div>
    </footer>
  );
}
