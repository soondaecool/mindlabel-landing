import { APP_STORE_URL } from '../config/site';
import MindMapIllustration from './MindMapIllustration';
import AppleLogo from './icons/AppleLogo';

export default function Hero() {
  return (
    <section className="bg-cream-50 px-5 py-16 sm:py-24">
      <div className="mx-auto flex max-w-md flex-col items-center text-center sm:max-w-4xl sm:flex-row sm:items-center sm:gap-12 sm:text-left">
        <div className="flex-1">
          <span className="inline-block rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold text-sage-700">
            오늘의 마음 날씨는 어떤가요?
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-ink-800 break-keep sm:text-4xl">
            오늘, 당신의 마음은
            <br />
            어떤 날씨인가요?
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-600 break-keep sm:text-lg">
            맑음, 흐림, 비, 바람... 하루의 감정을 날씨로 기록하고, 나를 더
            깊이 이해해보세요.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:items-start">
            <a
              href={APP_STORE_URL}
              aria-label="Download on the App Store"
              className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center gap-2 rounded-2xl bg-sage-500 px-8 text-base font-semibold text-white shadow-sm transition active:scale-95 active:bg-sage-700 sm:w-auto"
            >
              <AppleLogo className="h-5 w-5" />
              Download on the App Store
            </a>
            <span className="text-xs text-ink-600/70">
              App Store에서 다운로드 · 회원가입 없이 3초 시작
            </span>
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-0 sm:shrink-0">
          <div className="flex h-44 w-44 items-center justify-center rounded-full bg-white shadow-sm sm:h-56 sm:w-56">
            <MindMapIllustration className="h-32 w-32 sm:h-40 sm:w-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
