import LegalPageLayout from '../components/legal/LegalPageLayout';
import { privacyContent } from '../content/legal/privacyContent';
import { useLanguage } from '../i18n/LanguageContext';

export default function PrivacyPage() {
  const { lang } = useLanguage();
  return <LegalPageLayout content={privacyContent[lang]} />;
}
