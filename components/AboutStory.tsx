import type { Content } from "@/content";

export function AboutStory({ about }: { about: Content["about"] }) {
  return (
    <div className="max-w-prose space-y-5 text-lg leading-relaxed">
      {about.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export function Education({ education }: { education: Content["education"] }) {
  const lines = [education.unicen, education.itba, education.unlp];

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
    </div>
  );
}
