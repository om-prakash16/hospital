import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MedicalDepartments from '@/components/MedicalDepartments';
import DoctorFinder from '@/components/DoctorFinder';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col w-full">
        <Hero />
        <MedicalDepartments />
        <DoctorFinder />
        {/* Placeholder for future sections */}
        <div className="h-20 bg-slate-50"></div>
      </main>
    </>
  );
}
