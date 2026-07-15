import { useLanguage } from '../../i18n/LanguageContext';

/**
 * Real app screenshot, picked by language from /screens/{name}_{lang}.webp.
 * Source images are pre-cropped at clean card boundaries (no mid-text cuts),
 * so they always render at natural aspect ratio.
 */
export default function AppShot({ name, alt = '', className = '' }) {
  const { lang } = useLanguage();
  const src = `/screens/${name}_${lang === 'en' ? 'en' : 'ko'}.webp`;

  return (
    <div
      className={`overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-sage-100 dark:bg-night-850 dark:ring-night-800 ${className}`}
    >
      <img key={src} src={src} alt={alt} loading="lazy" className="w-full" />
    </div>
  );
}
