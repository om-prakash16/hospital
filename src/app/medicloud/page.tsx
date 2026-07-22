import Header from '@/components/medicloud/Header';
import Hero from '@/components/medicloud/Hero';
import Clients from '@/components/medicloud/Clients';
import Features from '@/components/medicloud/Features';
import HowItWorks from '@/components/medicloud/HowItWorks';
import About from '@/components/medicloud/About';
import Testimonials from '@/components/medicloud/Testimonials';
import Pricing from '@/components/medicloud/Pricing';
import FAQ from '@/components/medicloud/FAQ';
import Footer from '@/components/medicloud/Footer';

export default function MediCloudTheme() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Features />
        <HowItWorks />
        <About />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
