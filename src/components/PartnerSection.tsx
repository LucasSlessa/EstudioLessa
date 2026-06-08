import React, { useCallback, useRef } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const MARQUEE_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
];

const WA_URL = 'https://wa.me/5512996181553';

interface FloatingImg {
  id: number;
  x: number;
  y: number;
  src: string;
  rotation: number;
}

let spawnCounter = 0;
let lastSpawnTime = 0;

export const PartnerSection: React.FC = () => {
  const { ref, inView } = useInViewAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingImgsRef = useRef<FloatingImg[]>([]);
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  const imgIndexRef = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastSpawnTime < 80) return;
    lastSpawnTime = now;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const src = MARQUEE_IMAGES[imgIndexRef.current % MARQUEE_IMAGES.length];
    imgIndexRef.current++;

    const id = ++spawnCounter;
    const rotation = Math.random() * 20 - 10;
    floatingImgsRef.current = [...floatingImgsRef.current, { id, x, y, src, rotation }];
    forceUpdate();

    setTimeout(() => {
      floatingImgsRef.current = floatingImgsRef.current.filter(img => img.id !== id);
      forceUpdate();
    }, 1000);
  }, []);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full py-12 px-6"
      id="about"
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative max-w-7xl mx-auto py-48 rounded-[40px] flex flex-col items-center justify-center overflow-hidden cursor-crosshair"
        style={{ boxShadow: '0 2px 40px rgba(0,0,0,0.06)', background: 'white' }}
      >
        {/* Floating images on hover */}
        {floatingImgsRef.current.map(img => (
          <div
            key={img.id}
            className="absolute pointer-events-none"
            style={{
              left: img.x,
              top: img.y,
              transform: `translate(-50%, -50%) rotate(${img.rotation}deg) scale(1)`,
              animation: 'floatFadeOut 1000ms ease-out forwards',
              zIndex: 10,
            }}
          >
            <img
              src={img.src}
              alt=""
              className="w-32 h-24 object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}

        {/* Content */}
        <div
          className={`relative z-20 flex flex-col items-center gap-8 px-6 text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <h2 className="font-serif-accent text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] leading-none tracking-tight">
            Trabalhe com a gente
          </h2>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full pl-2 pr-7 py-2 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{
              background: '#051A24',
              boxShadow:
                '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)',
            }}
          >
            <img
              src="/lucas.png"
              alt="Lucas Lessa"
              className="w-10 h-10 rounded-full object-cover object-top shrink-0"
            />
            Conversar com Lucas
          </a>
        </div>
      </div>
    </section>
  );
};
