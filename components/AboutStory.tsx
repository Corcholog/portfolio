import Image from "next/image";
import type { Content } from "@/content";
import { aboutPhotos } from "@/content/shared";
import { visible } from "@/lib/placeholders";

export function AboutStory({ about }: { about: Content["about"] }) {
  const portraitAlt = visible(about.portraitAlt);

  return (
    <div className="max-w-prose space-y-5 text-lg leading-relaxed after:clear-both after:block">
      {portraitAlt && (
        <div className="border-line bg-card shadow-cozy float-left mr-5 mb-3 w-36 overflow-hidden rounded-2xl border p-1.5 sm:mr-6 sm:w-44">
          <Image
            src={aboutPhotos.portrait.src}
            alt={portraitAlt}
            width={aboutPhotos.portrait.width}
            height={aboutPhotos.portrait.height}
            sizes="11rem"
            className="aspect-square h-auto w-full rounded-xl object-cover"
          />
        </div>
      )}
      {about.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export function Education({
  education,
  campusAlt,
}: {
  education: Content["education"];
  campusAlt?: string | null;
}) {
  const lines = [education.unicen, education.itba, education.unlp];
  const validCampusAlt = visible(campusAlt ?? null);

  return (
    <div>
      <h3 className="font-display text-xl font-medium tracking-tight">
        {education.title}
      </h3>
      <ul className="text-muted marker:text-accent mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
        <li>{education.languages}</li>
      </ul>
      {validCampusAlt && (
        <div className="border-line bg-card shadow-cozy mt-6 max-w-sm overflow-hidden rounded-2xl border p-1.5">
          <Image
            src={aboutPhotos.campus.src}
            alt={validCampusAlt}
            width={aboutPhotos.campus.width}
            height={aboutPhotos.campus.height}
            sizes="(min-width: 1024px) 24rem, 90vw"
            className="aspect-[4/3] h-auto w-full rounded-xl object-cover"
          />
        </div>
      )}
    </div>
  );
}
