import { AlertIcon, CheckIcon } from "./icons"

export function Problem() {
  return (
    <section id="problema" className="px-6 md:px-[60px] py-[120px] max-w-[1200px] mx-auto relative z-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-[52px]">
        {/* Left column */}
        <div>
          <SectionLabel className="reveal">El problema real</SectionLabel>
          <h2 className="reveal reveal-delay-1 font-sans text-[clamp(36px,4vw,52px)] font-extrabold leading-[1.08] tracking-[-1.5px] italic text-mm-white">
            Tu negocio pierde ventas
            <br />
            todos los dias
            <br />
            <span className="text-mm-green">sin que te des cuenta</span>
          </h2>

          <div className="flex flex-col gap-4 mt-9">
            <PainItem delay={1}>
              <strong className="text-mm-white font-semibold">Mensajes sin respuesta.</strong>{" "}
              {"Cada consulta que no contestas a tiempo es una venta que se va a quien si responde."}
            </PainItem>
            <PainItem delay={2}>
              <strong className="text-mm-white font-semibold">Freelancers dispersos.</strong>{" "}
              {"Disenador, editor, community manager, vendedor — nadie coordina, nadie asume el problema."}
            </PainItem>
            <PainItem delay={3}>
              <strong className="text-mm-white font-semibold">Publicidad sin sistema.</strong>{" "}
              {"Invertis en Meta Ads pero el lead llega, nadie lo atiende y se enfria."}
            </PainItem>
          </div>
        </div>

        {/* Solution box */}
        <div
          className="reveal reveal-delay-2 rounded-[20px] p-8 md:p-11 relative overflow-hidden border border-[rgba(37,211,102,0.3)]"
          style={{
            background: "linear-gradient(135deg, rgba(37,211,102,0.1) 0%, rgba(37,211,102,0.03) 100%)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(37,211,102,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-1">
            <h3 className="font-sans text-[28px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-4 text-mm-white">
              {"La solucion es"}
              <br />
              <span className="text-mm-green">un sistema completo</span>
            </h3>
            <p className="text-[15px] text-mm-grey leading-[1.7] mb-8">
              {"Redes sociales, publicidad, WhatsApp, CRM y automatizaciones — todo conectado, todo funcionando, todo bajo un solo interlocutor."}
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Respuestas automaticas desde el primer mensaje",
                "Contenido publicado sin que vos muevas un dedo",
                "Leads calificados y seguidos en el CRM",
                "Reportes mensuales con resultados reales",
                "Un solo punto de contacto: Joel",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3 text-[13.5px] text-mm-white">
                  <div className="w-[22px] h-[22px] rounded-full bg-[rgba(37,211,102,0.15)] border border-[rgba(37,211,102,0.4)] flex items-center justify-center shrink-0">
                    <CheckIcon className="w-[11px] h-[11px]" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PainItem({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <div
      className={`reveal reveal-delay-${delay} flex items-start gap-4 px-[22px] py-5 bg-[rgba(255,255,255,0.02)] border border-mm-border rounded-xl transition-all duration-300 hover:border-[rgba(37,211,102,0.15)] hover:bg-[rgba(37,211,102,0.03)]`}
    >
      <div className="w-9 h-9 rounded-[9px] shrink-0 bg-[rgba(255,80,80,0.08)] border border-[rgba(255,80,80,0.15)] flex items-center justify-center">
        <AlertIcon className="w-4 h-4" />
      </div>
      <div className="text-sm font-normal text-[rgba(242,249,244,0.65)] leading-[1.5]">
        {children}
      </div>
    </div>
  )
}

export function SectionLabel({ children, className = "", center = false }: { children: React.ReactNode; className?: string; center?: boolean }) {
  return (
    <div
      className={`text-[10px] font-semibold tracking-[3px] uppercase text-mm-green mb-5 flex items-center gap-3 ${center ? "justify-center" : ""} ${className}`}
    >
      <span className="w-8 h-px bg-mm-green" />
      {children}
    </div>
  )
}
