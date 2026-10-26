import {
  Award,
  FlaskConical,
  Gamepad2,
  GraduationCap,
  Layers,
  Map as MapIcon,
  Smartphone,
  Sparkles,
  Swords,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import type { Content } from "@/content";
import {
  timelineFacts,
  timelineIds,
  type TimelineIcon,
} from "@/content/shared";
import { visible } from "@/lib/placeholders";

const icons: Record<TimelineIcon, LucideIcon> = {
  swords: Swords,
  layers: Layers,
  gamepad: Gamepad2,
  smartphone: Smartphone,
  "graduation-cap": GraduationCap,
  map: MapIcon,
  flask: FlaskConical,
  trophy: Trophy,
  award: Award,
  sparkles: Sparkles,
};

/**
 * Vertical timeline, oldest first. Each milestone is a "save point" (a diamond on
 * the line); the last one, today, is hollow. A milestone shows its photo only when
 * both the photo and its alt text exist, otherwise just its icon.
 */
export function Timeline({ items }: { items: Content["timeline"] }) {
  return (
    <ol className="border-line-strong ml-1.5 border-l border-dashed">
      {timelineIds.map((id, index) => {
        const item = items[id];
        const facts = timelineFacts[id];
        const Icon = icons[facts.icon];
        const photo = visible(facts.photo);
        const photoAlt = visible(item.photoAlt);
        const isLast = index === timelineIds.length - 1;

        return (
          <li key={id} className="reveal relative pb-9 pl-8 last:pb-0">
            <span
              aria-hidden
              className={
                isLast
                  ? "border-accent bg-bg absolute top-1.5 -left-[7px] size-3.5 rotate-45 border-2"
                  : "bg-accent absolute top-1.5 -left-[6px] size-3 rotate-45"
              }
            />
            <p className="text-accent font-mono text-xs">{item.when}</p>
            <h3 className="font-display mt-1 flex items-start gap-2 text-xl font-medium tracking-tight">
              <Icon
                aria-hidden
                className="text-muted mt-[0.4em] size-[18px] shrink-0"
              />
              {item.title}
            </h3>
            <p className="text-muted mt-1">{item.line}</p>
            {photo && photoAlt && (
              <div className="border-line relative mt-4 aspect-[4/3] max-w-sm overflow-hidden rounded-xl border">
                <Image
                  src={photo}
                  alt={photoAlt}
                  fill
                  sizes="(min-width: 1024px) 24rem, 90vw"
                  className="object-cover"
                />
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
