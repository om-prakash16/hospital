import { Header } from '@/components/theme4/header'
import { Hero } from '@/components/theme4/hero'
import { Features } from '@/components/theme4/features'
import { HowItWorks } from '@/components/theme4/how-it-works'
import { Testimonials } from '@/components/theme4/testimonials'
import { Pricing } from '@/components/theme4/pricing'
import { Footer } from '@/components/theme4/footer'
import './theme4.css'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}
