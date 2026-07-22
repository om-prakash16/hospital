import Header from '@/components/theme3/Header';
import Hero from '@/components/theme3/Hero';
import AppointmentBar from '@/components/theme3/AppointmentBar';
import Features from '@/components/theme3/Features';
import Testimonial from '@/components/theme3/Testimonial';
import Blog from '@/components/theme3/Blog';
import Stats from '@/components/theme3/Stats';
import FAQ from '@/components/theme3/FAQ';
import Footer from '@/components/theme3/Footer';

export default function Theme3() {
  return (
    <div className="min-h-screen bg-[#f3f4fb] font-sans">
      <Header />
      <main>
        <Hero />
        <AppointmentBar />
        <Features />
        <Testimonial />
        <Blog />
        <Stats />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
