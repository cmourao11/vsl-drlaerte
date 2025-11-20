import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { whatsapp, nome, atuacao } = body

    // 1. Validação: Garante que os campos obrigatórios foram preenchidos
    if (!whatsapp || !nome || !atuacao) {
      return NextResponse.json(
        { error: "Todos os campos (WhatsApp, Nome, Atuação) são obrigatórios." },
        { status: 400 }
      )
    }

    // 2. Configuração da URL:
    // A URL do seu Web App do Google Apps Script
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNFfKxdD29EYORR77SWkUp9fXpXelqLE0Nida--lP05eKglEjhsmHwxckKhbt9v9Zc/exec"
    
    // O código tenta usar variáveis de ambiente, mas usa a SCRIPT_URL se falhar.
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || SCRIPT_URL

    if (!GOOGLE_SCRIPT_URL) {
      console.error("[API] URL do Google Script não encontrada.")
      return NextResponse.json(
        { error: "Erro de configuração no servidor." }, 
        { status: 500 }
      )
    }

    // 3. Preparar os dados para envio (JSON)
    const payload = {
      whatsapp,
      nome,
      atuacao,
      timestamp: new Date().toISOString(),
    }

    // 4. Enviar para o Google Apps Script
    // A opção 'redirect: "follow"' é fundamental para evitar o erro anterior
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow", 
      cache: "no-store",
    })

    // 5. Verificar resposta
    if (!response.ok) {
      console.error(`[API] Erro Google Sheets: ${response.status} ${response.statusText}`)
      return NextResponse.json(
        { error: "Falha ao comunicar com a planilha." }, 
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("[API] Erro crítico:", error)
    return NextResponse.json(
      { error: "Erro interno ao processar a inscrição." }, 
      { status: 500 }
    )
  }
}
