import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const shadowInset = 'inset 0 2px 16px 0 rgba(255,255,255,0.08)';
const shadowPrimary =
  '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)';
const shadowSecondary = '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)';

const WA_URL = 'https://wa.me/5512996181553';

export const PricingSection: React.FC = () => {
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full py-12 px-6"
    >
      <div className="max-w-4xl md:ml-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 — Dark */}
        <div
          className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 flex flex-col gap-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{
            background: '#051A24',
            boxShadow: shadowInset,
            animationDelay: '0.1s',
          }}
        >
          <div className="pt-4">
            <p className="text-[11px] font-mono text-[#E0EBF0]/60 uppercase tracking-widest mb-3">Mais popular</p>
            <h3 className="text-[22px] font-medium text-[#F6FCFF] leading-snug">
              Parceria Mensal
            </h3>
            <p className="text-sm text-[#E0EBF0]/70 mt-2 leading-relaxed">
              Uma equipe criativa dedicada.<br />
              Você trabalha diretamente com Lucas.
            </p>
          </div>

          <div className="flex-1" />

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium bg-[#F6FCFF] text-[#051A24] transition-all duration-200 hover:opacity-90"
              style={{ boxShadow: shadowPrimary }}
            >
              Iniciar conversa
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium text-[#E0EBF0] transition-all duration-200 hover:opacity-70"
              style={{ boxShadow: '0 0 0 1px rgba(246,252,255,0.15)' }}
            >
              Como funciona
            </a>
          </div>
        </div>

        {/* Card 2 — Light */}
        <div
          className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 flex flex-col gap-6 bg-white ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            animationDelay: '0.2s',
          }}
        >
          <div className="pt-4">
            <p className="text-[11px] font-mono text-[#051A24]/40 uppercase tracking-widest mb-3">Flexível</p>
            <h3 className="text-[22px] font-medium text-[#0D212C] leading-snug">
              Projeto Personalizado
            </h3>
            <p className="text-sm text-[#051A24]/70 mt-2 leading-relaxed">
              Escopo fixo, prazo definido.<br />
              Mesma equipe, mesmos padrões.
            </p>
          </div>

          <div className="flex-1" />

          <div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium text-[#051A24] transition-all duration-200 hover:opacity-80 active:scale-[0.98] bg-white"
              style={{ boxShadow: shadowSecondary }}
            >
              Iniciar conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
