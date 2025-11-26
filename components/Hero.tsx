import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export const Hero: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Timer de 2 minutos (120000 ms)
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-20 pb-20 px-4 text-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] rounded-full bg-indigo-600 blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
          Proteja sua Gestão e Garanta a <span className="bg-primary px-2 py-0.5 rounded-md text-white inline-block transform -skew-x-3">Conformidade Legal</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Evite multas milionárias e danos à reputação. Implemente um programa de Governança e Compliance robusto e eficaz.
        </p>

        {/* Video Player */}
        <div className="mt-12 w-full max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden border border-gray-700 bg-black">
          <div className="relative pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1140928444?h=0&autoplay=1&title=0&byline=0&portrait=0"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo Video"
            ></iframe>
          </div>
        </div>

        {/* CTA Button - Delayed */}
        {showButton && (
          <div className="mt-10 flex justify-center animate-[fadeIn_1s_ease-in]">
            <a
              href="#cta"
              className="bg-primary hover:bg-primary-hover text-white font-bold text-lg md:text-xl py-4 px-10 rounded-lg shadow-lg shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center text-center"
            >
              <span>QUERO RESGUARDAR MINHA GESTÃO</span>
              <span className="text-xs md:text-sm italic font-normal opacity-90 mt-1">
                toque aqui e inicie uma conversa no WhatsApp
              </span>
            </a>
          </div>
        )}

        {/* Scarcity Warning */}
        <div className="mt-8 inline-flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-3 text-sm md:text-base text-gray-300 max-w-xl">
          <AlertTriangle className="text-yellow-500 w-5 h-5 flex-shrink-0" />
          <p>
            <strong className="text-yellow-500">ATENÇÃO:</strong> Esta consultoria é limitada. Garanta sua vaga antes que seja tarde demais.
          </p>
        </div>
      </div>
    </section>
  );
};