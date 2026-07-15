import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import SectionHeading from './ui/SectionHeading';
import AppShot from './ui/AppShot';
import Reveal from './ui/Reveal';

const SHOTS = ['letter', 'note'];

export default function ReportSection() {
  const { lang } = useLanguage();
  const t = translations[lang].report;

  return (
    <section id="report" className="bg-sage-50 px-5 py-20 dark:bg-night-900 sm:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <SectionHeading title={t.title} sub={t.sub} tone="plus" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.items.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sage-100 dark:bg-night-850 dark:ring-night-800 sm:p-7"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-plus-500 px-2.5 py-0.5 text-[11px] font-bold text-white">
                  {t.plusBadge}
                </span>
                <span className="rounded-full bg-sage-100 px-2.5 py-0.5 text-[11px] font-semibold text-sage-700 dark:bg-night-800 dark:text-sage-300">
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink-800 break-keep dark:text-cream-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 break-keep dark:text-mist-400">
                {item.desc}
              </p>
              <AppShot name={SHOTS[i]} alt={item.title} className="mt-6" />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
