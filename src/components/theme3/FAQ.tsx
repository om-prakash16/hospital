'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Is teeth whitening safe?",
    answer: "Yes — when performed by a dentist, whitening is safe and does not damage tooth enamel."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend a check-up every 6 months for cleaning and preventive care."
  },
  {
    question: "Do dental implants hurt?",
    answer: "Most patients experience little to no discomfort during the procedure thanks to local anesthesia."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 md:my-20">
      
      {/* Header */}
      <div className="text-center mb-10 text-gray-900">
        <span className="text-[#0ea5e9] font-semibold tracking-wide block mb-2">FAQ</span>
        <h2 className="font-bold text-3xl md:text-4xl mb-3">Frequently Asked Questions</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Common questions our patients ask about dental care & treatments.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto">
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border border-[#eef1ff] rounded-[14px] overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full flex justify-between items-center text-left p-4 focus:outline-none font-semibold text-lg transition-colors duration-300 ${isOpen ? 'bg-sky-100 text-[#0284c7]' : 'bg-sky-50 text-gray-900'}`}
                >
                  {faq.question}
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${isOpen ? 'max-h-40 border-t border-[#eef1ff]' : 'max-h-0'}`}>
                  <div className="p-4 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-4xl mx-auto mt-16">
        <div 
          className="rounded-[18px] p-8 md:p-10 text-white flex flex-col md:flex-row justify-between items-center gap-6"
          style={{ background: 'linear-gradient(135deg, #0284c7, #38bdf8)' }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Ready to improve your smile?</h3>
            <p className="mb-0 text-white/90 text-lg">Book your free consultation today.</p>
          </div>
          <button className="bg-white text-[#0284c7] font-bold px-8 py-3 rounded-full hover:bg-[#0ea5e9] hover:text-white hover:-translate-y-0.5 transition-all duration-200 shrink-0 shadow-sm">
            Book Appointment
          </button>
        </div>
      </div>

    </section>
  );
}
