import { SITE } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="bg-cream-50 px-5 py-8 text-center text-xs text-ink-600">
      <p className="font-semibold text-sage-700">{SITE.appName}</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="/terms" className="transition hover:text-sage-700 active:text-sage-700">
          {t.terms}
        </a>
        <a href="/privacy" className="transition hover:text-sage-700 active:text-sage-700">
          {t.privacy}
        </a>
      </div>
      <p className="mt-3 text-ink-600/70">{SITE.copyright}</p>
    </footer>
  );
}
