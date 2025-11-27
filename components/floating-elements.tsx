"use client"

import { useEffect, useRef } from "react"
import { Scale, Gavel, Landmark, Scroll } from 'lucide-react'

export default function FloatingElements() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Network nodes
    const nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    // Create nodes
    const nodeCount = 40
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move node
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(147, 51, 234, 0.6)" // Purple
        ctx.fill()

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i === j) return

          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only connect nearby nodes
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)

            // Opacity based on distance
            const opacity = (1 - distance / 150) * 0.3
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})` // Violet
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <>
      {/* Canvas for network connections */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Ambient glow orbs for depth */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px] animate-float-slow" />
        <div className="absolute top-[60%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px] animate-float-slower" />
        <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] rounded-full bg-violet-600/10 blur-[110px] animate-float-medium" />

        {/* Subtle Law Elements in Background */}
        <div className="absolute top-[15%] right-[5%] text-primary/5 animate-float-slow rotate-12">
          <Scale size={300} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-[10%] left-[10%] text-primary/5 animate-float-slower -rotate-12">
          <Landmark size={400} strokeWidth={0.5} />
        </div>
        <div className="absolute top-[40%] left-[5%] text-primary/5 animate-float-medium rotate-45">
          <Gavel size={200} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-[30%] right-[15%] text-primary/5 animate-float-slow -rotate-6">
          <Scroll size={250} strokeWidth={0.5} />
        </div>
      </div>
    </>
  )
}
