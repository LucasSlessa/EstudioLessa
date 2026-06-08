import './index.css';
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useInViewAnimation } from './hooks/useInViewAnimation';
import { TestimonialSection } from './components/TestimonialSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { ProjectsSection } from './components/ProjectsSection';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';
import { CopyrightBar } from './components/CopyrightBar';
import { BottomNav } from './components/BottomNav';

// Pages
import { ServicosPage } from './pages/ServicosPage';
import { SobrePage } from './pages/SobrePage';

/* ─── Constantes ─────────────────────────────────────────── */

const WA_URL = 'https://wa.me/5512996181553';

const shadowPrimary =
  '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)';
const shadowSecondary = '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)';

/* ─── Marquee Images ─────────────────────────────────────── */

const MARQUEE_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
];

const allMarqueeImages = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

/* ─── Hero Section ───────────────────────────────────────── */

function HeroSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="flex flex-col items-center text-center pt-12 md:pt-16 px-6"
    >
      <div className="max-w-[440px] w-full flex flex-col items-center">
        {/* Logo */}
        <div
          className={inView ? 'animate-fade-in-up' : 'opacity-0'}
          style={{ animationDelay: '0.1s' }}
        >
          <h1
            className="font-serif-accent text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight mb-4 leading-none"
          >
            Lucas Lessa
          </h1>
        </div>

        {/* Tagline */}
        <div
          className={inView ? 'animate-fade-in-up' : 'opacity-0'}
          style={{ animationDelay: '0.2s' }}
        >
          <p className="font-mono text-xs md:text-sm text-[#051A24] mb-2">
            O estúdio criativo de Lucas Lessa
          </p>
        </div>

        {/* Main heading */}
        <div
          className={inView ? 'animate-fade-in-up' : 'opacity-0'}
          style={{ animationDelay: '0.3s' }}
        >
          <p
            className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight whitespace-nowrap"
          >
            Construa a{' '}
            <span className="font-serif-accent">próxima onda</span>,
            <br />
            do <span className="font-serif-accent">jeito ousado.</span>
          </p>
        </div>

        {/* Description paragraphs */}
        <div
          className={`flex flex-col gap-6 mt-5 md:mt-6 text-left ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <p className="text-sm md:text-base text-[#051A24] leading-relaxed">
            Sou engenheiro de computação com anos de experiência criando produtos digitais
            de alto impacto. Fundei este estúdio para trazer esse mesmo nível de excelência
            aos inovadores que estão moldando o que vem a seguir.
          </p>
          <p className="text-sm md:text-base text-[#051A24] leading-relaxed">
            O estúdio é intencionalmente pequeno. Eu lidero a visão criativa em cada projeto,
            apoiado por uma equipe experiente que se move rápido sem cortar atalhos.
          </p>
          <p className="text-sm md:text-base text-[#051A24] leading-relaxed">
            Projetos a partir de R$&nbsp;5.000 por mês.
          </p>
        </div>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 w-full justify-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium bg-[#051A24] text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{ boxShadow: shadowPrimary }}
          >
            Iniciar conversa
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium bg-white text-[#051A24] transition-all duration-200 hover:opacity-80 active:scale-[0.98]"
            style={{ boxShadow: shadowSecondary }}
          >
            Ver projetos
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Marquee Strip ──────────────────────────────────────── */

function MarqueeStrip() {
  return (
    <div className="mt-16 md:mt-20 mb-16 overflow-hidden w-full">
      <div className="flex animate-marquee" style={{ width: 'max-content' }}>
        {allMarqueeImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Prévia do projeto ${(i % MARQUEE_IMAGES.length) + 1}`}
            className="h-[280px] md:h-[500px] object-cover mx-3 rounded-2xl shadow-lg shrink-0"
            style={{ width: 'auto' }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── HomePage Component ────────────────────────────────── */

function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <TestimonialSection />
      <PricingSection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
    </>
  );
}

/* ─── Scroll To Top Helper ──────────────────────────────── */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* ─── App ────────────────────────────────────────────────── */

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/sobre" element={<SobrePage />} />
          </Routes>
        </div>
        <Footer />
        <CopyrightBar />
        <BottomNav />
      </div>
    </HashRouter>
  );
}
