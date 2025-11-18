"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Container do vídeo com proporção exata do Vimeo */}
      <div className="relative w-full" style={{ padding: "179.17% 0 0 0" }}>
        <iframe
          id="vimeo-player"
          src="https://player.vimeo.com/video/1136281028?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Executivo Digital - Como Networking e IA Vão Te Fazer Crescer no Mercado Digital"
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          loading="eager"
        />
      </div>

      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Button
          asChild
          size="lg"
          className="w-full text-lg font-bold py-6 bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_0nKOglj0jolKO7YFHDNbcD3IIGTACw59oop3c6zfbaEc2w/viewform?usp=dialog" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Solicitar análise de acesso ao grupo Executivo Digital"
          >
            SOLICITAR ANÁLISE DE ACESSO
          </a>
        </Button>

        <div className="text-center">
          <p className="text-red-500 font-bold text-sm flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" aria-hidden="true" />
            PREENCHA O FORMULÁRIO DE 3 PERGUNTAS SIMPLES PARA ANALISARMOS SUA ENTRADA
          </p>
        </div>
      </div>
    </div>
  )
}
