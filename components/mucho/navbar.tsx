"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/logo.png"

const links = [
  { href: "/#problema", label: "El problema" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/sistema", label: "Oferta" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 border-b border-mm-border bg-[rgba(5,15,10,0.75)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Mucho Logo"
            width={180}
            height={90}
           className="h-14 w-auto md:h-16"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[14px] font-medium text-mm-grey transition-colors duration-200 hover:text-mm-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="https://wa.me/543519046945?text=Hola%20Joel%2C%20quiero%20saber%20más%20sobre%20Mucho%20Marketing"
          className="hidden rounded-full bg-mm-green px-6 py-2.5 text-[14px] font-semibold text-[#050f0a] transition-all duration-200 hover:-translate-y-px md:inline-block"
          style={{
            boxShadow: "0 6px 25px rgba(37,211,102,0.25)",
          }}
        >
          Hablar con Joel
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.25 md:hidden"
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-mm-white transition-all duration-300 ${mobileOpen ? "translate-y-1.75 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-mm-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-mm-white transition-all duration-300 ${mobileOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 pb-6 pt-2 bg-[rgba(5,15,10,0.95)] backdrop-blur-xl border-t border-mm-border">

          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-[16px] font-medium text-mm-grey transition-colors hover:text-mm-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="https://wa.me/543519046945?text=Hola%20Joel%2C%20quiero%20saber%20más%20sobre%20Mucho%20Marketing"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-full bg-mm-green py-3 text-center text-[15px] font-semibold text-[#050f0a]"
          >
            Hablar con Joel
          </Link>

        </div>
      </div>
    </nav>
  )
}