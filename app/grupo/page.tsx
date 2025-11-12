import FloatingElements from "@/components/floating-elements"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GrupoPage() {
  const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/H3ywUmbhXjZDkLiROUlPLx?mode=wwt"

  return (
    <main className="min-h-screen vsl-gradient relative flex flex-col">
      <FloatingElements />

      <div className="relative z-10 pt-8 pb-4 flex justify-center text-center">
        <Image
          src="/logo.png"
          alt="Executivo Digital"
          width={400}
          height={80}
          className="w-auto h-12 md:h-16"
          priority
        />
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10 px-4">
        <div className="text-center space-y-8 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-balance bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent tracking-tighter">
            TOQUE PARA ENTRAR NO GRUPO DE WHATSAPP
          </h1>

          <Button
            size="lg"
            className="text-2xl md:text-3xl px-12 py-8 md:py-10 h-auto bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl shadow-[#25D366]/40 hover:shadow-3xl hover:shadow-[#25D366]/50 transition-all hover:scale-105 animate-pulse"
            asChild
          >
            <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer">
              ENTRAR AGORA
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
