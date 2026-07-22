'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Is MediCloud HIPAA compliant?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae harum adipisci possimus et. Iusto pariatur iste nam incidunt ratione modi."
  },
  {
    question: "Do patients need to download an app?",
    answer: "Sed urna felis, dapibus quis leo nec, luctus auctor augue. Nam gravida placerat sem vitae rutrum. Integer accumsan, enim et facilisis eleifend, ante ligula ornare nulla, sed pharetra tortor diam eget magna."
  },
  {
    question: "How does billing and payment work?",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur cum doloremque iusto molestiae. Minus beatae quam cumque modi quidem asperiores aliquam pariatur in iste."
  },
  {
    question: "Can I integrate my current EHR?",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur cum doloremque iusto molestiae. Minus beatae quam cumque modi quidem asperiores aliquam pariatur in iste."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // 2nd item open by default like template

  return (
    <section className="py-16 md:py-24 bg-[#f1f3f3] overflow-hidden" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="flex justify-center mb-16">
          <div className="w-full xl:w-1/2 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 mb-0">
              Simple, supported, and designed to fit the way you work. From setup to go-live, we'll guide you every
              step so your practice sees value from day one.
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="flex justify-center">
          <div className="w-full xl:w-1/2">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <button 
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex justify-between items-center text-left focus:outline-none"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 m-0">
                        {faq.question}
                      </h3>
                      <span className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 9l6 6l6 -6" />
                        </svg>
                      </span>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <p className="text-gray-600 mb-0">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
