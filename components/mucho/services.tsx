import { SectionLabel } from "./problem"
import {
  MonitorIcon,
  WhatsAppIcon,
  ActivityIcon,
  LayersIcon,
  UsersIcon,
} from "./icons"

const serviceCards = [
  {
    icon: MonitorIcon,
    name: "Contenido y Publicidad",
    desc: "Diseno de piezas, edicion de video, scripts, musica, calendarizacion y publicacion en todas las plataformas. Pauta en Meta incluida en la gestion.",
    tags: ["Instagram", "Facebook", "TikTok", "YouTube", "Meta Ads"],
    featured: true,
  },
  {
    icon: WhatsAppIcon,
    name: "Gestion de WhatsApp y Leads",
    desc: "Bot con IA que responde 24/7, califica leads, agenda y escala al equipo. Ningun mensaje queda sin respuesta.",
    tags: ["WhatsApp Business API", "IA conversacional", "Respuesta 24/7"],
    featured: false,
  },
  {
    icon: ActivityIcon,
    name: "CRM y Automatizaciones",
    desc: "Kommo CRM configurado y operado: pipelines, seguimientos automaticos, remarketing y reportes de conversion mensuales.",
    tags: ["Kommo CRM", "Remarketing", "Reportes"],
    featured: false,
  },
  {
    icon: LayersIcon,
    name: "Integraciones Tecnicas",
    desc: "Sincronizacion con tu sistema de gestion (PMS, ERP, reservas). Webhooks, automatizaciones entre plataformas y soporte tecnico continuo.",
    tags: ["MiniHotel PMS", "Webhooks", "Soporte"],
    featured: false,
  },
]

const strategyBullets = [
  "Sin reuniones de coordinacion extra",
  "Un solo interlocutor para todo",
  "Resultados medibles desde el mes 1",
]

export function Services() {
  return (
    <section id="servicios" className="px-6 md:px-15 py-30 max-w-300
     mx-auto relative z-1">
      {/* Header */}
      <div className="mb-14">
        <SectionLabel className="reveal">Que incluye</SectionLabel>
        <h2 className="reveal reveal-delay-1 font-sans text-[clamp(36px,4vw,52px)] font-extrabold tracking-[-1.5px] mt-5 text-mm-white">
          Todo lo que tu negocio
          <br />
          necesita para <span className="text-mm-green">crecer</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceCards.map((card, i) => (
          <div
            key={card.name}
            className={`reveal reveal-delay-${(i % 4) + 1} rounded-2xl p-8 border transition-all duration-300 cursor-default hover:-translate-y-1 ${
              card.featured
                ? "border-[rgba(37,211,102,0.35)] hover:border-[rgba(37,211,102,0.5)]"
                : "border-mm-border hover:border-[rgba(37,211,102,0.25)] hover:bg-[rgba(37,211,102,0.04)]"
            }`}
            style={{
              background: card.featured
                ? "linear-gradient(135deg, rgba(37,211,102,0.1) 0%, rgba(37,211,102,0.03) 100%)"
                : "rgba(255,255,255,0.02)",
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-mm-green-xs border border-mm-green-dim flex items-center justify-center mb-5">
              <card.icon className="w-5.5 h-5.5" />
            </div>
            <div className="font-sans text-[17px] font-bold mb-2.5 tracking-[-0.2px] text-mm-white">
              {card.name}
            </div>
            <div className="text-[13px] text-mm-grey leading-[1.65]">{card.desc}</div>
            <div className="flex flex-wrap gap-1.5 mt-4.5">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-mm-green-xs border border-mm-green-dim text-[rgba(37,211,102,0.75)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Strategy card (spans 2 cols) */}
        <div
          className="reveal reveal-delay-2 lg:col-span-2 rounded-2xl p-8 border border-mm-border bg-[rgba(255,255,255,0.02)] transition-all duration-300 hover:border-[rgba(37,211,102,0.25)] hover:bg-[rgba(37,211,102,0.04)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-mm-green-xs border border-mm-green-dim flex items-center justify-center mb-5">
                <UsersIcon className="w-5.5 h-5.5" />
              </div>
              <div className="font-sans text-[17px] font-bold mb-2.5 tracking-[-0.2px] text-mm-white">
                {"Estrategia y Direccion de Cuenta"}
              </div>
              <div className="text-[13px] text-mm-grey leading-[1.65]">
                {"Planificacion mensual, briefings, supervision de calidad, ajuste de estrategia segun resultados y reporte ejecutivo. Todo bajo la direccion de Joel."}
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              {strategyBullets.map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-3 px-4 py-3.5 bg-[rgba(37,211,102,0.05)] border border-[rgba(37,211,102,0.15)] rounded-[10px]"
                >
                  <div
                    className="w-2 h-2 rounded-full bg-mm-green shrink-0"
                    style={{ boxShadow: "0 0 8px rgba(37,211,102,0.6)" }}
                  />
                  <span className="text-[13px] text-[rgba(242,249,244,0.75)]">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
