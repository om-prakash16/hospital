'use client';

import { Search, ChevronDown, Star, MapPin } from 'lucide-react';
import Image from 'next/image';

const doctors = [
  {
    id: 1,
    name: 'Dr. Arjun Sharma',
    specialty: 'Cardiologist',
    experience: '15+ Years Exp.',
    rating: 4.9,
    hospital: 'MAX Hospital, Delhi',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Dr. Neha Verma',
    specialty: 'Neurologist',
    experience: '12+ Years Exp.',
    rating: 4.8,
    hospital: 'Fortis, Mumbai',
    image: 'https://images.unsplash.com/photo-1594824432256-42795b651030?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Dr. Rohan Mehta',
    specialty: 'Orthopedic Surgeon',
    experience: '10+ Years Exp.',
    rating: 4.9,
    hospital: 'Manipal Hospital, Bangalore',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    name: 'Dr. Priya Nair',
    specialty: 'Gastroenterologist',
    experience: '14+ Years Exp.',
    rating: 4.9,
    hospital: 'Apollo Hospital, Chennai',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80'
  }
];

export default function DoctorFinder() {
  return (
    <section className="py-16 bg-[var(--color-surface)] transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-2">Find the Right Doctor</h2>
            <p className="text-[var(--color-text-muted)]">Search by specialty, experience, or name</p>
          </div>
          
          <div className="w-full md:w-auto flex-1 max-w-2xl">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search by name, specialty or symptom..." 
                  className="w-full pl-10 pr-4 py-3 border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-sm"
                  style={{ borderRadius: 'var(--radius-md)' }}
                />
              </div>
              <button 
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3 font-medium transition-colors whitespace-nowrap"
                style={{ borderRadius: 'var(--radius-md)' }}
              >
                Search
              </button>
            </div>
            
            {/* Filters */}
            <div className="flex gap-3 mt-3 overflow-x-auto pb-2 no-scrollbar">
              {['All Specialties', 'All Locations', 'All Experience', 'All Languages'].map((filter, i) => (
                <button 
                  key={i} 
                  className="flex items-center gap-2 bg-white border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-muted)] hover:border-gray-300 whitespace-nowrap"
                  style={{ borderRadius: 'var(--radius-md)' }}
                >
                  {filter} <ChevronDown className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <div 
              key={doc.id} 
              className="bg-[var(--color-background)] border border-[var(--color-border)] overflow-hidden transition-all duration-300"
              style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-card)'}
            >
              <div className="w-full h-64 relative overflow-hidden bg-slate-100">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--color-text-dark)]">{doc.name}</h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-3">{doc.specialty}</p>
                
                <div className="flex justify-between items-center text-sm text-[var(--color-text-muted)] mb-3 pb-3 border-b border-[var(--color-border)]">
                  <span>{doc.experience}</span>
                  <div className="flex items-center gap-1 text-amber-500 font-medium">
                    <Star className="w-4 h-4 fill-current" /> {doc.rating}
                  </div>
                </div>
                
                <div className="flex items-start gap-2 text-xs text-[var(--color-text-muted)] mb-5">
                  <MapPin className="w-4 h-4 shrink-0 opacity-70" />
                  <span>{doc.hospital}</span>
                </div>
                
                <button 
                  className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white py-2.5 text-sm font-medium transition-colors"
                  style={{ borderRadius: 'var(--radius-md)' }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
