"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

// Tempo da contagem regressiva em minutos
const COUNTDOWN_MINUTES = 15

export default function VimeoVSLPlayer() {
  const [timeRemaining, setTimeRemaining] = useState(COUNTDOWN_MINUTES * 60)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="relative w-full overflow-hidden rounded-lg shadow-2xl bg-black">
        {/* 
          AREA DE EMBED PERSONALIZADO 
          Cole seu código de iframe (VTurb, Panda, etc) aqui dentro.
          Mantenha a classe 'aspect-video' para garantir a proporção 16:9.
        */}
        <div className="w-full aspect-video flex items-center justify-center bg-gray-900 text-gray-400">
          <div className="text-center p-6">
            <p className="mb-4 font-bold text-white">Área do Vídeo (Custom Embed)</p>
            <p className="text-sm">Cole seu código de iframe aqui no arquivo <code>vimeo-vsl-player.tsx</code></p>
            {/* 
              EXEMPLO DE ONDE COLAR O CÓDIGO:
              <div dangerouslySetInnerHTML={{ __html: `SEU_CODIGO_IFRAME_AQUI` }} />
              
              OU SE FOR APENAS UM IFRAME DIRETO:
              <iframe src="..." ... />
            */}
          </div>
        </div>
      </div>

      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">

        {/* --- BLOCO DE RETENÇÃO (Trava Mental) --- */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          backgroundColor: 'rgba(236, 189, 60, 0.05)', // Gold sutil
          padding: '8px',
          borderRadius: '6px',
          border: '1px solid rgba(236, 189, 60, 0.1)',
          marginTop: '20px',
          marginBottom: '10px'
        }}>
          <AlertTriangle size={18} color="#ecbd3c" /> {/* Ícone Gold */}
          <p style={{
            color: '#ecbd3c', // Texto Gold
            fontSize: '12px',
            fontWeight: 'bold',
            textAlign: 'left',
            fontFamily: 'sans-serif',
            textTransform: 'uppercase',
            lineHeight: '1.2',
            margin: 0
          }}>
            Assista ao vídeo para entender os critérios<br />de aprovação antes de aplicar.
          </p>
        </div>
        {/* --- FIM DO BLOCO --- */}

        <Button
          asChild
          size="lg"
          className="w-full text-lg font-bold py-6 bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <a href="https://w.app/arzwrb" aria-label="Enviar minha inscrição para o grupo Executivo Digital">
            Enviar minha inscrição
          </a>
        </Button>
      </div>
    </div>
  )
}
