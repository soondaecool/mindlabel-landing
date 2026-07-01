import Header from '../Header';
import Footer from '../Footer';
import LegalSection from './LegalSection';
import { useLanguage } from '../../i18n/LanguageContext';

export default function LegalPageLayout({ content }) {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <a
          href="/"
          className="text-sm font-semibold text-sage-600 transition hover:text-sage-700"
        >
          {lang === 'ko' ? '← 홈으로' : '← Back to home'}
        </a>
        <h1 className="mt-4 text-3xl font-bold text-ink-800 break-keep">
          {content.title}
        </h1>
        <p className="mt-2 text-xs text-ink-600/70">{content.effectiveDate}</p>
        {content.intro && (
          <p className="mt-6 text-sm leading-relaxed text-ink-600 break-keep">
            {content.intro}
          </p>
        )}
        {content.noticeBox && (
          <div className="mt-6 rounded-2xl bg-sage-50 p-5">
            <p className="text-sm font-bold text-sage-700">
              {content.noticeBox.heading}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-600 break-keep">
              {content.noticeBox.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {content.sections.map((section, index) => (
          <LegalSection key={index} {...section} />
        ))}
        {content.addendum && (
          <p className="mt-10 text-sm font-semibold text-ink-700">
            {content.addendum}
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
