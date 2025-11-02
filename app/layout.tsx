import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const fixtureBold = localFont({
  src: "../public/fonts/Fixture-Bold.ttf",
  variable: "--font-fixture",
  display: "swap",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fixtureBold.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
