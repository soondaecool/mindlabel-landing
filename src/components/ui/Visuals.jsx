// Lightweight, on-brand CSS visuals. Real app screenshots (see AppShot.jsx)
// replaced the former feature mockups; only the mind-weather spectrum remains.
// Emotion surfaces deliberately avoid red (app guardrail).

const WEATHER_DOT = {
  sunny: 'bg-weather-sunny',
  calm: 'bg-weather-calm',
  cloudy: 'bg-weather-cloudy',
  rainy: 'bg-weather-rainy',
  stormy: 'bg-weather-stormy',
};

// Horizontal spectrum of the five mind-weather stages.
export function WeatherScale({ items }) {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-2.5 sm:gap-3">
      {items.map((w) => (
        <div
          key={w.key}
          className="flex w-[86px] flex-col items-center gap-2 rounded-2xl bg-white/70 px-2 py-3 text-center shadow-sm ring-1 ring-sage-100 dark:bg-night-850/70 dark:ring-night-800"
        >
          <span
            className={`h-7 w-7 rounded-full ${WEATHER_DOT[w.key]} shadow-inner`}
          />
          <span className="text-sm font-bold text-ink-800 dark:text-cream-50">{w.label}</span>
          <span className="text-[11px] leading-tight text-ink-600/80 break-keep dark:text-mist-400/80">
            {w.desc}
          </span>
        </div>
      ))}
    </div>
  );
}
