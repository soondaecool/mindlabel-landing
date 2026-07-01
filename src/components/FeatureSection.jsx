import { CloudSun, LineChart, Sparkles, Waves } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FEATURES = [
  {
    icon: CloudSun,
    iconBg: 'bg-weather-sunny/40',
    title: '탭 몇 번으로 끝나는 감정 기록',
    desc: '오늘의 마음 날씨, 그때의 신체 반응, 기분, 트리거까지 — 복잡한 입력 없이 탭 몇 번이면 충분해요.',
  },
  {
    icon: LineChart,
    iconBg: 'bg-weather-cloudy/40',
    title: '데이터로 보는 나의 감정 패턴',
    desc: '주간·월간 기분 날씨 그래프로 나만의 감정 흐름을 한눈에 확인하고, 특정 시간대나 상황에 따른 변화를 발견해보세요.',
  },
  {
    icon: Sparkles,
    iconBg: 'bg-weather-windy/40',
    title: '나만을 위한 심리 인사이트',
    desc: '기록이 쌓일수록 더 정확해지는 분석으로, 나조차 몰랐던 감정의 트리거를 발견하도록 도와드려요.',
  },
  {
    icon: Waves,
    iconBg: 'bg-weather-rainy/40',
    title: '오늘의 기분을 위한 마음 처방',
    desc: '오늘의 기분에 딱 맞는 사운드테라피와 명상 호흡법을 추천해드려요. 지금 이 순간, 마음을 편안하게.',
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-sage-50 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-md text-center sm:max-w-4xl">
        <h2 className="text-2xl font-bold text-ink-800 break-keep sm:text-3xl">
          당신의 마음을 이해하는
          <br />
          가장 쉬운 방법
        </h2>
        <p className="mt-3 text-base text-ink-600 break-keep">
          탭 몇 번의 기록이 쌓여, 나를 설명하는 데이터가 됩니다
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
