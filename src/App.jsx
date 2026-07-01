import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

function LandingPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <FeatureSection />
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
