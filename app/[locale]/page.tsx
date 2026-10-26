import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { getContent } from "@/content";
import { isLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const { meta, section } = content;

  // Section order on the page.
  const sections = [
    { id: "projects", title: section.projects },
    { id: "about", title: section.about },
    { id: "now", title: section.now },
    { id: "other", title: section.other },
    { id: "contact", title: section.contact },
  ] as const;

  return (
    <>
      <SiteHeader locale={locale} content={content} />
      <main id="top" className="mx-auto max-w-3xl px-4 pb-24">
        <section className="py-12">
          <h1 className="text-3xl font-bold">{meta.name}</h1>
          <p className="mt-2">{meta.roleLine}</p>
          <p className="mt-2">{meta.tagline}</p>
        </section>
        {sections.map(({ id, title }) => (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-title`}
            className="py-10"
          >
            <h2 id={`${id}-title`} className="text-2xl font-semibold">
              {title}
            </h2>
          </section>
        ))}
      </main>
    </>
  );
}
