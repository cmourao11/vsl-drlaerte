import VSLPlayer from "@/components/vsl-player"
import FloatingElements from "@/components/floating-elements"
import Image from "next/image"

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
      <VSLPlayer />
    </main>
  )
}
