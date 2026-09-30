import SectionHeading from "@/components/section-heading";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="page-width">
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="grid gap-10 py-16 sm:py-24 md:grid-cols-[1fr_1.2fr] md:gap-16"
        >
          <SectionHeading
            number="04"
            label="Contact"
            title="Keep in touch."
            id="contact-heading"
          />
          <div>
            <p className="max-w-md text-lg leading-relaxed">
              You can find my code on GitHub. More ways to get in touch will
              follow.
            </p>
            <a
              href="https://github.com/EmilAuneHolthe"
              className="text-link mt-5"
            >
              GitHub / EmilAuneHolthe <span aria-hidden="true">↗</span>
            </a>
            <p className="placeholder-note mt-6">
              Email, LinkedIn and CV — to be added.
            </p>
          </div>
        </section>
        <div className="flex flex-col gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            Emil Aune Holthe <span aria-hidden="true">/</span> Personal
            portfolio
          </p>
          <a
            href="#top"
            className="flex min-h-11 w-fit items-center gap-3 hover:text-accent"
          >
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
