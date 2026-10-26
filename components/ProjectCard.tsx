import { ChevronRight } from "lucide-react";
import Image from "next/image";
import type { Content, ProjectContent } from "@/content";
import type { ProjectId } from "@/content/shared";
import { projectFacts } from "@/content/shared";
import { visible } from "@/lib/placeholders";
import { ExternalLink } from "./ExternalLink";

type Props = {
  id: ProjectId;
  project: ProjectContent;
  ui: Content["ui"];
};

const linkClass =
  "border-line-strong hover:border-ink inline-flex min-h-10 items-center gap-1 rounded-full border px-4 text-sm font-medium";

export function ProjectCard({ id, project, ui }: Props) {
  const facts = projectFacts[id];
  const demo = visible(facts.demo);
  const repo = visible(facts.repo);
  const pdf = visible(facts.pdf);
  const image = visible(facts.image.src);
  const result = visible(project.result);

  return (
    <article
      id={id}
      className="group border-line bg-card reveal border-l-line-strong hover:border-l-accent focus-within:border-l-accent scroll-mt-24 rounded-2xl border border-l-4 motion-safe:transition-colors"
    >
      <div className="grid gap-6 p-5 sm:p-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-9">
        {image && (
          <div className="border-line self-start overflow-hidden rounded-lg border">
            <Image
              src={image}
              alt={project.imageAlt}
              width={facts.image.width}
              height={facts.image.height}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        )}
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display flex items-center text-2xl font-medium tracking-tight">
              <ChevronRight
                aria-hidden
                className="text-muted group-hover:text-accent group-focus-within:text-accent -ml-1 size-6 shrink-0 motion-safe:transition-colors"
              />
              {project.title}
            </h3>
            <p className="text-muted font-mono text-xs">{project.dates}</p>
          </div>
          {project.subtitle && (
            <p className="text-muted mt-1 text-sm italic">{project.subtitle}</p>
          )}
          <p className="mt-4">{project.problem}</p>
          <ul className="text-muted marker:text-accent mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          {result && (
            <p className="bg-chip text-chip-text mt-5 rounded-lg px-4 py-3 text-sm leading-relaxed">
              <span className="font-mono text-xs font-medium">
                {project.resultLabel}
              </span>
              <span aria-hidden> · </span>
              <span className="sr-only">: </span>
              {result}
            </p>
          )}
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {facts.stack.map((tech) => (
              <li
                key={tech}
                className="border-line text-muted rounded-full border px-2.5 py-0.5 font-mono text-xs"
              >
                {tech}
              </li>
            ))}
          </ul>
          {(demo || repo || pdf) && (
            <ul className="mt-6 flex flex-wrap gap-3">
              {demo && (
                <li>
                  <ExternalLink
                    href={demo}
                    newTabLabel={ui.newTab}
                    className={linkClass}
                  >
                    {ui.demo}
                  </ExternalLink>
                </li>
              )}
              {repo && (
                <li>
                  <ExternalLink
                    href={repo}
                    newTabLabel={ui.newTab}
                    className={linkClass}
                  >
                    {ui.repo}
                  </ExternalLink>
                </li>
              )}
              {pdf && (
                <li>
                  <ExternalLink
                    href={pdf}
                    newTabLabel={ui.newTab}
                    className={linkClass}
                  >
                    {ui.slides}
                  </ExternalLink>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
