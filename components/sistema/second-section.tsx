"use client"

import { WhatsAppCTA } from "@/components/sistema/whatsapp-cta"

export function SecondSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* VIDEO */}
          <div className="order-2 lg:order-1 relative flex justify-center lg:justify-start">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="max-w-xs md:max-w-sm w-full aspect-9/19 pointer-events-none"
            >
              <source src="/videos/hero2.webm" type="video/webm" />
            </video>
          </div>

          {/* TEXTO */}
          <div className="order-1 lg:order-2 text-center lg:text-left">

            {/* LABEL */}
            <div className="text-[10px] font-semibold tracking-[3px] uppercase text-mm-green mb-6 flex items-center justify-center lg:justify-start gap-3">
              <span className="w-8 h-px bg-mm-green" />
              automatización
            </div>

            {/* HEADLINE */}
            <h2 className="font-sans text-[clamp(36px,4vw,52px)] font-extrabold leading-[1.08] tracking-[-1.5px] mb-6">

              <span className="block text-mm-white">
                Automatizá tus respuestas.
              </span>

              <span className="block text-mm-green">
                Multiplicá tus cierres.
              </span>

            </h2>

            {/* DESCRIPCIÓN */}
            <p className="text-[15px] md:text-[18px] leading-[1.7] text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
              Integramos Kommo CRM con IA para que cada lead reciba una respuesta
              en segundos, se califique solo y avance en tu embudo —
              sin que muevas un dedo.
            </p>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <WhatsAppCTA
                message="Activar mi prueba gratuita"
                microtext="Tu competencia ya responde en segundos. ¿Qué esperás?"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}