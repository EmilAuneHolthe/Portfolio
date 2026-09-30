import Projects from "@/components/projects";
import SectionHeading from "@/components/section-heading";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="page-width">
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="pb-14 pt-16 sm:pb-16 sm:pt-24 lg:pt-28"
        >
          <p className="eyebrow flex items-center gap-3">
            <span className="size-1.5 bg-accent" aria-hidden="true" />
            Computer science · University of Bergen
          </p>
          <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <h1
              id="hero-heading"
              className="text-[clamp(3.3rem,8.5vw,7rem)] font-medium leading-[1.04] tracking-[-0.065em]"
            >
              Emil Aune
              <br />
              Holthe<span className="text-accent">.</span>
            </h1>
            <div className="pb-1 md:pb-3">
              <p className="max-w-sm text-xl leading-relaxed tracking-tight sm:text-2xl">
                Computer science student.
                <br />
                Learning by building.
              </p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
                A growing collection of programming projects, university
                coursework and lessons along the way.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-7 sm:mt-14 md:flex-row md:items-center">
            <a
              href="#projects"
              className="inline-flex min-h-12 w-fit items-center gap-8 bg-ink px-5 py-3 text-sm font-medium text-page hover:bg-accent"
            >
              Explore my projects <span aria-hidden="true">↘</span>
            </a>
            <ul
              aria-label="Profile links"
              className="flex flex-wrap items-center gap-x-7 gap-y-2 text-sm"
            >
              <li>
                <a
                  href="https://github.com/EmilAuneHolthe"
                  className="text-link"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li className="text-muted">
                LinkedIn{" "}
                <span className="ml-1 font-mono text-[10px]">[soon]</span>
              </li>
              <li className="text-muted">
                CV <span className="ml-1 font-mono text-[10px]">[soon]</span>
              </li>
            </ul>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="grid gap-8 border-t border-line py-16 sm:py-24 md:grid-cols-[1fr_1.2fr] md:gap-16"
        >
          <SectionHeading
            number="01"
            label="About"
            title="A foundation in programming."
            id="about-heading"
          />
          <div>
            <p className="text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
              I’m Emil, a computer science student at the University of Bergen.
            </p>
            <p className="mt-5 text-base leading-8 text-muted">
              My programming experience includes Python, Java, Kotlin and
              functional programming through my studies. This portfolio brings
              together individual assignments and collaborative projects, with
              room to share more about the work behind each one.
            </p>
            <div className="mt-8 border-t border-line pt-5">
              <p className="eyebrow">Programming experience</p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs">
                {["Python", "Java", "Kotlin", "Functional programming"].map(
                  (skill) => (
                    <li key={skill}>{skill}</li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>

        <Projects />

        <section
          id="education-experience"
          aria-labelledby="background-heading"
          className="grid gap-10 border-t border-line py-16 sm:py-24 md:grid-cols-[1fr_1.2fr] md:gap-16"
        >
          <SectionHeading
            number="03"
            label="Education / Experience"
            title="The background."
            id="background-heading"
          />
          <div>
            <div className="border-l border-accent pl-6">
              <p className="eyebrow text-accent">Education</p>
              <h3 className="mt-3 text-xl font-medium tracking-tight sm:text-2xl">
                University of Bergen
              </h3>
              <p className="mt-2 text-base text-muted">
                Computer science studies
              </p>
              <p className="placeholder-note mt-5">
                Programme details, dates and relevant coursework — to be added.
              </p>
            </div>
            <div className="mt-10 border-l border-line pl-6">
              <h3 className="eyebrow">Experience</h3>
              <p className="placeholder-note mt-3">
                This section is taking shape. Relevant experience and activities
                will be added here.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
