import { Waves, Wind, Heart, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const ICONS = [Waves, Wind, Heart];
const TINTS = ['bg-weather-rainy/30', 'bg-weather-calm/40', 'bg-weather-windy/30'];

export default function CareSection() {
  const { lang } = useLanguage();
  const t = translations[lang].care;

  return (
    <section id="care" className="bg-white px-5 py-20 dark:bg-night-950 sm:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <SectionHeading title={t.title} sub={t.sub} />

        {/* Stacked list (not a card grid) so this section reads differently
            from the privacy grid below it. */}
        <div className="mx-auto mt-12 max-w-2xl divide-y divide-sage-100 dark:divide-night-800">
          {t.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 py-6 first:pt-0 last:pb-0 sm:gap-5"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${TINTS[i]}`}
                >
                  <Icon
                    className="h-6 w-6 text-ink-800 dark:text-cream-50"
                    strokeWidth={1.75}
                  />
                </span>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-ink-800 break-keep dark:text-cream-50">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600 break-keep dark:text-mist-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-sage-600 p-6 text-center dark:bg-sage-700 sm:flex-row sm:text-left">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
            <HeartHandshake className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-base font-bold text-white break-keep">
              {t.freeTitle}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-sage-50/90 break-keep">
              {t.freeDesc}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
