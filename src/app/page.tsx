import Hero from '@/components/theme3/Hero';
import AppointmentBar from '@/components/theme3/AppointmentBar';
import Features from '@/components/theme3/Features';
import Testimonial from '@/components/theme3/Testimonial';
import Blog from '@/components/theme3/Blog';
import Stats from '@/components/theme3/Stats';
import FAQ from '@/components/theme3/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f4fb] font-sans">
      <main>
        <Hero />
        <AppointmentBar />
        <Features />
        <Testimonial />
        <Blog />
        <Stats />
        <FAQ />
      </main>
    </div>
  );
}
