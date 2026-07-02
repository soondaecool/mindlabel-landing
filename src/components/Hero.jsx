import { APP_STORE_URL } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import PhoneMockup from './PhoneMockup';
import AppleLogo from './icons/AppleLogo';

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section id="home" className="bg-cream-50 px-5 py-16 sm:py-24">
      <div className="mx-auto flex max-w-md flex-col items-center text-center sm:max-w-4xl sm:flex-row sm:items-center sm:gap-12 sm:text-left">
        <div className="flex-1">
          <span className="inline-block rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold text-sage-700">
            {t.badge}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-ink-800 break-keep sm:text-4xl">
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-600 break-keep sm:text-lg">
            {t.descLine1}
            <br />
            {t.descLine2}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:items-start">
            <a
              href={APP_STORE_URL}
              aria-label="Download on the App Store"
              className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center gap-2 rounded-2xl bg-sage-500 px-8 text-base font-semibold text-white shadow-sm transition active:scale-95 active:bg-sage-700 sm:w-auto"
            >
              <AppleLogo className="h-5 w-5" />
              {t.cta}
            </a>
            <span className="text-xs text-ink-600/70">{t.ctaSub}</span>
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-0 sm:shrink-0">
          <PhoneMockup className="w-48 sm:w-60" />
        </div>
      </div>
    </section>
  );
}
