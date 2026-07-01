import { CloudSun, LineChart, Sparkles, Waves } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import FeatureCard from './FeatureCard';

const ICONS = [
  { icon: CloudSun, iconBg: 'bg-weather-sunny/40' },
  { icon: LineChart, iconBg: 'bg-weather-cloudy/40' },
  { icon: Sparkles, iconBg: 'bg-weather-windy/40' },
  { icon: Waves, iconBg: 'bg-weather-rainy/40' },
];

export default function FeatureSection() {
  const { lang } = useLanguage();
  const t = translations[lang].features;

  return (
    <section id="features" className="bg-sage-50 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-md text-center sm:max-w-4xl">
        <h2 className="text-2xl font-bold text-ink-800 break-keep sm:text-3xl">
          {t.titleLine1}
          <br />
          {t.titleLine2}
        </h2>
        <p className="mt-3 text-base text-ink-600 break-keep">{t.sub}</p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {t.items.map((item, i) => (
            <FeatureCard key={item.title} {...item} {...ICONS[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
