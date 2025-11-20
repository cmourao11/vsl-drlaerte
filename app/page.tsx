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

        {/* --- INÍCIO DA NOVA FRASE --- */}
        <div style={{ textAlign: 'center', marginTop: '24px', marginBottom: '8px' }}>
            <p style={{ 
                color: '#FFFFFF', 
                fontSize: '16px', 
                fontWeight: 'bold', 
                fontFamily: 'sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
            }}>
                VOCÊ ESTÁ PREPARADO(A)?
            </p>
        </div>
        {/* --- FIM DA NOVA FRASE --- */}

        <section className="mt-8 md:mt-12 max-w-3xl mx-auto text-center space-y-6">
          <h1 className="font-bold text-balance bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent md:text-xs text-base">
            O acesso é restrito. O filtro é necessário. Se você se considera apto a sentar nessa mesa, toque no botão e inicie sua aplicação agora.                                              
          </h1>
          
        </section>

        <footer className="mt-8 text-center">
          {/* AQUI MUDEI A COR PARA BRANCO PURO */}
          <p className="text-sm" style={{ color: '#FFFFFF', opacity: 0.9 }}>
            <a 
              href="https://instagram.com/claudio_mannarino" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Visite o perfil do Instagram de Claudio Mannarino"
            >
               Assista ao vídeo            
            </a>
          </p>
        </footer>
      </article>
    </main>
  )
}
