type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, sub, align = "left" }: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block rounded-full border border-turmeric/40 bg-turmeric/10 px-5 py-1.5 font-body text-xs font-bold uppercase tracking-widest text-turmeric backdrop-blur-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-wide text-papad sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 font-body text-base leading-relaxed text-papad-dim">{sub}</p>}
    </div>
  );
}