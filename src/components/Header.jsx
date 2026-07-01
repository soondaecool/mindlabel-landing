import { useState } from 'react';
import { CONTACT_EMAIL } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { lang } = useLanguage();
  const t = translations[lang].nav;
  const [copied, setCopied] = useState(false);

  const handleContactClick = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; the mailto link still attempts to open.
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-sage-100/60 bg-cream-50/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4">
        <a href="/" className="flex items-center gap-2">
          <img src="/favicon.svg" alt="" className="h-6 w-6 rounded-md" />
          <span className="text-lg font-light tracking-widest text-sage-700">
            mindlabel
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink-600 sm:flex">
          <a href="/#home" className="transition hover:text-sage-700">
            {t.home}
          </a>
          <a href="/#features" className="transition hover:text-sage-700">
            {t.features}
          </a>
          <span className="relative">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={handleContactClick}
              className="transition hover:text-sage-700"
            >
              {t.contact}
            </a>
            {copied && (
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink-800 px-3 py-1 text-xs font-normal text-white shadow-sm">
                {t.copied}
              </span>
            )}
          </span>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
