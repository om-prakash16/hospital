import { FileText, Clock, CreditCard, Shield } from 'lucide-react';

export default function PatientsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface)]">
      <div className="bg-[var(--color-primary)]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-[var(--color-text-dark)] mb-4">Patient Information</h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Everything you need to know before, during, and after your visit.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6 flex items-center gap-2">
              <Clock className="text-[var(--color-primary)]" /> Visiting Hours
            </h2>
            <div className="bg-[var(--color-background)] border border-[var(--color-border)] p-6" style={{ borderRadius: 'var(--radius-lg)' }}>
              <ul className="space-y-4 text-[var(--color-text-muted)]">
                <li className="flex justify-between border-b border-[var(--color-border)] pb-2">
                  <span className="font-medium">General Wards</span>
                  <span>4:00 PM - 7:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-[var(--color-border)] pb-2">
                  <span className="font-medium">ICU / CCU</span>
                  <span>10:00 AM - 11:00 AM, 5:00 PM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Private Rooms</span>
                  <span>10:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6 flex items-center gap-2">
              <FileText className="text-[var(--color-primary)]" /> Admission Guidelines
            </h2>
            <div className="bg-[var(--color-background)] border border-[var(--color-border)] p-6 text-[var(--color-text-muted)] leading-relaxed space-y-4" style={{ borderRadius: 'var(--radius-lg)' }}>
              <p>Please bring the following documents at the time of admission:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Doctor's admission note</li>
                <li>Valid ID proof (Passport, Driving License, Aadhar Card)</li>
                <li>Insurance card / TPA authorization letter</li>
                <li>Previous medical reports and prescriptions</li>
              </ul>
            </div>
          </section>

        </div>
        
        <div className="space-y-8">
          <div className="bg-[var(--color-background)] border border-[var(--color-border)] p-6 text-center" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)' }}>
            <CreditCard className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-2">Insurance & Billing</h3>
            <p className="text-[var(--color-text-muted)] text-sm mb-6">We accept all major health insurance providers.</p>
            <button className="w-full bg-[var(--color-primary)] text-white py-2 font-medium" style={{ borderRadius: 'var(--radius-md)' }}>
              View Partners
            </button>
          </div>
          
          <div className="bg-[var(--color-background)] border border-[var(--color-border)] p-6 text-center" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)' }}>
            <Shield className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-2">Patient Rights</h3>
            <p className="text-[var(--color-text-muted)] text-sm mb-6">Learn about your rights and responsibilities as a patient.</p>
            <button className="w-full border border-[var(--color-primary)] text-[var(--color-primary)] py-2 font-medium hover:bg-[var(--color-primary)]/5 transition-colors" style={{ borderRadius: 'var(--radius-md)' }}>
              Read Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
