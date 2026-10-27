import { ChevronDown, ChevronRight } from "lucide-react";
import type { Content } from "@/content";

type PipelineContent = Content["now"]["mmm"]["pipeline"];

const stages = ["scout", "translator", "checks", "reviewer", "human"] as const;

/**
 * The My Merry May translation pipeline as a native diagram: five steps in order
 * (vertical on small screens, a row on large ones) over a strip with the memory
 * shared between batches. Text comes from the content files, colors from the
 * theme, so it translates and follows light/dark.
 */
export function Pipeline({ pipeline }: { pipeline: PipelineContent }) {
  return (
    <div>
      <h4 className="font-display text-xl font-medium tracking-tight">
        {pipeline.title}
      </h4>
      <ol className="mt-5 grid gap-8 lg:grid-cols-5 lg:gap-6">
        {stages.map((key, index) => {
          const stage = pipeline[key];
          const isLast = index === stages.length - 1;
          const isHuman = key === "human";

          return (
            <li
              key={key}
              className={`bg-card relative rounded-2xl border p-4 ${
                isHuman ? "border-accent" : "border-line"
              }`}
            >
              <p className="text-accent font-mono text-xs">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="font-display mt-1 text-lg font-medium">
                {stage.name}
              </p>
              <p className="text-muted mt-1 text-sm leading-relaxed">
                {stage.detail}
              </p>
              {!isLast && (
                <span
                  aria-hidden
                  className="text-accent absolute -bottom-6 left-1/2 -translate-x-1/2 lg:top-1/2 lg:-right-[1.375rem] lg:bottom-auto lg:left-auto lg:translate-x-0 lg:-translate-y-1/2"
                >
                  <ChevronDown className="size-5 lg:hidden" />
                  <ChevronRight className="hidden size-5 lg:block" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <p className="border-line-strong text-muted mt-8 rounded-2xl border border-dashed px-4 py-3 text-sm leading-relaxed">
        {pipeline.memory}
      </p>
      <p className="text-muted mt-2 text-xs">{pipeline.referenceNote}</p>
    </div>
  );
}
