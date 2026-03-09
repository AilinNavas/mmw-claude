import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Mucho Marketing — Tu negocio vende mientras vos descansás",
  description:
    "Publicidad en redes + WhatsApp con IA y automatizaciones. Para que tu negocio venda aunque no estés mirando el teléfono.",
}

export const viewport: Viewport = {
  themeColor: "#050f0a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden cursor-default`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
