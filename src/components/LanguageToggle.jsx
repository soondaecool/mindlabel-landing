import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full bg-sage-100 p-1 text-xs font-semibold dark:bg-night-800">
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`rounded-full px-2.5 py-1.5 transition ${
          lang === 'en' ? 'bg-sage-600 text-white' : 'text-sage-600 active:text-sage-800 dark:text-sage-300'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('ko')}
        aria-pressed={lang === 'ko'}
        className={`rounded-full px-2.5 py-1.5 transition ${
          lang === 'ko' ? 'bg-sage-600 text-white' : 'text-sage-600 active:text-sage-800 dark:text-sage-300'
        }`}
      >
        KOR
      </button>
    </div>
  );
}
