import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { whatsapp, nome, atuacao } = body;

    // 1. Validação básica
    if (!whatsapp || !nome || !atuacao) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    // 2. URL do Script (A sua URL correta da Versão 4)
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNFfKxdD29EYORR77SWkUp9fXpXelqLE0Nida--lP05eKglEjhsmHwxckKhbt9v9Zc/exec";
    
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || SCRIPT_URL;

    // 3. Preparar Payload
    const payload = {
      whatsapp,
      nome,
      atuacao,
      timestamp: new Date().toISOString(),
    };

    // 4. Enviar para o Google (Modo Blindado)
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Adicionar User-Agent para evitar bloqueios de bot do Google
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      },
      body: JSON.stringify(payload),
      redirect: "follow",
      cache: "no-store",
    });

    // 5. Verificação simplificada
    // Se o status for 200 (OK) ou 302 (Redirect), consideramos sucesso.
    // Não tentamos ler o response.json() porque o Google às vezes retorna HTML no redirect.
    if (response.status === 200 || response.status === 302) {
      return NextResponse.json({ success: true });
    } else {
      console.error(`[API] Google respondeu com erro: ${response.status}`);
      // Mesmo com erro de status, às vezes o Google grava. 
      // Mas vamos retornar erro para o frontend saber.
      return NextResponse.json(
        { error: "Erro na comunicação com a planilha." },
        { status: 502 }
      );
    }

  } catch (error) {
    console.error("[API] Erro crítico:", error);
    return NextResponse.json(
      { error: "Erro interno ao processar." },
      { status: 500 }
    );
  }
}
