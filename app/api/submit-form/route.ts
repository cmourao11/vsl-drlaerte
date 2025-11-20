import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { whatsapp, nome, atuacao } = body

    // Validação básica
    if (!whatsapp || !nome || !atuacao) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      )
    }

    // URL do seu Google Apps Script (Versão 4)
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNFfKxdD29EYORR77SWkUp9fXpXelqLE0Nida--lP05eKglEjhsmHwxckKhbt9v9Zc/exec"
    
    // Define a URL final
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || SCRIPT_URL

    if (!GOOGLE_SCRIPT_URL) {
      return NextResponse.json({ error: "Configuração ausente." }, { status: 500 })
    }

    const payload = {
      whatsapp,
      nome,
      atuacao,
      timestamp: new Date().toISOString(),
    }

    // Envio para o Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow", // Importante para seguir o redirecionamento do Google
      cache: "no-store",
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Erro na comunicação com a planilha." }, { status: 502 })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Erro interno ao processar." }, { status: 500 })
  }
}
