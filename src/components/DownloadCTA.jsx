import { APP_STORE_URL } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import AppleLogo from './icons/AppleLogo';

export default function DownloadCTA() {
  const { lang } = useLanguage();
  const t = translations[lang].downloadCta;

  return (
    <section
      id="download"
      className="bg-sage-600 px-5 py-16 text-center sm:py-24"
    >
      <div className="mx-auto max-w-md sm:max-w-2xl">
        <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-sage-50">
          {t.badge}
        </span>
        <h2 className="mt-4 text-2xl font-bold text-white break-keep sm:text-3xl">
          {t.titleLine1}
          <br />
          {t.titleLine2}
        </h2>
        <p className="mt-3 text-base text-sage-50/90 break-keep">
          {t.descLine1}
          <br />
          {t.descLine2}
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href={APP_STORE_URL}
            aria-label="Download on the App Store"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-white px-6 text-base font-semibold text-sage-700 shadow-sm transition active:scale-95 active:bg-sage-50"
          >
            <AppleLogo className="h-5 w-5" />
            {t.cta}
          </a>
        </div>
        <p className="mt-4 text-xs text-sage-50/70">{t.ctaSub}</p>
      </div>
    </section>
  );
}
