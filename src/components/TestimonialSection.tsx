import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const PARALLAX_MAX = 200;

export const TestimonialSection: React.FC = () => {
  const { ref: sectionRef, inView } = useInViewAnimation();
  const imgRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const el = imgRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight;
        const center = rect.top + rect.height / 2;
        const dist = (center - viewH / 2) / viewH;
        setParallaxY(Math.max(-PARALLAX_MAX, Math.min(PARALLAX_MAX, dist * PARALLAX_MAX * 1.5)));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-12 px-6 flex flex-col items-center"
    >
      <div className="max-w-2xl w-full mx-auto">
        {/* Quote icon */}
        <div
          className={inView ? 'animate-fade-in-up' : 'opacity-0'}
          style={{ animationDelay: '0.1s' }}
        >
          <Quote className="w-6 h-6 text-slate-900 mb-6" />
        </div>

        {/* Large quote */}
        <div
          className={inView ? 'animate-fade-in-up' : 'opacity-0'}
          style={{ animationDelay: '0.2s' }}
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight mb-4"
          >
            Deixei a área corporativa para construir o estúdio que eu sempre quis trabalhar
          </h2>
        </div>

        {/* Author */}
        <div
          className={inView ? 'animate-fade-in-up' : 'opacity-0'}
          style={{ animationDelay: '0.3s' }}
        >
          <p className="text-sm text-[#273C46] italic mb-8">Lucas Lessa</p>
        </div>

        {/* Company logos as text */}
        <div
          className={`flex items-center gap-8 mb-10 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <span style={{ width: 110, fontSize: 20 }} className="font-medium text-slate-900 leading-none">Engenharia</span>
          <span style={{ width: 83, fontSize: 20 }} className="font-medium text-slate-900 leading-none">Design</span>
          <span style={{ width: 110, fontSize: 20 }} className="font-medium text-slate-900 leading-none">Inovação</span>
        </div>

        {/* Parallax image — Lucas's own photo */}
        <div
          ref={imgRef}
          className={inView ? 'animate-fade-in-up' : 'opacity-0'}
          style={{ animationDelay: '0.5s' }}
        >
          <div style={{ transform: `translateY(${parallaxY}px)`, transition: 'transform 0.1s linear', willChange: 'transform' }}>
            <img
              src="/lucas.png"
              alt="Lucas Lessa"
              className="w-full max-w-xs rounded-2xl shadow-lg object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
