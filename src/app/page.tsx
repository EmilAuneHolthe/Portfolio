import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-6">
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="py-16 sm:py-24"
        >
          <p className="text-sm text-neutral-600">Personal Portfolio</p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Emil Aune Holthe
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
            Computer science student at the University of Bergen.
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600">
            This portfolio is under development. Placeholder: a short introduction
            will go here.
          </p>
          <a
            href="#projects"
            className="mt-6 inline-block py-2 underline underline-offset-4"
          >
            Explore projects
          </a>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-t border-neutral-200 py-12 sm:py-16"
        >
          <h2 id="about-heading" className="text-2xl font-semibold">
            About
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-neutral-700">
            <p>
              I study computer science at the University of Bergen. My
              programming experience includes Python, Java, Kotlin and functional
              programming through my studies.
            </p>
            <p className="text-neutral-600">
              Placeholder: more about my background, interests and what I would
              like to work on.
            </p>
          </div>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="border-t border-neutral-200 py-12 sm:py-16"
        >
          <h2 id="projects-heading" className="text-2xl font-semibold">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
            Placeholder: project descriptions, screenshots and demos will be
            developed later.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <article className="border-t border-neutral-200 pt-6">
              <h3 className="text-lg font-semibold">Blackjack</h3>
              <p className="mt-3 leading-relaxed text-neutral-600">
                Placeholder: project overview, technologies and my work on the
                project.
              </p>
              <a
                href="https://github.com/EmilAuneHolthe/Blackjack"
                className="mt-4 inline-block py-2 underline underline-offset-4"
              >
                View Blackjack on GitHub
              </a>
            </article>
            <article className="border-t border-neutral-200 pt-6">
              <h3 className="text-lg font-semibold">it-krigerne</h3>
              <p className="mt-3 leading-relaxed text-neutral-700">
                A university group project: a 2D action/adventure RPG inspired by
                early Zelda games, developed in Java.
              </p>
              <p className="mt-3 leading-relaxed text-neutral-600">
                Placeholder: my contributions and lessons from working with the
                team.
              </p>
            </article>
            <article className="border-t border-neutral-200 pt-6">
              <h3 className="text-lg font-semibold">Tetris</h3>
              <p className="mt-3 leading-relaxed text-neutral-700">
                A university semester assignment built on provided starter code.
              </p>
              <p className="mt-3 leading-relaxed text-neutral-600">
                Placeholder: assignment scope and the parts I implemented.
              </p>
            </article>
          </div>
        </section>

        <section
          id="education-experience"
          aria-labelledby="education-experience-heading"
          className="border-t border-neutral-200 py-12 sm:py-16"
        >
          <h2 id="education-experience-heading" className="text-2xl font-semibold">
            Education / Experience
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Education</h3>
              <p className="mt-3 font-medium">University of Bergen</p>
              <p className="mt-1 leading-relaxed text-neutral-700">
                Computer science studies
              </p>
              <p className="mt-3 leading-relaxed text-neutral-600">
                Placeholder: programme details, dates and relevant coursework.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Experience</h3>
              <p className="mt-3 leading-relaxed text-neutral-600">
                Placeholder: relevant work experience and other activities will
                be added once the content is decided.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
