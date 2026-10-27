import type { Content } from "@/content";
import { otherFacts, otherIds } from "@/content/shared";

/** Compact list of smaller projects: one row each, no cards. */
export function OtherWork({ other }: { other: Content["other"] }) {
  return (
    <ul className="border-line mt-8 border-t">
      {otherIds.map((id) => {
        const item = other[id];
        return (
          <li
            key={id}
            className="border-line reveal grid gap-3 border-b py-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-10"
          >
            <div>
              <h3 className="font-display text-xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="text-muted mt-1 font-mono text-xs">{item.dates}</p>
            </div>
            <div>
              <p className="max-w-prose">{item.description}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {otherFacts[id].stack.map((tech) => (
                  <li
                    key={tech}
                    className="bg-chip text-chip-text rounded-full px-3 py-1 font-mono text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
