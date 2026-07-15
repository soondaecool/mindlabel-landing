import { CONTACT_EMAIL, SITE } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="bg-cream-50 px-5 py-12 text-center text-xs text-ink-600 dark:bg-night-950 dark:text-mist-400">
      <p className="text-lg font-light tracking-widest text-sage-700 dark:text-sage-300">
        {SITE.appName}
      </p>
      <p className="mx-auto mt-2 max-w-xs text-ink-600/80 break-keep dark:text-mist-400/80">
        {t.tagline}
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 font-semibold">
        <a href="/terms" className="transition hover:text-sage-700 active:text-sage-700 dark:hover:text-sage-300 dark:active:text-sage-300">
          {t.terms}
        </a>
        <a href="/privacy" className="transition hover:text-sage-700 active:text-sage-700 dark:hover:text-sage-300 dark:active:text-sage-300">
          {t.privacy}
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="transition hover:text-sage-700 active:text-sage-700 dark:hover:text-sage-300 dark:active:text-sage-300"
        >
          {t.contact}
        </a>
      </div>
      <p className="mt-6 text-ink-600/60 dark:text-mist-400/60">{SITE.copyright}</p>
    </footer>
  );
}
