import { HeartPulse, Brain, Bone, Activity, Baby, Sparkles, Eye, Microscope, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const departments = [
  { id: 1, name: 'Cardiology', desc: 'Heart & Vascular Care', icon: HeartPulse, color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100', hoverBg: 'hover:bg-red-50' },
  { id: 2, name: 'Neurology', desc: 'Brain & Nervous System', icon: Brain, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100', hoverBg: 'hover:bg-blue-50' },
  { id: 3, name: 'Orthopedics', desc: 'Bone & Joint Care', icon: Bone, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', hoverBg: 'hover:bg-amber-50' },
  { id: 4, name: 'Gastroenterology', desc: 'Digestive System Care', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100', hoverBg: 'hover:bg-emerald-50' },
  { id: 5, name: 'Pediatrics', desc: 'Child & Adolescent Care', icon: Baby, color: 'text-pink-500', bg: 'bg-pink-50', border: 'border-pink-100', hoverBg: 'hover:bg-pink-50' },
  { id: 6, name: 'Oncology', desc: 'Cancer Care', icon: Microscope, color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-100', hoverBg: 'hover:bg-purple-50' },
  { id: 7, name: 'Dermatology', desc: 'Skin, Hair & Nail Care', icon: Sparkles, color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100', hoverBg: 'hover:bg-orange-50' },
  { id: 8, name: 'Ophthalmology', desc: 'Eye Care', icon: Eye, color: 'text-teal-500', bg: 'bg-teal-50', border: 'border-teal-100', hoverBg: 'hover:bg-teal-50' },
];

export default function MedicalDepartments() {
  return (
    <section className="py-20 bg-[var(--color-background)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-4">
          <div>
            <p className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest mb-2">Centers of Excellence</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-3">Our Medical Departments</h2>
            <p className="text-[var(--color-text-muted)] max-w-lg">Comprehensive care across all specialties with world-class equipment and expert physicians.</p>
          </div>
          <Link 
            href="/departments" 
            className="text-[var(--color-primary)] font-semibold hover:underline flex items-center gap-2 group shrink-0"
          >
            View All Departments <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <Link 
              key={dept.id} 
              href="/departments"
              className={`bg-[var(--color-background)] border ${dept.border} p-7 text-center transition-all duration-300 cursor-pointer group hover:shadow-xl hover:-translate-y-1 relative overflow-hidden`}
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              {/* Subtle gradient hover background */}
              <div className={`absolute inset-0 ${dept.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 mx-auto ${dept.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rounded-xl transition-all duration-300 shadow-sm`}>
                  <dept.icon className={`w-8 h-8 ${dept.color}`} />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-1.5">{dept.name}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">{dept.desc}</p>
                <span className={`text-xs font-semibold ${dept.color} opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1`}>
                  Learn More <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
