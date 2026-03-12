"use client"

import { useState } from "react"

const faqs = [
  {
    q: "¿Qué incluye exactamente la prueba de 14 días?",
    a: "Activamos el plan Pro completo: bot de WhatsApp con IA, configuración del CRM Kommo, pipeline de ventas y los primeros anuncios en Meta. Al final de los 14 días te mostramos un reporte con resultados reales y decidís si seguís.",
  },
  {
    q: "¿Necesito tener experiencia con estas herramientas?",
    a: "Para nada. Nos encargamos nosotros de la configuración, integración y operación. Vos solo tenés que responder los leads que el sistema ya calificó por vos.",
  },
  {
    q: "¿Qué pasa con los precios de pauta en Meta?",
    a: "La gestión de Meta Ads está incluida en el plan Pro. El presupuesto de pauta (el dinero que le pagás a Meta) es aparte y lo define el cliente según su capacidad de inversión. Te asesoramos en cuánto invertir para maximizar resultados.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí. No hay contratos de permanencia. Si en algún momento decidís parar, avisás con 30 días de anticipación y listo. Sin cargos extra ni letras chicas.",
  },
  {
    q: "¿Cuánto tarda en estar todo funcionando?",
    a: "En 48 horas desde la llamada inicial ya tenés el bot activo y los primeros anuncios corriendo. En la primera semana el sistema ya está generando y respondiendo leads.",
  },
  
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpen(open === index ? null : index)
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <div className="text-center mb-16">

             <div className="text-[10px] font-semibold tracking-[3px] uppercase text-mm-green mb-6 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-mm-green" />
            Preguntas frecuentes
        </div>

          <h2 className="text-[clamp(32px,5vw,56px)] font-black leading-[1.1] tracking-[-1px]">
            Todo lo que querés saber
            <br />
             <span className="text-mm-green">antes de empezar</span>
          </h2>

        </div>

        {/* FAQ list */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = open === index

            return (
              <div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left p-6"
                >
                  <span className="font-medium text-white">
                    {faq.q}
                  </span>

                  <span
                    className={`text-mm-green text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}