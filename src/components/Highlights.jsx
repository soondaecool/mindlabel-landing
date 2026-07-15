import { CloudSun, Sparkles, Mail, NotebookPen } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import Reveal from './ui/Reveal';

const ICONS = [CloudSun, Sparkles, Mail, NotebookPen];

export default function Highlights() {
  const { lang } = useLanguage();
  const t = translations[lang].highlights;

  return (
    <section className="border-y border-sage-100 bg-cream-50 px-5 py-8 dark:border-night-800 dark:bg-night-950">
      <Reveal className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold text-ink-800 dark:text-cream-50 sm:text-left">
          {t.title}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {t.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={item.label} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-sage-100 text-sage-700 dark:bg-night-800 dark:text-sage-300">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-800 break-keep dark:text-cream-50">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-ink-600/80 break-keep dark:text-mist-400/80">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
