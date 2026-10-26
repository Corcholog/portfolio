import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SiteHeader } from "@/components/SiteHeader";
import { getContent } from "@/content";
import { projectIds } from "@/content/shared";
import { isLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const { section, ui } = content;

  return (
    <>
      <a
        href="#main"
        className="bg-accent text-on-accent sr-only z-50 rounded-full text-sm font-medium focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-4 focus:py-2"
      >
        {ui.skip}
      </a>
      <SiteHeader locale={locale} content={content} />
      <main id="main" className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
        <Hero locale={locale} content={content} />
        <Section id="projects" title={section.projects}>
          <div className="mt-8 flex flex-col gap-8">
            {projectIds.map((id) => (
              <ProjectCard
                key={id}
                id={id}
                project={content.projects[id]}
                ui={ui}
              />
            ))}
          </div>
        </Section>
        <Section id="about" title={section.about} />
        <Section id="now" title={section.now} />
        <Section id="other" title={section.other} />
        <Section id="contact" title={section.contact} />
      </main>
    </>
  );
}
