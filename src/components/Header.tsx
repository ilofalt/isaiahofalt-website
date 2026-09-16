export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/80 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-tight">
          Your Name
        </a>
        <nav className="flex gap-6 text-sm text-foreground/70">
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="#projects" className="transition-colors hover:text-foreground">
            Projects
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
