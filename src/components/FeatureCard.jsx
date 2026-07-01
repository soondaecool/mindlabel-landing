export default function FeatureCard({ icon: Icon, iconBg, title, desc }) {
  return (
    <div className="rounded-3xl bg-white p-6 text-left shadow-sm transition hover:shadow-md">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}
      >
        <Icon className="h-6 w-6 text-ink-800" strokeWidth={1.75} />
      </div>
      <h3 className="mt-4 text-lg font-bold text-ink-800 break-keep">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600 break-keep">
        {desc}
      </p>
    </div>
  );
}
