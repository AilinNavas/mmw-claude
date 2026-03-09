import Link from "next/link"
import { WhatsAppIcon } from "../mucho/icons"

export function CtaSection() {
  return (
    <section className="px-6 md:px-15 py-35 text-center relative">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-125 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(37,211,102,0.1) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-175 mx-auto z-10">
        <div className="inline-block text-[10px] font-semibold tracking-[3px] uppercase text-mm-green mb-6">
          Siguiente paso
        </div>

        <h2 className="font-sans text-[clamp(40px,5.5vw,68px)] font-extrabold leading-[1.05] tracking-[-2px] mb-5.5 text-mm-white">
          {"¿Tu negocio"}
          <br />
          {"esta listo para"}
          <br />
          <span className="text-mm-green">{"vender 24/7?"}</span>
        </h2>

        <p className="text-[16px] text-mm-grey leading-[1.65] mb-12">
          {"Una llamada de 30 minutos es suficiente para entender tu negocio y mostrarte exactamente como lo hariamos funcionar."}
        </p>

        <Link
          href="https://wa.me/543519046945?text=Hola%20Joel%2C%20quiero%20saber%20más%20sobre%20Mucho%20Marketing"
          className="inline-flex items-center gap-3.5 bg-mm-green text-[#050f0a] font-sans text-[17px] font-extrabold px-10 py-5 rounded-full no-underline tracking-[-0.2px] transition-all duration-250 hover:-translate-y-0.75 hover:scale-[1.02]"
          style={{
            boxShadow: "0 12px 48px rgba(37,211,102,0.4)",
          }}
        >
          <WhatsAppIcon className="w-6 h-6 shrink-0" />
          Hablar con Joel por WhatsApp
        </Link>

        <div className="text-xs text-mm-grey2 mt-5">
          {"Sin compromiso · Respuesta en menos de 1 hora"}
        </div>
      </div>
    </section>
  )
}