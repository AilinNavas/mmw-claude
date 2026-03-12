import { SectionLabel } from "./problem"
import { StarIcon } from "./icons"

const testimonials = [
  {
    quote:
      'Antes contestabamos consultas a las 10 de la noche. Hoy el bot responde, califica y nosotros solo confirmamos la reserva.',
    highlight: "Triplicamos las reservas en 3 meses.",
    name: "Maria Gonzalez",
    biz: "Apart Hotel, Punta del Este",
    initial: "M",
    featured: true,
  },
  {
    quote:
      'Tenia un disenador, un community manager y un vendedor por separado. Era un caos coordinarlos.',
    highlight: "Con Joel todo fluyo desde el dia uno.",
    extra: " El contenido se publica solo y los leads llegan por WhatsApp.",
    name: "Roberto Pereyra",
    biz: "Inmobiliaria, Montevideo",
    initial: "R",
    featured: false,
  },
  {
    quote:
      'Lo que mas me sorprendio fue la integracion con nuestro sistema de reservas.',
    highlight: "Cero trabajo manual de nuestra parte.",
    extra: " El cliente confirma por WhatsApp y ya aparece en el PMS.",
    name: "Carla Mendez",
    biz: "Complejo turistico, Colonia",
    initial: "C",
    featured: false,
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="px-6 md:px-15 py-30 bg-[rgba(255,255,255,0.01)] border-t border-b border-mm-border relative z-1"
    >
      <div className="max-w-300 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel center className="reveal">
            Lo que dicen los clientes
          </SectionLabel>
          <h2 className="reveal reveal-delay-1 font-sans text-[clamp(32px,3.5vw,46px)] font-extrabold tracking-[-1.2px] mt-5 text-mm-white">
            Resultados que <span className="text-mm-green">hablan solos</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-7.5 flex flex-col gap-5 border transition-colors duration-300 hover:border-[rgba(37,211,102,0.2)] ${
                t.featured
                  ? "border-[rgba(37,211,102,0.25)]"
                  : "border-mm-border bg-[rgba(255,255,255,0.02)]"
              }`}
              style={{
                background: t.featured
                  ? "linear-gradient(135deg, rgba(37,211,102,0.08) 0%, rgba(37,211,102,0.02) 100%)"
                  : "rgba(255,255,255,0.02)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} className="w-3.5 h-3.5" />
                ))}
              </div>

              {/* Quote */}
              <div className="text-sm text-[rgba(242,249,244,0.72)] leading-[1.7] italic flex-1">
                {t.quote}{" "}
                <strong className="text-mm-white not-italic font-semibold">
                  {t.highlight}
                </strong>
                {t.extra || ""}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9.5 h-9.5 rounded-full flex items-center justify-center font-sans text-sm font-bold text-[#050f0a] shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #25D366, #0d5c2e)",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-mm-white">{t.name}</div>
                  <div className="text-[11px] text-mm-grey2 mt-0.5">{t.biz}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
