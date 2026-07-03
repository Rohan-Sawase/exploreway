export default function SectionTitle({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`mb-10 flex flex-col ${alignment} gap-3`}>
      {eyebrow && (
        <span className="rounded-full bg-ocean-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-ocean-700">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl text-3xl font-bold text-ocean-950 sm:text-4xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
