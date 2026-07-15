import { Gauge, Activity, LineChart, Info } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import SectionHeading from './ui/SectionHeading';
import AppShot from './ui/AppShot';
import Reveal from './ui/Reveal';

const ICONS = [Gauge, Activity, LineChart];

export default function DiscoverySection() {
  const { lang } = useLanguage();
  const t = translations[lang].discover;

  return (
    <section id="discover" className="bg-plus-fade px-5 py-20 dark:bg-night-plus-fade sm:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          sub={t.sub}
          tone="plus"
        />

        <div className="mt-12 grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-14">
          {/* Real records-tab screenshot: influence + precursor cards */}
          <div className="mx-auto w-full max-w-[300px]">
            <AppShot name="discover" alt={t.title.replace('\n', ' ')} />
          </div>

          <div className="space-y-6">
            {t.items.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-plus-200 dark:bg-night-850 dark:ring-night-800 sm:p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plus-100 text-plus-600 dark:bg-night-800 dark:text-plus-300">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-ink-800 break-keep dark:text-cream-50">
                        {item.title}
                      </h3>
                      <span className="rounded-full bg-plus-500 px-2.5 py-0.5 text-[11px] font-bold text-white">
                        {t.plusBadge}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600 break-keep dark:text-mist-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            <p className="flex items-start gap-2 px-1 text-xs leading-relaxed text-plus-700/80 break-keep dark:text-plus-300/80">
              <Info className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
              {t.note}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
