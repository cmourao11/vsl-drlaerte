import React, { useState, useEffect } from 'react';

export const Footer: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Timer de 2 minutos (120000 ms) sincronizado com o Hero
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer id="cta" className="bg-black py-16 px-4 border-t border-gray-800">
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          Sua gestão não pode esperar o primeiro apontamento do Tribunal.
        </h3>
        <p className="text-gray-400 text-lg mb-10">
          Agende uma consulta inicial para avaliar a maturidade do seu programa de compliance.
        </p>

        {showButton && (
          <a 
            href="#"
            className="inline-flex flex-col items-center bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 px-12 rounded-lg shadow-lg transition-all duration-300 mb-12 animate-[fadeIn_1s_ease-in]"
          >
            <span className="uppercase">FALAR COM DR LAERTE</span>
            <span className="text-sm italic font-normal opacity-90 mt-1">
              toque aqui e inicie uma conversa no WhatsApp
            </span>
          </a>
        )}

        {!showButton && (
          <div className="h-24 mb-12" aria-hidden="true">
            {/* Espaço reservado para evitar pulo de layout drástico */}
          </div>
        )}

        <div className="pt-8 border-t border-gray-800 text-sm text-gray-500">
          <p className="mb-2 font-semibold">Laerte Fonseca & Advogados Associados | CNPJ: 28.200.683/0001-40</p>
          <p className="mb-4">Lagarto - Aracaju - Cristinápolis - N. Sra. das Dores</p>
          <p>© 2024. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};