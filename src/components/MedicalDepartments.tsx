import { HeartPulse, Brain, Bone, Activity, Baby, Sparkles, Eye, Microscope } from 'lucide-react';
import Link from 'next/link';

const departments = [
  { id: 1, name: 'Cardiology', desc: 'Heart & Vascular Care', icon: HeartPulse, color: 'text-red-500', bg: 'bg-red-50' },
  { id: 2, name: 'Neurology', desc: 'Brain & Nervous System', icon: Brain, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 3, name: 'Orthopedics', desc: 'Bone & Joint Care', icon: Bone, color: 'text-amber-600', bg: 'bg-amber-50' },
  { id: 4, name: 'Gastroenterology', desc: 'Digestive System Care', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 5, name: 'Pediatrics', desc: 'Child & Adolescent Care', icon: Baby, color: 'text-pink-500', bg: 'bg-pink-50' },
  { id: 6, name: 'Oncology', desc: 'Cancer Care', icon: Microscope, color: 'text-purple-500', bg: 'bg-purple-50' },
  { id: 7, name: 'Dermatology', desc: 'Skin, Hair & Nail Care', icon: Sparkles, color: 'text-orange-500', bg: 'bg-orange-50' },
  { id: 8, name: 'Ophthalmology', desc: 'Eye Care', icon: Eye, color: 'text-teal-500', bg: 'bg-teal-50' },
];

export default function MedicalDepartments() {
  return (
    <section className="py-16 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-2">Our Medical Departments</h2>
            <p className="text-[var(--color-text-muted)]">Comprehensive care across all specialties</p>
          </div>
          <Link href="/departments" className="text-[var(--color-primary)] font-medium hover:underline flex items-center gap-1">
            View All Departments <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <div 
              key={dept.id} 
              className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all cursor-pointer group"
            >
              <div className={`w-16 h-16 mx-auto ${dept.bg} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <dept.icon className={`w-8 h-8 ${dept.color}`} />
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-1">{dept.name}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">{dept.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
