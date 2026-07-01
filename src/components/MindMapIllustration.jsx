export default function MindMapIllustration({ className = 'h-40 w-40' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="mindGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#93AD7E" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#93AD7E" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 잔잔하게 퍼지는 파동 */}
      <circle cx="100" cy="100" r="94" className="stroke-sage-100" strokeWidth="1" />
      <circle cx="100" cy="100" r="74" className="stroke-sage-200" strokeWidth="1" />
      <circle cx="100" cy="100" r="50" fill="url(#mindGlow)" />

      {/* 서로 겹쳐지며 어우러지는 감정 */}
      <circle cx="80" cy="86" r="34" className="fill-weather-sunny/30" />
      <circle cx="124" cy="88" r="30" className="fill-weather-rainy/30" />
      <circle cx="102" cy="122" r="32" className="fill-weather-windy/25" />

      {/* 고요히 자리한 중심 */}
      <circle cx="100" cy="100" r="21" className="stroke-sage-300" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="12" className="fill-sage-600" />
    </svg>
  );
}
