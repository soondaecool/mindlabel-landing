import { SITE } from '../config/site';

export default function Footer() {
  return (
    <footer className="bg-cream-50 px-5 py-8 text-center text-xs text-ink-600">
      <p className="font-semibold text-sage-700">{SITE.appName}</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="#" className="transition active:text-sage-700">
          이용약관
        </a>
        <a href="#" className="transition active:text-sage-700">
          개인정보처리방침
        </a>
      </div>
      <p className="mt-3 text-ink-600/70">{SITE.copyright}</p>
    </footer>
  );
}
