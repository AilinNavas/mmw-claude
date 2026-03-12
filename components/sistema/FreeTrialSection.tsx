"use client"

import { WhatsAppCTA } from "@/components/sistema/whatsapp-cta"

const steps = [
  {
    number: "1",
    title: "Hablás con nosotros",
    desc: "Llamada de 30 min para entender tu negocio",
  },
  {
    number: "2",
    title: "Activamos el sistema",
    desc: "Bot, CRM y primeros anuncios en 48hs",
  },
  {
    number: "3",
    title: "Ves los resultados",
    desc: "Leads reales, respuestas automáticas, ventas",
  },
  {
    number: "4",
    title: "Decidís si seguís",
    desc: "Sin presión. Sin contrato atado.",
  },
]

export function FreeTrialSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Container */}
      <div className="mx-auto max-w-7xl px-6">

        {/* Card */}
        <div className="relative rounded-3xl border border-mm-green/30 bg-linear-to-br from-mm-green/10 via-black to-black p-10 md:p-16 overflow-hidden">

          {/* Número gigante decorativo */}
          <div className="absolute right-10 -top-10 text-[280px] font-black text-mm-green/10 select-none pointer-events-none">
            14
          </div>

          {/* Heading */}
          <div className="relative z-10 max-w-3xl mb-14">

            <h2 className="font-sans text-[clamp(36px,4vw,52px)] font-extrabold  leading-[1.08] tracking-[-1.5px]">

              Probá{" "}
              <span className="text-mm-green">
                14 días gratis.
              </span>
            </h2>

            <p className="mt-6 text-gray-300 text-[16px] md:text-[18px] leading-[1.7] max-w-xl">
              Activamos tu sistema completo por dos semanas. Si en ese tiempo
              no ves resultados concretos, no te cobramos nada y nos fuimos
              sin drama.
            </p>

          </div>

          {/* Steps */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">

                <div className="flex items-center gap-4">

                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-mm-green text-black font-bold">
                    {step.number}
                  </div>

                  <h3 className="font-semibold text-white">
                    {step.title}
                  </h3>

                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="relative z-10 flex flex-col items-center gap-6">

            <WhatsAppCTA
              message="Activar mi prueba gratuita"
              microtext=""
            />

            <p className="text-sm text-gray-400">
              Sin compromiso ·{" "}
              <span className="text-mm-green">
                Cancelás cuando querés
              </span>
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}