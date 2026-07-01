import { APP_STORE_URL } from '../config/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sage-100/60 bg-cream-50/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
        <span className="text-lg font-light tracking-widest text-sage-700">
          mindlabel
        </span>
        <a
          href={APP_STORE_URL}
          className="inline-flex min-h-[44px] items-center rounded-full px-4 text-sm font-semibold text-sage-600 transition active:scale-95 active:text-sage-800"
        >
          다운로드
        </a>
      </div>
    </header>
  );
}
