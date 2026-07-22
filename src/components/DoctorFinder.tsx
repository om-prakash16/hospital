import { Search, ChevronDown, Star, MapPin } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Arjun Sharma',
    specialty: 'Cardiologist',
    experience: '15+ Years Exp.',
    rating: 4.9,
    hospital: 'MAX Hospital, Delhi',
    image: 'bg-slate-200'
  },
  {
    id: 2,
    name: 'Dr. Neha Verma',
    specialty: 'Neurologist',
    experience: '12+ Years Exp.',
    rating: 4.8,
    hospital: 'Fortis, Mumbai',
    image: 'bg-slate-200'
  },
  {
    id: 3,
    name: 'Dr. Rohan Mehta',
    specialty: 'Orthopedic Surgeon',
    experience: '10+ Years Exp.',
    rating: 4.9,
    hospital: 'Manipal Hospital, Bangalore',
    image: 'bg-slate-200'
  },
  {
    id: 4,
    name: 'Dr. Priya Nair',
    specialty: 'Gastroenterologist',
    experience: '14+ Years Exp.',
    rating: 4.9,
    hospital: 'Apollo Hospital, Chennai',
    image: 'bg-slate-200'
  }
];

export default function DoctorFinder() {
  return (
    <section className="py-16 bg-[var(--color-surface)]">
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
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-sm"
                />
              </div>
              <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap">
                Search
              </button>
            </div>
            
            {/* Filters */}
            <div className="flex gap-3 mt-3 overflow-x-auto pb-2 no-scrollbar">
              {['All Specialties', 'All Locations', 'All Experience', 'All Languages'].map((filter, i) => (
                <button key={i} className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-md text-sm text-[var(--color-text-muted)] hover:border-gray-300 whitespace-nowrap">
                  {filter} <ChevronDown className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <div key={doc.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-[var(--shadow-hover)] transition-shadow">
              <div className={`w-full h-56 ${doc.image} relative flex justify-center items-end overflow-hidden`}>
                {/* Placeholder for actual photo */}
                <div className="text-slate-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">[Photo]</div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--color-text-dark)]">{doc.name}</h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-3">{doc.specialty}</p>
                
                <div className="flex justify-between items-center text-sm text-[var(--color-text-muted)] mb-3 pb-3 border-b border-gray-100">
                  <span>{doc.experience}</span>
                  <div className="flex items-center gap-1 text-amber-500 font-medium">
                    <Star className="w-4 h-4 fill-current" /> {doc.rating}
                  </div>
                </div>
                
                <div className="flex items-start gap-2 text-xs text-[var(--color-text-muted)] mb-5">
                  <MapPin className="w-4 h-4 shrink-0 text-gray-400" />
                  <span>{doc.hospital}</span>
                </div>
                
                <button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white py-2.5 rounded-md text-sm font-medium transition-colors">
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
