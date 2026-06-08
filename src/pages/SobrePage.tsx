import React from 'react';
import { Header } from '../components/Header';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { ArrowRight } from 'lucide-react';

const WA_URL = 'https://wa.me/5512996181553';

export const SobrePage: React.FC = () => {
  const { ref, inView } = useInViewAnimation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 py-12 md:py-20 flex flex-col justify-center">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content */}
          <div
            className={`lg:col-span-7 flex flex-col items-start ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <span className="font-mono text-xs text-[#051A24]/60 uppercase tracking-widest block mb-4">
              Sobre mim
            </span>
            
            <h1 className="font-serif-accent text-4xl md:text-5xl lg:text-6xl font-semibold text-[#051A24] tracking-tight mb-6 leading-tight">
              Lucas Lessa
            </h1>

            <p className="text-lg md:text-xl font-medium text-[#051A24]/90 mb-6 font-serif-accent italic">
              Engenheiro de Computação & Criador de Produtos Digitais
            </p>

            <div className="flex flex-col gap-5 text-[#051A24]/75 text-base md:text-lg leading-relaxed max-w-[620px]">
              <p>
                Olá! Sou o Lucas. Como Engenheiro de Computação, combino rigor lógico e técnico com uma paixão contínua por design visual de alto nível. Acredito que o melhor software não é apenas funcional e otimizado sob o capô, mas também visualmente impactante e intuitivo para o usuário.
              </p>
              <p>
                Fundei este estúdio para oferecer uma ponte entre ideias ousadas e soluções robustas de engenharia. Trabalho lado a lado com fundadores e empresas para criar aplicações sob medida, automatizar fluxos de trabalho operacionais, otimizar campanhas de anúncios digitais e resolver problemas complexos de infraestrutura e performance.
              </p>
              <p>
                Meu compromisso é com a qualidade de ponta a ponta: sem atalhos, com foco em escalabilidade e mantendo um nível de transparência impecável durante todo o desenvolvimento do projeto.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold bg-[#051A24] text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              >
                Vamos trabalhar juntos <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div
            className={`lg:col-span-5 flex justify-center lg:justify-end ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative group max-w-[380px] w-full">
              {/* Visual Decorative Box behind image */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#051A24]/5 to-[#051A24]/10 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-[#051A24]/10 transition-transform duration-300 group-hover:scale-[1.01]">
                <img
                  src="/lucas.png"
                  alt="Lucas Lessa"
                  className="w-full h-auto object-cover rounded-xl"
                  style={{ aspectRatio: '1 / 1' }}
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
