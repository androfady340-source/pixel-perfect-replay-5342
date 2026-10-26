interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  id: string;
}

export function SectionHeading({ index, eyebrow, title, id }: SectionHeadingProps) {
  return (
    <div
      data-reveal
      className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <p className="eyebrow">
          {index} — {eyebrow}
        </p>
        <h2 id={id} className="mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
