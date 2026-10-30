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
  "border-line-strong hover:bg-chip hover:border-ink inline-flex min-h-11 items-center gap-1 rounded-full border px-5 text-sm font-medium motion-safe:transition-colors";

export function ProjectCard({ id, project, ui }: Props) {
  const facts = projectFacts[id];
  const demo = visible(facts.demo);
  const repo = visible(facts.repo);
  const pdf = visible(facts.pdf);
  const imageFacts = facts.image;
  const image = imageFacts ? visible(imageFacts.src) : null;
  const imageAlt = project.imageAlt;
  const hasImage = Boolean(imageFacts && image && imageAlt);
  const isTextWide = !hasImage;
  const result = visible(project.result);

  const resultChip = result ? (
    <p className="bg-chip text-chip-text rounded-2xl px-5 py-4 text-sm leading-relaxed">
      <span className="font-mono text-xs font-medium">
        {project.resultLabel}
      </span>
      <span aria-hidden> · </span>
      <span className="sr-only">: </span>
      {result}
    </p>
  ) : null;

  const stackList = (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {facts.stack.map((tech) => (
        <li
          key={tech}
          className="bg-chip text-chip-text rounded-full px-3 py-1 font-mono text-xs"
        >
          {tech}
        </li>
      ))}
    </ul>
  );

  const actionLinks = (demo || repo || pdf) && (
    <ul className="mt-6 flex flex-wrap gap-3">
      {demo && (
        <li>
          <ExternalLink
            href={demo}
            newTabLabel={ui.newTab}
            context={project.title}
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
            context={project.title}
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
            context={project.title}
            className={linkClass}
          >
            {ui.slides}
          </ExternalLink>
        </li>
      )}
    </ul>
  );

  return (
    <article
      id={id}
      className="group border-line bg-card reveal border-l-line-strong hover:border-l-accent focus-within:border-l-accent shadow-cozy hover:shadow-lift scroll-mt-28 rounded-3xl border border-l-4 motion-safe:transition motion-safe:duration-300"
    >
      <div
        className={`grid gap-7 p-6 sm:p-9 ${
          hasImage ? "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-9" : ""
        }`}
      >
        {imageFacts && image && imageAlt && (
          <div className="border-line bg-card shadow-cozy self-start rounded-2xl border p-2">
            <Image
              src={image}
              alt={imageAlt}
              width={imageFacts.width}
              height={imageFacts.height}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-auto w-full rounded-xl"
            />
          </div>
        )}
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display flex items-center text-2xl font-medium tracking-tight sm:text-3xl">
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
          {isTextWide ? (
            <div className="mt-4 grid gap-7 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
              <div>
                <p>{project.problem}</p>
                <ul className="text-muted marker:text-accent mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div>
                {resultChip}
                {stackList}
                {actionLinks}
              </div>
            </div>
          ) : (
            <>
              <p className="mt-4">{project.problem}</p>
              <ul className="text-muted marker:text-accent mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {resultChip && <div className="mt-6">{resultChip}</div>}
              {stackList}
              {actionLinks}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
