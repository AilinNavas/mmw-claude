import Link from "next/link"
import { WhatsAppIcon } from "./icons"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-15 pt-30 pb-20 relative overflow-hidden text-center">
      {/* Radial green glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-150 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(37,211,102,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,211,102,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,211,102,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-1 max-w-215">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[3px] uppercase text-mm-green bg-mm-green-xs border border-mm-green-dim px-4 py-1.5 rounded-full mb-8"
          style={{ animation: "fadeUp 0.6s ease both" }}
        >
          <span
            className="w-1.25 h-1.25 rounded-full bg-mm-green"
            style={{ animation: "blink 2s ease-in-out infinite" }}
          />
          {"Solucion omnicanal para PyMEs"}
        </div>

        {/* Title */}
        <h1
          className="font-sans text-[clamp(42px,7vw,82px)] font-black italic leading-none tracking-[-2.5px] mb-6.5 uppercase text-mm-white"
          style={{ animation: "fadeUp 0.6s 0.1s ease both" }}
        >
          Cada mensaje
          <br />
          sin respuesta
          <br />
          <span className="text-mm-grey">{"se va a la "}</span>
          <span className="text-mm-green">competencia</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-[16px] md:text-[18px] font-light text-mm-grey leading-[1.65] max-w-155 mx-auto mb-11"
          style={{ animation: "fadeUp 0.6s 0.2s ease both" }}
        >
          {"Publicidad en redes + WhatsApp con IA y automatizaciones."}
          <br />
          {"Para que tu negocio venda aunque no estes mirando el telefono."}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3.5 justify-center items-center"
          style={{ animation: "fadeUp 0.6s 0.3s ease both" }}
        >
          <Link
            href="https://wa.me/543519046945?text=Quiero%20activar%20mi%20prueba%20gratuita%20"
            className="inline-flex items-center gap-2.5 bg-mm-green text-[#050f0a] font-sans text-[15px] font-bold px-8 py-4 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5"
            style={{ boxShadow: "0 8px 32px rgba(37,211,102,0.35)" }}
          >
            <WhatsAppIcon className="w-4.5 h-4.5" />
            Empezar ahora
          </Link>
          <Link
            href="/sistema"
            className="group inline-flex items-center gap-2 text-mm-grey text-sm font-normal no-underline transition-colors duration-200 px-5 py-4 hover:text-mm-white"
          >
            {"Ver como funciona "}
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              {"→"}
            </span>
          </Link>
        </div>

        {/* Social proof */}
        <div
          className="mt-18 relative z-1 flex flex-wrap items-center gap-6 md:gap-8 justify-center"
          style={{ animation: "fadeUp 0.6s 0.4s ease both" }}
        >
          <ProofItem num="3x" label="mas ventas en 90 dias" />
          <div className="w-px h-7 bg-mm-border hidden sm:block" />
          <ProofItem num="24/7" label="atencion automatizada" />
          <div className="w-px h-7 bg-mm-border hidden sm:block" />
          <ProofItem num="1" label="punto de contacto" />
          <div className="w-px h-7 bg-mm-border hidden sm:block" />
          <ProofItem num="0" label="coordinacion extra para vos" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className=" absolute bottom-0 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-mm-grey2 text-[10px] tracking-[2px] uppercase hidden md:flex"
        style={{ animation: "fadeUp 0.6s 0.6s ease both" }}
      >
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, #25D366, transparent)",
            animation: "scroll-pulse 2s ease-in-out infinite",
          }}
        />
        scroll
      </div>
    </section>
  )
}

function ProofItem({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.75">
      <div className="font-sans text-[22px] md:text-[26px] font-extrabold text-mm-green tracking-[-1px]">
        {num}
      </div>
      <div className="text-[10.5px] text-mm-grey2 tracking-[0.5px]">{label}</div>
    </div>
  )
}
