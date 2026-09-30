const navigation = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education-experience", label: "Education / Experience" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-neutral-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:bg-white focus:p-4 focus:underline"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
        <a href="#hero" className="w-fit font-semibold">
          Emil Aune Holthe
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-700">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-block py-2 underline-offset-4 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
