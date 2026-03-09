import { Hero } from "@/components/sistema/hero"
import { FirstSection } from "@/components/sistema/first-section"
import { SecondSection } from "@/components/sistema/second-section"
import { Footer } from "@/components/mucho/footer"
import { Navbar } from "@/components/mucho/navbar"
import { CtaSection } from "@/components/sistema/cta-section"

export default function Home() {
    return (
        <main className="">
            <Navbar />
            <Hero />
            <FirstSection />
            <SecondSection />
             <CtaSection /> 
            <Footer />
        </main>
    )
}
