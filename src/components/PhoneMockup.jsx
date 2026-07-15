import { useLanguage } from '../i18n/LanguageContext';

const SOURCES = {
  ko: '/mockup/weather_ko',
  en: '/mockup/weather_en',
};

export default function PhoneMockup({ className = 'w-56' }) {
  const { lang } = useLanguage();
  const src = SOURCES[lang] ?? SOURCES.ko;

  return (
    <div
      className={`relative aspect-[9/19.5] rounded-[2.5rem] border-[6px] border-ink-800 bg-ink-800 shadow-xl ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-cream-50">
        <video
          key={lang}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-label="mindlabel 앱 사용 화면"
        >
          <source src={`${src}.webm`} type="video/webm" />
          <source src={`${src}.mp4`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
