import { Hero } from "@/components/sistema/hero"
import { FirstSection } from "@/components/sistema/first-section"
import { SecondSection } from "@/components/sistema/second-section"
import { Footer } from "@/components/mucho/footer"
import { Navbar } from "@/components/mucho/navbar"
import { CtaSection } from "@/components/sistema/cta-section"
import { FreeTrialSection } from "@/components/sistema/FreeTrialSection"
import { FaqSection } from "@/components/sistema/FaqSection"

export default function Home() {
    return (
        <main className="">
            <Navbar />
            <Hero />
            <FreeTrialSection  />
            <FirstSection />
            <SecondSection />
            <FaqSection />
             <CtaSection /> 
            <Footer />
        </main>
    )
}
