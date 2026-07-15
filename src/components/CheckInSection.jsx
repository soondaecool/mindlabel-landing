import { Footprints, Moon } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import SectionHeading from './ui/SectionHeading';
import { WeatherScale } from './ui/Visuals';
import Reveal from './ui/Reveal';

export default function CheckInSection() {
  const { lang } = useLanguage();
  const t = translations[lang].checkin;

  return (
    <section id="checkin" className="bg-white px-5 py-20 dark:bg-night-950 sm:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <SectionHeading title={t.title} sub={t.sub} />

        {/* Mind-weather spectrum */}
        <div className="mt-12 rounded-3xl bg-sky-fade p-6 dark:bg-none dark:bg-night-900 sm:p-8">
          <p className="mb-5 text-center text-sm font-semibold text-ink-600 dark:text-mist-400">
            {t.weatherTitle}
          </p>
          <WeatherScale items={t.weather} />
        </div>

        {/* 4-step flow */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s) => (
            <div
              key={s.step}
              className="rounded-3xl bg-cream-50 p-5 ring-1 ring-sage-100 dark:bg-night-850 dark:ring-night-800"
            >
              <span className="text-sm font-bold text-sage-500">{s.step}</span>
              <h3 className="mt-2 text-base font-bold text-ink-800 break-keep dark:text-cream-50">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600 break-keep dark:text-mist-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Automatic tracking callout */}
        <div className="mt-8 flex flex-col items-center gap-4 rounded-3xl bg-sage-50 p-6 text-center dark:bg-night-900 sm:flex-row sm:text-left">
          <span className="flex shrink-0 items-center gap-1.5 text-sage-600">
            <Moon className="h-6 w-6" strokeWidth={1.8} />
            <Footprints className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-base font-bold text-ink-800 break-keep dark:text-cream-50">
              {t.autoTitle}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-600 break-keep dark:text-mist-400">
              {t.autoDesc}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
