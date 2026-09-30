import ThemeToggle from "@/components/theme-toggle";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education-experience", label: "Background" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header id="top" className="page-width">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-10 focus:bg-page focus:p-4 focus:underline"
      >
        Skip to main content
      </a>
      <div className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-4 border-b border-line py-5 sm:py-7 md:grid-cols-[1fr_auto_auto]">
        <a
          href="#top"
          aria-label="Emil Aune Holthe — home"
          className="flex w-fit min-h-11 items-center gap-3"
        >
          <span
            className="flex size-9 items-center justify-center border border-ink font-mono text-xs tracking-tight"
            aria-hidden="true"
          >
            eah.
          </span>
          <span className="text-sm font-medium">Emil Aune Holthe</span>
        </a>
        <nav
          aria-label="Main navigation"
          className="order-3 col-span-2 md:order-none md:col-span-1"
        >
          <ul className="flex flex-wrap gap-x-6 sm:gap-x-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex min-h-11 items-center text-xs font-medium text-muted hover:text-accent sm:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
