import { SectionLabel } from "./problem"
import { MonitorIcon, ChatIcon, CheckCircleIcon, DollarIcon } from "./icons"

const steps = [
  {
    num: 1,
    icon: MonitorIcon,
    title: "Contenido en redes",
    desc: "Publicamos en Instagram, Facebook, TikTok y YouTube. Organico y pauta Meta para generar alcance constante.",
  },
  {
    num: 2,
    icon: ChatIcon,
    title: "El lead escribe por WhatsApp",
    desc: "Todo el trafico converge en WhatsApp Business. El bot responde al instante, califica y escala al agente.",
  },
  {
    num: 3,
    icon: CheckCircleIcon,
    title: "Gestion y cierre en CRM",
    desc: "Kommo CRM registra cada lead, programa seguimientos y automatiza propuestas. Ningun contacto se pierde.",
  },
  {
    num: 4,
    icon: DollarIcon,
    title: "Venta confirmada",
    desc: "Reserva, compra o contrato cerrado. El sistema registra, el remarketing retiene y el ciclo se repite solo.",
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="px-6 md:px-[60px] py-[120px] bg-[rgba(255,255,255,0.01)] border-t border-b border-mm-border relative z-1"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[72px]">
          <SectionLabel center className="reveal">
            Como funciona
          </SectionLabel>
          <h2 className="reveal reveal-delay-1 font-sans text-[clamp(36px,4vw,52px)] font-extrabold tracking-[-1.5px] mt-5 text-mm-white">
            Del scroll a la <span className="text-mm-green">venta confirmada</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-[44px] left-[12.5%] right-[12.5%] h-px z-0"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(37,211,102,0.3) 20%, rgba(37,211,102,0.3) 80%, transparent)",
            }}
          />

          {steps.map((step) => (
            <Step key={step.num} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Step({
  num,
  icon: Icon,
  title,
  desc,
}: {
  num: number
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
}) {
  return (
    <div
      className={`reveal reveal-delay-${num} group flex flex-col items-center text-center px-6 relative z-1`}
    >
      <div className="w-[88px] h-[88px] rounded-full bg-mm-bg border border-[rgba(37,211,102,0.3)] flex items-center justify-center mb-6 relative transition-all duration-300 group-hover:border-[rgba(37,211,102,0.7)] group-hover:shadow-[0_0_28px_rgba(37,211,102,0.2)]">
        <Icon className="w-7 h-7" />
        <span className="absolute -top-1.5 -right-1.5 w-[22px] h-[22px] rounded-full bg-mm-green text-[#050f0a] font-sans text-[10px] font-extrabold flex items-center justify-center">
          {num}
        </span>
      </div>
      <div className="font-sans text-[16px] font-bold mb-2.5 text-mm-white">{title}</div>
      <div className="text-[13px] text-mm-grey leading-[1.6]">{desc}</div>
    </div>
  )
}
