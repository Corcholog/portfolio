import type { Content } from "@/content";
import { mmm } from "@/content/shared";
import { formatProgress } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { ExternalLink } from "./ExternalLink";
import { Pipeline } from "./Pipeline";
import { RekindleNow } from "./RekindleNow";

type Props = {
  locale: Locale;
  content: Content;
};

export function NowSection({ locale, content }: Props) {
  const { now, ui } = content;
  const { done, total } = mmm.progress;
  const percent = Math.round((done / total) * 1000) / 10;

  return (
    <div className="mt-8 space-y-14">
      <div className="reveal">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-14">
          <div>
            <h3 className="font-display text-2xl font-medium tracking-tight">
              {now.mmm.title}
            </h3>
            <p className="mt-3 max-w-prose">{now.mmm.intro}</p>
            <ul className="text-muted marker:text-accent mt-4 max-w-prose list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {now.mmm.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="mt-6">
              <ExternalLink
                href={mmm.repo}
                newTabLabel={ui.newTab}
                context={mmm.name}
                className="border-line-strong hover:bg-chip hover:border-ink inline-flex min-h-11 items-center gap-1 rounded-full border px-5 text-sm font-medium motion-safe:transition-colors"
              >
                {ui.repo}
              </ExternalLink>
            </div>
          </div>
          <div className="border-line bg-card self-start rounded-3xl border p-6">
            <p className="font-medium">
              {formatProgress(now.mmm.progress, locale, mmm.progress)}
            </p>
            <div aria-hidden className="bg-chip mt-3 h-2.5 rounded-full">
              <div
                className="bg-accent h-full rounded-full"
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="text-muted mt-4 text-sm leading-relaxed">
              {now.mmm.reviewerMetric}
            </p>
          </div>
        </div>
      </div>

      <div className="reveal">
        <Pipeline pipeline={now.mmm.pipeline} />
      </div>

      <RekindleNow locale={locale} content={now.rekindle} />
    </div>
  );
}
