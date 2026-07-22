import { Monitor, Users, Shield, Stethoscope, Clock, Award } from 'lucide-react';

const features = [
  { icon: Monitor, title: 'Advanced Technology', desc: 'State-of-the-art medical equipment and digital health solutions for precise diagnosis.' },
  { icon: Stethoscope, title: 'Expert Physicians', desc: 'Board-certified specialists with decades of experience across every major discipline.' },
  { icon: Shield, title: 'Patient Safety', desc: 'JCI-accredited protocols ensuring the highest standards of safety and hygiene.' },
  { icon: Users, title: 'Patient-Centric', desc: 'Personalized care plans tailored to your unique health needs and goals.' },
  { icon: Clock, title: '24/7 Emergency', desc: 'Round-the-clock emergency department with rapid response trauma teams.' },
  { icon: Award, title: 'Award Winning', desc: 'Nationally recognized for excellence in healthcare delivery and patient outcomes.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[var(--color-background)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest mb-2">Why Medicare+</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-3">Why Choose Us</h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
            Discover what makes Medicare+ the trusted choice for millions of patients
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-5 p-6 bg-[var(--color-surface)] border border-[var(--color-border)] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center text-[var(--color-primary)] shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                <f.icon size={26} />
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--color-text-dark)] mb-1.5">{f.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
