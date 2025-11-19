import FloatingElements from "@/components/floating-elements"
import Image from "next/image"
import VimeoVSLPlayer from "@/components/vimeo-vsl-player"

export default function Home() {
  return (
    <main className="min-h-screen vsl-gradient relative">
      <FloatingElements />
      
      <header className="relative z-10 pt-4 md:pt-8 pb-2 md:pb-4 flex justify-center text-center">
        <Image
          src="/logo.png"
          alt="Executivo Digital - Hub de Networking e IA para o Mercado Digital"
          width={400}
          height={80}
          className="w-auto h-10 md:h-16"
          priority
          quality={90}
        />
      </header>

      <article className="container mx-auto px-4 py-4 md:py-12 relative z-10">
        <VimeoVSLPlayer />

        <section className="mt-8 md:mt-12 max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold text-balance bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            VOCÊ TEM A CHANCE DE ESTAR COM OS MELHORES, NA NOSSA COMUNIDADE DE WHATSAPP.                                                  
          </h1>
          
        </section>

        <footer className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <a 
              href="https://instagram.com/claudio_mannarino" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Visite o perfil do Instagram de Claudio Mannarino"
            >
              @claudio_mannarino Instagram
            </a>
          </p>
        </footer>
      </article>
    </main>
  )
}
