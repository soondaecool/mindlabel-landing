// Renders a section header: small eyebrow label, a multi-line title
// (split on "\n"), and an optional supporting paragraph. Centered by default.
export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'center',
  tone = 'sage',
}) {
  const lines = title.split('\n');
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const eyebrowTone =
    tone === 'plus'
      ? 'text-plus-600 dark:text-plus-300'
      : 'text-sage-600 dark:text-sage-300';

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs font-bold uppercase tracking-[0.14em] ${eyebrowTone}`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-2xl font-bold leading-tight text-ink-800 break-keep dark:text-cream-50 sm:text-[2rem]">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
      {sub && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 break-keep dark:text-mist-400">
          {sub}
        </p>
      )}
    </div>
  );
}
