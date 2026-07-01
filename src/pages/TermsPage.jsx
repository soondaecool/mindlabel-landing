import LegalPageLayout from '../components/legal/LegalPageLayout';
import { termsContent } from '../content/legal/termsContent';
import { useLanguage } from '../i18n/LanguageContext';

export default function TermsPage() {
  const { lang } = useLanguage();
  return <LegalPageLayout content={termsContent[lang]} />;
}
