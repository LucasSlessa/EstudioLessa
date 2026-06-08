import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Com orientação mínima, a equipe entregou designs consistentemente certeiros. A intuição deles para o que funciona é impressionante — anteciparam necessidades que eu nem havia articulado.',
    name: 'Marcus Anderson',
    role: '→ CEO, Data.storage',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop',
  },
  {
    id: 2,
    quote: 'Lucas liderou a criação do nosso melhor deck de captação até hoje! O fluxo narrativo, a linguagem visual e o acabamento geral superaram todas as expectativas. Os investidores notaram imediatamente.',
    name: 'alexwu',
    role: '→ Fundador, Nexgate',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop',
  },
  {
    id: 3,
    quote: 'Trabalhar com Lucas transformou nossa visão de produto em algo do qual nos orgulhamos genuinamente. A atenção aos detalhes e o pensamento estratégico de design estão em outro nível.',
    name: 'James Mitchell',
    role: '→ VP de Produto, LaunchPad',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop',
  },
  {
    id: 4,
    quote: 'A qualidade do design superou nossas expectativas em cada etapa. Um parceiro verdadeiramente excepcional que traz tanto técnica quanto estratégia para a mesa.',
    name: 'Rachel Foster',
    role: '→ Co-fundadora, Nexus Labs',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop',
  },
  {
    id: 5,
    quote: 'Trabalho incrível do começo ao fim. A capacidade da equipe de traduzir conceitos técnicos complexos em interfaces belas e intuitivas é verdadeiramente de classe mundial.',
    name: 'David Zhang',
    role: '→ Head de Design, Paradigm Labs',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop',
  },
];

// Triple for infinite scroll
const tripled = [...testimonials, ...testimonials, ...testimonials];

export const TestimonialCarousel: React.FC = () => {
  const { ref, inView } = useInViewAnimation();
  const [current, setCurrent] = useState(testimonials.length);
  const [transitioning, setTransitioning] = useState(true);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPaused = useRef(false);

  const CARD_WIDTH = 427.5;
  const GAP = 24;

  const goTo = useCallback((idx: number) => {
    setTransitioning(true);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const start = () => {
      autoRef.current = setTimeout(() => {
        if (!isPaused.current) next();
        start();
      }, 3000);
    };
    start();
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, [next]);

  const handleTransitionEnd = () => {
    if (current >= tripled.length - testimonials.length) {
      setTransitioning(false);
      setCurrent(testimonials.length);
    } else if (current <= 0) {
      setTransitioning(false);
      setCurrent(tripled.length - testimonials.length - 1);
    }
  };

  const offset = -(current * (CARD_WIDTH + GAP));

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full py-20 overflow-hidden"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      {/* Header */}
      <div
        className={`px-6 max-w-4xl md:ml-auto mb-10 flex items-center justify-between ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight">
          O que os <span className="font-serif-accent">criadores</span> dizem
        </h2>
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-black text-black" />
            ))}
          </div>
          <span className="text-sm font-medium text-[#051A24] ml-1">Clutch 5/5</span>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative px-6">
        <div
          className="flex"
          style={{
            transform: `translateX(${offset}px)`,
            transition: transitioning ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            gap: GAP,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {tripled.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="shrink-0 bg-white rounded-[32px] md:rounded-[40px] px-6 md:pl-10 md:pr-24 py-8 flex flex-col gap-4"
              style={{
                width: CARD_WIDTH,
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                opacity: idx === current ? 1 : 0.7,
                transform: idx === current ? 'scale(1)' : 'scale(0.97)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              {/* Quote icon */}
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24V14.4C0 10.4 1.06667 7.06667 3.2 4.4C5.33333 1.6 8.26667 0 12 0L13.6 2.8C10.9333 3.46667 8.8 4.86667 7.2 7C5.73333 9 5 11.4 5 14.2H10.4V24H0ZM18.4 24V14.4C18.4 10.4 19.4667 7.06667 21.6 4.4C23.7333 1.6 26.6667 0 30.4 0L32 2.8C29.3333 3.46667 27.2 4.86667 25.6 7C24.1333 9 23.4 11.4 23.4 14.2H28.8V24H18.4Z" fill="#0D212C" fillOpacity="0.12"/>
              </svg>

              <p className="text-base text-[#0D212C] leading-relaxed flex-1">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 mt-2">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="font-semibold text-sm text-[#0D212C]">{t.name}</p>
                  <p className="text-sm text-[#273C46]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav buttons */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#051A24]/5 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-[#0D212C]" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#051A24]/5 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-[#0D212C]" />
          </button>
        </div>
      </div>
    </section>
  );
};
