import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FloatingElements from "@/components/floating-elements"
import { CheckCircle2 } from "lucide-react"

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen vsl-gradient relative flex flex-col">
      <FloatingElements />

      <header className="relative z-10 pt-4 md:pt-8 pb-2 md:pb-4 flex justify-center text-center px-4">
        <Link href="/" className="w-full max-w-3xl">
          <Image
            src="/capa-formulario.jpg"
            alt="Ecossistema de Líderes e Decisores"
            width={1200}
            height={300}
            className="w-full h-auto rounded-lg shadow-lg hover:opacity-95 transition-opacity"
            priority
          />
        </Link>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10 flex-1 flex items-center justify-center">
        <Card className="w-full max-w-lg bg-black/40 border-white/10 backdrop-blur-md shadow-2xl">
          <CardContent className="pt-10 pb-10 text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Inscrição Recebida!</h2>
              <p className="text-gray-300">
                Seus dados foram enviados para análise. Se aprovado, você receberá o acesso no seu WhatsApp.
              </p>
            </div>
            <Button asChild className="mt-6 bg-green-600 hover:bg-green-700 text-white w-full">
              <Link href="/">Voltar para o início</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
