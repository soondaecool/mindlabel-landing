import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

function App() {
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

export default App;
