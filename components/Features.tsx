import React from 'react';
import { Gavel, TrendingDown, LineChart } from 'lucide-react';
import { RiskItem } from '../types';

const risks: RiskItem[] = [
  {
    title: 'O Fim da "Era do Amadorismo"',
    description: "Os Tribunais de Contas e o MP não toleram mais o erro técnico. Sem uma governança estruturada, o gestor responde pessoalmente (CPF) por falhas na instrução processual.",
    icon: 'gavel'
  },
  {
    title: "A Tese da Singularidade",
    description: "Pare de ter medo de contratar especialistas. Utilizamos a fundamentação técnica do Mestrado no IDP para justificar a inexigibilidade com robustez acadêmica e legal.",
    icon: 'chart'
  },
  {
    title: "O Ponto de Corte de 2026",
    description: "Quem não adequar o Plano de Contratações à Lei 14.133 agora, enfrentará o travamento da máquina pública no próximo ciclo eleitoral. A prevenção é a única saída.",
    icon: 'trending'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-dark-bg relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          O PREÇO DA INÉRCIA JURÍDICA
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          A falta de adequação às novas exigências legais pode comprometer o futuro da sua gestão. Entenda os riscos:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {risks.map((risk, index) => (
            <div 
              key={index} 
              className="bg-dark-card border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                {risk.icon === 'gavel' && <Gavel className="w-8 h-8 text-primary" />}
                {risk.icon === 'chart' && <LineChart className="w-8 h-8 text-primary" />}
                {risk.icon === 'trending' && <TrendingDown className="w-8 h-8 text-primary" />}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{risk.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {risk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};