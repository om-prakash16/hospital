'use client'

import { Check } from 'lucide-react'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for solo practitioners',
    price: '$299',
    period: '/month',
    features: [
      'Up to 100 patients',
      'Video consultations',
      'Basic EHR',
      'Email support',
      'HIPAA compliant',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'For established practices',
    price: '$799',
    period: '/month',
    features: [
      'Unlimited patients',
      'Advanced video features',
      'Full EHR system',
      'Billing integration',
      'Priority support',
      'Custom branding',
      'Team management (up to 5)',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: 'Contact sales',
    features: [
      'Unlimited everything',
      'White-label solution',
      'API access',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Advanced analytics',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Simple, transparent{' '}
            <span className="gradient-text">pricing for every practice</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your practice. All plans include HIPAA compliance and 24/7 support.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-2 p-1 bg-white/30 backdrop-blur-xl rounded-full border border-white/30">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingPeriod === 'annual'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative rounded-2xl transition-all duration-500 ${
                plan.highlighted
                  ? 'md:scale-105 md:shadow-2xl'
                  : 'hover:shadow-2xl'
              }`}
            >
              {/* Card */}
              <div
                className={`h-full p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary/50 shadow-2xl'
                    : 'bg-white/30 border-white/30 hover:border-primary/50 hover:bg-white/40'
                }`}
              >
                {/* Highlight Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-foreground/60 text-sm ml-2">{plan.period}</span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 mb-8 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-2xl hover:scale-105'
                      : 'border-2 border-primary/30 text-foreground hover:border-primary/60 hover:bg-primary/5'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
                    What&apos;s included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="text-primary flex-shrink-0" size={20} />
                        <span className="text-foreground/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-16">
          <p className="text-foreground/60 mb-4">
            Have questions about our pricing?{' '}
            <a href="#faq" className="font-semibold text-primary hover:text-accent transition-colors">
              View FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
