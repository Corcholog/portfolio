import { notFound } from "next/navigation";
import { AboutStory, Education } from "@/components/AboutStory";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { NowSection } from "@/components/NowSection";
import { OtherWork } from "@/components/OtherWork";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Timeline } from "@/components/Timeline";
import { getContent } from "@/content";
import { identity, projectIds } from "@/content/shared";
import { isLocale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const { section, ui } = content;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: identity.name,
    jobTitle: content.meta.roleLine,
    url: `${getSiteUrl()}/${locale}`,
    sameAs: [identity.linkedin, identity.github],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
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
        <Section id="about" title={section.about} band>
          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:col-start-1 lg:row-start-1">
              <AboutStory about={content.about} />
            </div>
            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <Timeline items={content.timeline} />
            </div>
            <div className="lg:col-start-1 lg:row-start-2 lg:self-center">
              <Education
                education={content.education}
                campusAlt={content.about.campusAlt}
              />
            </div>
          </div>
        </Section>
        <Section id="now" title={section.now}>
          <NowSection locale={locale} content={content} />
        </Section>
        <Section id="other" title={section.other} band>
          <OtherWork other={content.other} />
        </Section>
        <Section id="contact" title={section.contact}>
          <ContactSection locale={locale} content={content} />
        </Section>
      </main>
      <SiteFooter locale={locale} content={content} />
    </>
  );
}
