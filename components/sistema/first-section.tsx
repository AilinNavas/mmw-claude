"use client"

import { WhatsAppCTA } from "@/components/sistema/whatsapp-cta"

export function FirstSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-12 pb-24">
      <div className="mx-auto max-w-7xl px-6 text-center">

        {/* LABEL */}
        <div className="text-[10px] font-semibold tracking-[3px] uppercase text-mm-green mb-6 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-mm-green" />
          oportunidad
        </div>

        {/* HEADLINE */}
        <h2 className="font-sans text-[clamp(36px,4vw,52px)] font-extrabold  leading-[1.08] tracking-[-1.5px] mb-8">

          <span className="block bg-linear-to-b from-white to-white/90 bg-clip-text text-transparent">
            Tus clientes están scrolleando
          </span>

          <span className="block text-mm-green">
            Instagram y Facebook ahora mismo
          </span>

        </h2>

        {/* TENSIÓN */}
        <p className="text-[15px] md:text-[17px] text-gray-300 leading-[1.7] mb-16 max-w-2xl mx-auto">
          Mientras tanto, tu competencia les está hablando.
        </p>

        {/* VIDEO */}
        <div className="relative flex justify-center mb-20">

          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="w-full max-w-lg pointer-events-none"
          >
            <source src="/videos/web.webm" type="video/webm" />
          </video>

        </div>

        {/* RESOLUCIÓN */}
        <p className="text-[15px] md:text-[18px] leading-[1.7] text-gray-300 mb-12 max-w-3xl mx-auto">
          Nosotros creamos los anuncios que los detienen, los enganchan
          y los mandan directo a tu WhatsApp.
        </p>

        {/* CTA */}
        <div>
          <WhatsAppCTA
            message="Empezar a captar clientes →"
            microtext="Usa las redes para vender, no solo para mostrar"
          />
        </div>

      </div>
    </section>
  )
}