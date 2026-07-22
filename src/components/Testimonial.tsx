import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Anita Deshmukh',
    role: 'Cardiac Patient',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'The cardiac care team at Medicare+ saved my life. The doctors were incredibly skilled, and the nursing staff was compassionate and attentive throughout my stay.',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Orthopedic Patient',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'After my knee replacement surgery, I was walking within 3 days. The physiotherapy team and surgeons at Medicare+ are simply the best in the country.',
  },
  {
    id: 3,
    name: 'Priya Mehta',
    role: 'Maternity Patient',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'My delivery experience was wonderful. The staff made me feel comfortable and safe. The NICU facilities are world-class. I recommend Medicare+ to every expecting mother.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[var(--color-surface)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest mb-2">Patient Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-3">Testimonials</h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
            What our patients say about their experience with Medicare+
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="bg-[var(--color-background)] border border-[var(--color-border)] p-8 relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[var(--color-primary)]/10">
                <Quote size={48} className="opacity-10" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8 text-sm italic">
                &ldquo;{t.text}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-[var(--color-border)]">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-primary)]/20"
                />
                <div>
                  <p className="font-bold text-[var(--color-text-dark)] text-sm">{t.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
