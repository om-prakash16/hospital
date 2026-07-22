import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Features from '@/components/Features';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurLocations from '@/components/OurLocations';
import Testimonials from '@/components/Testimonial';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <Hero />
      <Clients />
      <Features />
      
      {/* 
        Temporary placeholders for remaining sections 
        that we will soon overhaul to match MediCloud
      */}
      
      <div id="howItWork">
        <WhyChooseUs />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="locations">
        <OurLocations />
      </div>
      
      <div id="newsletter">
        <NewsletterCTA />
      </div>
    </main>
  );
}
