import FloatingElements from "@/components/floating-elements"
import Image from "next/image"
import VimeoVSLPlayer from "@/components/vimeo-vsl-player"

export default function Home() {
  return (
    <main className="min-h-screen vsl-gradient relative">
      <FloatingElements />
      <div className="relative z-10 pt-8 pb-4 flex justify-center text-center">
        <Image
          src="/logo.png"
          alt="Executivo Digital"
          width={400}
          height={80}
          className="w-auto h-12 md:h-16 text-justify"
          priority
        />
      </div>
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <VimeoVSLPlayer />

        <div className="mt-6 text-center">
          
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            FAÇA PARTE DO MAIOR HUB DE SERVIÇOS DO BRASIL              
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Toque no botão acima e aguarde a aprovação da sua entrada                       
          </p>
        </div>
      </div>
    </main>
  )
}
