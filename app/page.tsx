"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Navbar } from "@/components/mucho/navbar"
import { Hero } from "@/components/mucho/hero"
import { Problem } from "@/components/mucho/problem"
import { HowItWorks } from "@/components/mucho/how-it-works"
import { Services } from "@/components/mucho/services"
import { CtaSection } from "@/components/mucho/cta-section"
import { Footer } from "@/components/mucho/footer"

export default function Home() {
  useScrollReveal()

  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Services />
      <CtaSection />
      <Footer />
    </main>
  )
}
