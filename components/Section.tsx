type Props = {
  id: string;
  title: string;
  children?: React.ReactNode;
};

/** Anchored page section with its heading. */
export function Section({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-12 sm:py-16">
      <h2
        id={`${id}-title`}
        className="font-display reveal text-3xl font-medium tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
