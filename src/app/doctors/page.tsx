import DoctorFinder from '@/components/DoctorFinder';

export default function DoctorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[var(--color-primary)]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-[var(--color-text-dark)] mb-4">Our Medical Specialists</h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Book appointments with world-class doctors across all major specialties.
          </p>
        </div>
      </div>
      <div className="flex-1">
        <DoctorFinder />
      </div>
    </div>
  );
}
