import { Check } from 'lucide-react';
import { APP_STORE_URL } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import PhoneMockup from './PhoneMockup';
import AppleLogo from './icons/AppleLogo';

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section
      id="home"
      className="bg-sky-fade px-5 pb-16 pt-14 dark:bg-night-fade sm:pb-24 sm:pt-20"
    >
      <div className="mx-auto flex max-w-md flex-col items-center text-center sm:max-w-5xl sm:flex-row sm:items-center sm:gap-14 sm:text-left">
        <div className="flex-1">
          <h1 className="text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink-800 break-keep dark:text-cream-50 sm:text-6xl">
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-600 break-keep dark:text-mist-400 sm:mx-0 sm:text-lg">
            {t.desc}
          </p>
          <div className="mt-8 flex justify-center sm:justify-start">
            <a
              href={APP_STORE_URL}
              aria-label={t.cta}
              className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center gap-2 rounded-full bg-sage-600 px-8 text-base font-semibold text-white shadow-sm transition hover:bg-sage-700 active:scale-95 sm:w-auto"
            >
              <AppleLogo className="h-5 w-5" />
              {t.cta}
            </a>
          </div>
        </div>

        <div className="mt-12 flex justify-center sm:mt-0 sm:shrink-0">
          <div className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-full bg-plus-100/50 blur-2xl dark:bg-plus-900/40"
              aria-hidden="true"
            />
            <PhoneMockup className="w-52 sm:w-64" />
          </div>
        </div>
      </div>

      {/* Trust cues sit as a slim band below the hero, not stacked in the copy column */}
      <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-start">
        {t.trust.map((item) => (
          <li
            key={item}
            className="flex items-center gap-1.5 text-xs font-medium text-ink-600 dark:text-mist-400"
          >
            <Check className="h-3.5 w-3.5 text-sage-500" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
