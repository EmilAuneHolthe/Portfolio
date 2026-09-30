export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-2xl font-semibold">
            Contact
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
            Placeholder: contact details, LinkedIn profile and CV will be added
            once the content is ready.
          </p>
          <a
            href="https://github.com/EmilAuneHolthe"
            className="mt-4 inline-block py-2 underline underline-offset-4"
          >
            GitHub — EmilAuneHolthe
          </a>
        </section>
        <div className="mt-12 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Emil Aune Holthe · Personal Portfolio</p>
          <a href="#hero" className="w-fit py-2 underline underline-offset-4">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
