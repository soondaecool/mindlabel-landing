import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import CheckInSection from './components/CheckInSection';
import DiscoverySection from './components/DiscoverySection';
import ReportSection from './components/ReportSection';
import CareSection from './components/CareSection';
import TrustSection from './components/TrustSection';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

function LandingPage() {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-night-950">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <CheckInSection />
        <DiscoverySection />
        <ReportSection />
        <CareSection />
        <TrustSection />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';

  let page = <LandingPage />;
  if (path === '/terms') {
    page = <TermsPage />;
  } else if (path === '/privacy') {
    page = <PrivacyPage />;
  }

  return <LanguageProvider>{page}</LanguageProvider>;
}

export default App;
