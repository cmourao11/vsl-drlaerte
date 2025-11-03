import VSLPlayer from "@/components/vsl-player"
import FloatingElements from "@/components/floating-elements"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen vsl-gradient relative">
      <FloatingElements />
      <div className="relative z-10 pt-8 pb-4 flex justify-center text-center">
        
      </div>
      <div className="relative z-10 flex justify-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-balance">Vtx Estratégia</h1>
      </div>
      <VSLPlayer />
    </main>
  )
}
