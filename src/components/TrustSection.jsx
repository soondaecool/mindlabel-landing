import { UserRoundCheck, Smartphone, EyeOff, Trash2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const ICONS = [UserRoundCheck, Smartphone, EyeOff, Trash2];

export default function TrustSection() {
  const { lang } = useLanguage();
  const t = translations[lang].trust;

  return (
    <section id="privacy" className="bg-cream-100 px-5 py-20 dark:bg-night-900 sm:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <SectionHeading title={t.title} />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-5 ring-1 ring-sage-100 dark:bg-night-850 dark:ring-night-800"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sage-100 text-sage-700 dark:bg-night-800 dark:text-sage-300">
                  <Icon className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink-800 break-keep dark:text-cream-50">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600 break-keep dark:text-mist-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-ink-600/70 break-keep dark:text-mist-400/70">
          {t.disclaimer}
        </p>
      </Reveal>
    </section>
  );
}
