type SectionHeadingProps = {
  number: string;
  label: string;
  title: string;
  id: string;
};

export default function SectionHeading({
  number,
  label,
  title,
  id,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="eyebrow flex items-center gap-3">
        <span className="text-accent">{number}</span>
        <span>{label}</span>
      </p>
      <h2
        id={id}
        className="mt-5 text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}
