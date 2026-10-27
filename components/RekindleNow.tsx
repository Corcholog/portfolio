import type { Content } from "@/content";
import { modelIds, rekindleEval } from "@/content/shared";
import { fillTemplate } from "@/lib/format";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  content: Content["now"]["rekindle"];
};

/** On small screens every cell becomes a labeled line; from `sm` it is a normal table. */
const cell =
  "flex items-baseline justify-between gap-4 py-1 before:text-muted before:max-w-[55%] before:text-xs before:content-[attr(data-label)] sm:table-cell sm:px-4 sm:py-3 sm:before:hidden";

export function RekindleNow({ locale, content }: Props) {
  // Same "95%" in both languages: Spanish Intl output would add a space before "%".
  const percent = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });
  const seconds = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  const { pairs, connections } = rekindleEval;
  const headers = [
    content.columns.model,
    content.columns.precision,
    content.columns.found,
    content.columns.latency,
  ];

  return (
    <div className="border-line reveal border-t pt-8">
      <h3 className="font-display text-2xl font-medium tracking-tight">
        {content.title}
      </h3>
      <p className="mt-3 max-w-prose">{content.intro}</p>
      <p className="text-muted mt-3 max-w-prose">{content.text}</p>
      <p className="mt-4">
        <a
          href="#rekindle"
          className="text-accent inline-flex min-h-10 items-center text-sm font-medium underline underline-offset-4"
        >
          {content.seeProject}
        </a>
      </p>

      <h4 className="font-display mt-10 text-xl font-medium tracking-tight">
        {content.evalTitle}
      </h4>
      <div className="border-line-strong bg-card shadow-cozy mt-4 overflow-hidden rounded-2xl border">
        <table role="table" className="block w-full text-left text-sm sm:table">
          <caption className="sr-only">{content.evalTitle}</caption>
          <thead
            role="rowgroup"
            className="sr-only sm:not-sr-only sm:table-header-group"
          >
            <tr
              role="row"
              className="border-line-strong bg-band text-muted font-mono text-xs sm:table-row sm:border-b"
            >
              {headers.map((header) => (
                <th
                  key={header}
                  role="columnheader"
                  scope="col"
                  className="px-4 py-3 font-medium sm:table-cell"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody role="rowgroup" className="block sm:table-row-group">
            {modelIds.map((id) => {
              const model = content.models[id];
              const data = rekindleEval.models[id];
              const isDefault = id === rekindleEval.defaultModel;

              return (
                <tr
                  key={id}
                  role="row"
                  className={`border-line block border-b p-4 last:border-b-0 sm:table-row sm:p-0 ${
                    isDefault ? "bg-chip" : ""
                  }`}
                >
                  <th
                    role="rowheader"
                    scope="row"
                    className="block pb-2 text-left font-normal sm:table-cell sm:px-4 sm:py-3"
                  >
                    <span className="font-medium">{model.name}</span>
                    <br />
                    <span className="text-muted text-xs">{model.note}</span>
                  </th>
                  <td
                    role="cell"
                    data-label={content.columns.precision}
                    className={cell}
                  >
                    <span className="font-mono">
                      {percent.format(data.precision * 100)}%
                    </span>
                  </td>
                  <td
                    role="cell"
                    data-label={content.columns.found}
                    className={cell}
                  >
                    {fillTemplate(content.found, {
                      found: data.found,
                      total: connections,
                      extra: data.extra,
                    })}
                  </td>
                  <td
                    role="cell"
                    data-label={content.columns.latency}
                    className={cell}
                  >
                    <span className="font-mono">
                      {seconds.format(data.latency)} s
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-muted mt-3 text-sm leading-relaxed">
        {fillTemplate(content.evalCaption, { pairs, connections })}
      </p>
    </div>
  );
}
