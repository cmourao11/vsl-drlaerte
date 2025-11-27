import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark-surface to-dark-bg relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-dark-card rounded-2xl border border-gray-700 shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-visible">

          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="flex-shrink-0 relative group">
            <div className="w-48 h-48 rounded-full border-4 border-primary p-1 shadow-xl relative z-20 bg-dark-card">
              <img
                src="/dr-laerte-profile.jpg"
                alt="Dr. Laerte Fonseca"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-6">QUEM VAI RESGUARDAR SUA ESTRATÉGIA?</h2>
            <div className="text-gray-300 leading-relaxed text-base space-y-4">
              <p>
                <strong className="text-white">Dr. Laerte Fonseca (OAB/SE 6.779)</strong> não é apenas um advogado, é um estrategista de Direito Público.
              </p>
              <p>
                Mestre em Direito pelo IDP (Brasília) — uma das instituições mais respeitadas pelos Tribunais Superiores — defendeu sua tese justamente sobre o conceito de Singularidade na Nova Lei de Licitações.
              </p>
              <p>
                Fundador de uma banca que já atendeu mais de 16.000 clientes e possui 4 unidades estratégicas, ele une a vivência prática do gestor que começou do zero à sofisticação técnica exigida em Brasília. Sua missão é clara: levar a segurança jurídica da Capital Federal para o dia a dia do seu município.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};