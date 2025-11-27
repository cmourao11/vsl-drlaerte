"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, AlertTriangle } from "lucide-react"

// Tempo da contagem regressiva em minutos
const COUNTDOWN_MINUTES = 15

declare global {
  interface Window {
    Vimeo: any
  }
}

export default function VimeoVSLPlayer() {
  const [timeRemaining, setTimeRemaining] = useState(COUNTDOWN_MINUTES * 60)
  const [isMuted, setIsMuted] = useState(true)
  const [showUnmuteButton, setShowUnmuteButton] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<any>(null)
  const [vimeoLoaded, setVimeoLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && !window.Vimeo) {
      const script = document.createElement("script")
      script.src = "https://player.vimeo.com/api/player.js"
      script.async = true
      script.onload = () => setVimeoLoaded(true)
      document.body.appendChild(script)

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    } else if (window.Vimeo) {
      setVimeoLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (!vimeoLoaded || !iframeRef.current || playerRef.current) return

    const player = new window.Vimeo.Player(iframeRef.current)
    playerRef.current = player

    player.ready().then(() => {
      player.setVolume(1).catch(() => {
        player.setMuted(true)
        player.play()
      })

      player.on("volumechange", (data: any) => {
        setIsMuted(data.volume === 0 || data.muted)
        setShowUnmuteButton(data.volume === 0 || data.muted)
      })
    })

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy().catch(() => { })
        playerRef.current = null
      }
    }
  }, [vimeoLoaded])

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

  const toggleMute = async () => {
    if (!playerRef.current) return

    try {
      if (isMuted) {
        await playerRef.current.setVolume(1)
        await playerRef.current.setMuted(false)
      } else {
        await playerRef.current.setVolume(0)
        await playerRef.current.setMuted(true)
      }
    } catch (error) {
      console.error("Erro ao alterar volume:", error)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div
        className="relative w-full max-h-[50vh] md:max-h-none overflow-hidden rounded-lg group"
        style={{ paddingBottom: "min(179.17%, 50vh)" }}
      >
        <div className="absolute inset-0 w-full h-full">
          <iframe
            ref={iframeRef}
            id="vimeo-player"
            src="https://player.vimeo.com/video/1136281028?autoplay=1&loop=0&muted=1&controls=0&title=0&byline=0&portrait=0&playsinline=1&autopause=0&dnt=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Executivo Digital - Como Networking e IA Vão Te Fazer Crescer no Mercado Digital"
            className="w-full h-full shadow-2xl pointer-events-none"
            loading="eager"
          />
        </div>

        {showUnmuteButton && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <button
              onClick={toggleMute}
              className="pointer-events-auto bg-black/70 hover:bg-black/90 text-white px-6 py-3 rounded-full font-bold flex items-center gap-3 transition-all transform hover:scale-105 backdrop-blur-sm border border-white/20 animate-pulse"
            >
              <VolumeX className="w-6 h-6" />
              TOQUE PARA ATIVAR O SOM
            </button>
          </div>
        )}


      </div>

      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">

        {/* --- BLOCO DE RETENÇÃO (Trava Mental) --- */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)', // Fundo sutil
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginTop: '20px',
          marginBottom: '10px'
        }}>
          <AlertTriangle size={20} color="#fbbf24" /> {/* Ícone de Alerta Amarelo */}
          <p style={{
            color: '#fbbf24', // Texto Amarelo/Dourado
            fontSize: '13px',
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
          <a href="/inscricao" aria-label="Enviar minha inscrição para o grupo Executivo Digital">
            Enviar minha inscrição
          </a>
        </Button>
      </div>
    </div>
  )
}
