"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card"
import FloatingElements from "@/components/floating-elements"
import { CheckCircle2, ArrowLeft } from "lucide-react"

export default function InscricaoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    whatsapp: "",
    nome: "",
    atuacao: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        console.error("[v0] Failed to submit form")
        alert("Erro ao enviar formulário. Por favor, tente novamente.")
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      alert("Erro ao enviar formulário. Por favor, tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen vsl-gradient relative flex flex-col">
      <FloatingElements />

      <div className="absolute top-4 left-4 z-20">
        <Button asChild variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 gap-2">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
        </Button>
      </div>

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
          {submitted ? (
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
          ) : (
            <>
              <CardHeader className="space-y-4 border-b border-white/10 pb-6">
                <div className="space-y-2">
                  <CardDescription className="text-gray-300 text-base">
                    Este formulário é o filtro para manter o nível da nossa comunidade.
                  </CardDescription>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>O objetivo é garantir 100% de qualificação, conectando líderes, empresários e gestores.</p>
                  <p className="text-white font-medium">
                    Preencha seus dados para análise. Se aprovado, você receberá o acesso no seu WhatsApp.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-white text-base">
                      WhatsApp <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="whatsapp"
                      placeholder="(00) 00000-0000"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-white text-base">
                      Nome <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="nome"
                      placeholder="Seu nome completo"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="atuacao" className="text-white text-base">
                      Sua área de atuação <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="atuacao"
                      placeholder="Ex: Gestor, Figura Pública, Empresário(a)..."
                      required
                      value={formData.atuacao}
                      onChange={(e) => setFormData({ ...formData, atuacao: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 h-12"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 text-lg mt-4"
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "ENVIAR"}
                  </Button>
                </form>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </main>
  )
}
