"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function VSLPlayer() {
  const [showButton, setShowButton] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutos em segundos
  const [countdownStarted, setCountdownStarted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<any>(null)

  const VIDEO_URL = "https://youtube.com/shorts/PQifsOM8INw?feature=share"
  const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/H3ywUmbhXjZDkLiROUlPLx?mode=wwt"
  const BUTTON_APPEAR_TIME = 129 // 2 minutos e 9 segundos

  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be")
  }

  const getYouTubeVideoId = (url: string) => {
    const patterns = [
      /(?:youtube\.com\/shorts\/)([\w-]+)/,
      /(?:youtube\.com\/watch\?v=)([\w-]+)/,
      /(?:youtu\.be\/)([\w-]+)/,
      /(?:youtube\.com\/embed\/)([\w-]+)/,
    ]

    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) return match[1]
    }
    return null
  }

  const isYouTube = isYouTubeUrl(VIDEO_URL)
  const youtubeVideoId = isYouTube ? getYouTubeVideoId(VIDEO_URL) : null

  useEffect(() => {
    if (!isYouTube || !youtubeVideoId) return

    // Load YouTube iframe API
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // @ts-ignore
    window.onYouTubeIframeAPIReady = () => {
      // @ts-ignore
      playerRef.current = new window.YT.Player("youtube-player", {
        events: {
          onReady: (event: any) => {
            // Check video time every second
            const interval = setInterval(() => {
              if (playerRef.current && playerRef.current.getCurrentTime) {
                const currentTime = playerRef.current.getCurrentTime()
                if (currentTime >= BUTTON_APPEAR_TIME && !showButton) {
                  setShowButton(true)
                  setCountdownStarted(true)
                  clearInterval(interval)
                }
              }
            }, 1000)
          },
        },
      })
    }
  }, [isYouTube, youtubeVideoId, showButton])

  useEffect(() => {
    if (isYouTube) return // Skip for YouTube videos - handled by iframe API

    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime

      if (currentTime >= BUTTON_APPEAR_TIME && !showButton) {
        setShowButton(true)
        setCountdownStarted(true)
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [showButton, isYouTube])

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
            {isYouTube && youtubeVideoId ? (
              <iframe
                id="youtube-player"
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&showinfo=0&enablejsapi=1`}
                title="VSL Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ pointerEvents: "auto" }}
              />
            ) : (
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                playsInline
                autoPlay
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                style={{ pointerEvents: "none" }}
              >
                <source src={VIDEO_URL} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            )}
          </div>
        </div>

        {/* Content Below Video */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-balance bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent tracking-tighter my-4 px-0 mx-0 border-4 md:text-4xl">
              Como Networking e IA Vão Te Fazer Crescer no Mercado Digital
            </h1>
            <p className="md:text-xl max-w-2xl mx-auto text-pretty font-extralight text-sm text-[rgba(53,217,12,1)]">
              ASSISTA ATÉ O FINAL PARA LIBERAR O ACESSO            
            </p>
          </div>

          {/* Instagram Reference */}
          <div className="text-sm text-muted-foreground/60">@claudio_mannarino Instagram</div>

          {showButton && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all hover:scale-105"
                asChild
              >
                <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer">
                  ENTRAR NO GRUPO DE WHATSAPP
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
