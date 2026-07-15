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
    <header className="sticky top-0 z-40 border-b border-sage-100/60 bg-cream-50/80 backdrop-blur-sm dark:border-night-800/60 dark:bg-night-950/80">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4">
        <a href="/" className="flex items-center gap-2">
          <img src="/favicon.png" alt="" className="h-6 w-6 rounded-md" />
          <span className="text-lg font-light tracking-widest text-sage-700 dark:text-sage-300">
            mindlabel
          </span>
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden items-center gap-6 text-sm font-semibold text-ink-600 dark:text-mist-400 sm:flex">
            <a href="/#checkin" className="transition hover:text-sage-700 dark:hover:text-sage-300">
              {t.checkin}
            </a>
            <a href="/#discover" className="transition hover:text-sage-700 dark:hover:text-sage-300">
              {t.discover}
            </a>
            <a href="/#report" className="transition hover:text-sage-700 dark:hover:text-sage-300">
              {t.report}
            </a>
          </nav>
          <span className="relative">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={handleContactClick}
              className="inline-flex min-h-[44px] items-center text-sm font-semibold text-ink-600 transition active:text-sage-700 dark:text-mist-400 dark:active:text-sage-300 sm:min-h-0 sm:hover:text-sage-700 sm:dark:hover:text-sage-300"
            >
              {t.contact}
            </a>
            {copied && (
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink-800 px-3 py-1 text-xs font-normal text-white shadow-sm">
                {t.copied}
              </span>
            )}
          </span>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
