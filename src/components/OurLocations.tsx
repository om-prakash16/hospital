import { MapPin, Phone, Clock } from 'lucide-react';

const locations = [
  {
    id: 1,
    name: 'Medicare+ Downtown',
    address: '123 Health Avenue, Medical District, New York',
    phone: '+1 (800) 123-4567',
    hours: 'Open 24/7',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Medicare+ Westside',
    address: '456 Wellness Blvd, West End, New York',
    phone: '+1 (800) 234-5678',
    hours: 'Mon-Sat: 8AM - 10PM',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Medicare+ Suburban',
    address: '789 Care Lane, Greenfield, New Jersey',
    phone: '+1 (800) 345-6789',
    hours: 'Mon-Sat: 7AM - 9PM',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80',
  },
];

export default function OurLocations() {
  return (
    <section className="py-20 bg-[var(--color-surface)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest mb-2">Find Us Near You</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-3">Our Locations</h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
            We are available at 20+ locations across India
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div 
              key={loc.id} 
              className="bg-[var(--color-background)] border border-[var(--color-border)] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              {/* Image */}
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-3">{loc.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)]">
                    <MapPin size={16} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-[var(--color-text-muted)]">
                    <Phone size={16} className="text-[var(--color-primary)] shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-[var(--color-text-muted)]">
                    <Clock size={16} className="text-[var(--color-primary)] shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
                <button 
                  className="mt-5 w-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] py-2.5 text-sm font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all"
                  style={{ borderRadius: 'var(--radius-md)' }}
                >
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
