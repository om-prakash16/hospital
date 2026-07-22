import PageHero from '@/components/PageHero';
import DoctorFinder from '@/components/DoctorFinder';

export default function DoctorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4fb] font-sans">
      <PageHero 
        title="Our Medical Specialists" 
        description="Book appointments with world-class doctors across all major specialties."
      />
      
      <div className="flex-1 py-12 container mx-auto px-4">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <DoctorFinder />
        </div>
      </div>
    </div>
  );
}
