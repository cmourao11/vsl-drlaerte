"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function VSLPlayer() {
  const [showButton, setShowButton] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutos em segundos
  const [countdownStarted, setCountdownStarted] = useState(false)
  const [videoDuration, setVideoDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const VIDEO_URL =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bloco_2_a_202510312123_crghy-TyCK2ArJmxkSZZFkBFDgc7dDdiwd3s.mp4"
  const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/H3ywUmbhXjZDkLiROUlPLx?mode=wwt"

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration)
    }

    const handleTimeUpdate = () => {
      const timeRemaining = video.duration - video.currentTime

      if (timeRemaining <= 60 && !showButton) {
        setShowButton(true)
        setCountdownStarted(true)
      }
    }

    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("timeupdate", handleTimeUpdate)

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [showButton])

  // Countdown timer
  useEffect(() => {
    if (!countdownStarted) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [countdownStarted])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full mx-auto mb-8">
          <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20 bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              controls
              playsInline
              controlsList="nodownload"
            >
              <source src={VIDEO_URL} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>
        </div>

        {/* Content Below Video */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-balance bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Essa estratégia é para poucos
            </h1>
            <p className="md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty font-extralight text-sm">
              O segredo validao e aplicado em 5 estados brasileiros
            </p>
            <p className="text-lg md:text-xl text-primary/80 font-medium">@vtxestrategia</p>
          </div>

          {/* CTA Button with Countdown */}
          {showButton && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
                asChild
              >
                <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer">
                  Quero Garantir Minha Vaga Agora
                </a>
              </Button>

              {/* Countdown Timer */}
              {timeLeft > 0 && (
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
                    <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                    <span className="text-destructive font-semibold">Oferta expira em: {formatTime(timeLeft)}</span>
                  </div>
                </div>
              )}

              {timeLeft === 0 && <div className="text-destructive font-semibold animate-pulse">Oferta Expirada!</div>}
            </div>
          )}

          <div className="pt-8 flex flex-wrap items-center justify-center text-sm text-muted-foreground gap-2.5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span className="text-[rgba(15,221,60,1)]">Acesse a comunidade no WhatsApp </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span>Método Validado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span>Comunidade Exclusiva</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
