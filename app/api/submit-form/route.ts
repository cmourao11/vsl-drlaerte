import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { whatsapp, nome, atuacao } = body

    // Google Apps Script Web App URL - você precisará configurar isso
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ""

    if (!GOOGLE_SCRIPT_URL) {
      console.error("[v0] Google Script URL not configured")
      return NextResponse.json({ error: "Configuração do Google Sheets não encontrada" }, { status: 500 })
    }

    // Enviar dados para o Google Sheets via Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        whatsapp,
        nome,
        atuacao,
        timestamp: new Date().toISOString(),
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error submitting form:", error)
    return NextResponse.json({ error: "Erro ao enviar formulário" }, { status: 500 })
  }
}
