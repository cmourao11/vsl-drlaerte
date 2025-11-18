import type React from "react"
import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const fixtureBold = localFont({
  src: "../public/fonts/Fixture-Bold.ttf",
  variable: "--font-fixture",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Executivo Digital - Hub de Networking e IA para o Mercado Digital 2025",
  description: "Faça parte do maior hub de networking do Brasil. Conecte-se com profissionais do mercado digital e aprenda a usar IA para crescer em 2025. Networking exclusivo e qualificado.",
  generator: "v0.app",
  keywords: ["networking digital", "IA", "inteligência artificial", "mercado digital", "executivo digital", "hub de serviços", "networking 2025", "empreendedorismo digital"],
  authors: [{ name: "Claudio Mannarino", url: "https://instagram.com/claudio_mannarino" }],
  creator: "Executivo Digital",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Executivo Digital - Networking e IA para o Mercado Digital",
    description: "Conecte-se com profissionais do mercado digital e aprenda a usar IA para crescer em 2025",
    siteName: "Executivo Digital",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Executivo Digital - Hub de Networking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Executivo Digital - Networking e IA para o Mercado Digital",
    description: "Faça parte do maior hub de networking do Brasil para profissionais digitais",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6366f1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PH63JMTH');
        `}
      </Script>
      <body className={`${fixtureBold.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PH63JMTH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
