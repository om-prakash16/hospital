import Image from 'next/image';
import { Award, Users, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface)]">
      
      {/* Hero */}
      <div className="relative py-24 bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Medicare+</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            A legacy of excellence in healthcare. We are committed to providing compassionate care using the most advanced medical technology available today.
          </p>
        </div>
      </div>
      
      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-6">Our Mission & Vision</h2>
            <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                <strong className="text-[var(--color-primary)] block text-lg mb-1">Our Mission</strong>
                To deliver world-class healthcare with empathy, adhering to the highest standards of ethics and professionalism.
              </p>
              <p>
                <strong className="text-[var(--color-primary)] block text-lg mb-1">Our Vision</strong>
                To be the most trusted healthcare partner, globally recognized for excellence in patient care and clinical outcomes.
              </p>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" 
              alt="Hospital Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="bg-[var(--color-background)] border-y border-[var(--color-border)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--color-primary)]">
                <Users size={32} />
              </div>
              <p className="text-4xl font-bold text-[var(--color-text-dark)] mb-2">2M+</p>
              <p className="text-[var(--color-text-muted)] uppercase tracking-widest text-sm font-semibold">Patients Treated</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--color-primary)]">
                <Award size={32} />
              </div>
              <p className="text-4xl font-bold text-[var(--color-text-dark)] mb-2">1,500+</p>
              <p className="text-[var(--color-text-muted)] uppercase tracking-widest text-sm font-semibold">Expert Doctors</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--color-primary)]">
                <Heart size={32} />
              </div>
              <p className="text-4xl font-bold text-[var(--color-text-dark)] mb-2">25+</p>
              <p className="text-[var(--color-text-muted)] uppercase tracking-widest text-sm font-semibold">Years of Trust</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
