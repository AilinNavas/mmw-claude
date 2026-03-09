"use client"
import { WhatsAppCTA } from "@/components/sistema/whatsapp-cta"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div className="text-center lg:text-left">

            {/* Título */}
            <h1 className="font-sans text-[clamp(42px,7vw,82px)] font-black italic leading-[1.0] tracking-[-2.5px] uppercase mb-6">

              <span className="text-mm-green block">
                Tus clientes están 
              </span>

              <span className="block bg-linear-to-b from-white to-white/90 bg-clip-text text-transparent">
               listos para comprar
              </span>

            </h1>

            {/* Descripción */}
            <p className="text-[16px] md:text-[18px] font-light leading-[1.65] text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
              Publicidad en Meta + WhatsApp con IA y automatizaciones.
              <br />
              Para que tu negocio venda aunque no estés mirando el teléfono.
            </p>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <WhatsAppCTA
                message="Probar 14 días gratis"
                microtext=" Sin contrato · Cancelás cuando querés"
              />
            </div>

          </div>

          {/* VIDEO */}
          <div className="relative flex justify-center lg:justify-end">

            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="w-full max-w-xs md:max-w-sm aspect-[9/19] pointer-events-none"
            >
              <source src="/videos/Hero-video.webm" type="video/webm" />
            </video>

          </div>

        </div>
      </div>
    </section>
  )
}