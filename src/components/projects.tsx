import Image from "next/image";
import SectionHeading from "@/components/section-heading";

type Project = {
  name: string;
  category: string;
  description: string;
  contribution: string;
  technologies: string[];
  github?: string;
  demo?: string;
  screenshot?: { src: string; alt: string };
};

const projects: Project[] = [
  {
    name: "Blackjack",
    category: "Project",
    description:
      "A Blackjack project. A closer look at the implementation will be added here.",
    contribution: "Project scope and my work — to be documented.",
    technologies: [],
    github: "https://github.com/EmilAuneHolthe/Blackjack",
  },
  {
    name: "it-krigerne",
    category: "University group project",
    description:
      "A 2D action/adventure RPG inspired by early Zelda games. Developed as a team project at university.",
    contribution: "My individual contributions — to be documented.",
    technologies: ["Java", "Git", "Tiled"],
  },
  {
    name: "Tetris",
    category: "University assignment",
    description:
      "A semester assignment built on provided starter code. The project extends an existing foundation rather than starting from scratch.",
    contribution:
      "Assignment scope and the parts I implemented — to be documented.",
    technologies: [],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-line py-16 sm:py-24"
    >
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          number="02"
          label="Projects"
          title="Code, in practice."
          id="projects-heading"
        />
        <p className="max-w-xs text-sm leading-relaxed text-muted">
          Projects and coursework. The context, the code and the contributions
          behind them.
        </p>
      </div>
      <div className="mt-12">
        {projects.map((project, index) => (
          <article
            key={project.name}
            aria-labelledby={`project-${index}`}
            className="grid gap-7 border-t border-line py-9 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-[1fr_1.1fr] md:gap-12 md:py-12"
          >
            <div className="relative flex aspect-[16/10] flex-col justify-between overflow-hidden border border-line bg-surface p-6 sm:p-8">
              {project.screenshot ? (
                <Image
                  src={project.screenshot.src}
                  alt={project.screenshot.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <>
                  <div className="flex items-start justify-between font-mono text-xs text-muted">
                    <span>PROJECT / {String(index + 1).padStart(2, "0")}</span>
                    <span aria-hidden="true">+</span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="self-center font-mono text-7xl leading-none tracking-tighter text-line sm:text-8xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-mono text-[11px] text-muted">
                    Screenshot to be added
                  </p>
                </>
              )}
            </div>
            <div className="flex flex-col justify-center">
              <p className="eyebrow text-accent">{project.category}</p>
              <h3
                id={`project-${index}`}
                className="mt-3 text-3xl font-medium tracking-tight"
              >
                {project.name}
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base">
                {project.description}
              </p>
              <p className="placeholder-note mt-4 border-l-2 border-line pl-4">
                {project.contribution}
              </p>
              {project.technologies.length > 0 && (
                <ul
                  aria-label={`${project.name} technologies`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              )}
              {(project.github || project.demo) && (
                <div className="mt-5 flex flex-wrap gap-6">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-link"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      View source <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-link"
                      aria-label={`View ${project.name} demo`}
                    >
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
