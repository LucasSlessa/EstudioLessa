import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const shadowPrimary =
  '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)';

const WA_URL = 'https://wa.me/5512996181553';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="w-full max-w-[1200px] mx-auto px-6 py-6 md:py-8 border-b border-[#051A24]/5 flex items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="font-serif-accent text-2xl font-semibold text-[#051A24] tracking-tight hover:opacity-85 transition-opacity"
        style={{ fontFamily: "'PP Mondwest', serif" }}
      >
        Lucas Lessa
      </Link>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          to="/servicos"
          className="text-sm font-medium text-[#051A24] hover:opacity-70 transition-opacity"
        >
          Serviços
        </Link>
        <a
          href="/"
          onClick={handlePortfolioClick}
          className="text-sm font-medium text-[#051A24] hover:opacity-70 transition-opacity"
        >
          Portfólio
        </a>
        <Link
          to="/sobre"
          className="text-sm font-medium text-[#051A24] hover:opacity-70 transition-opacity"
        >
          Sobre
        </Link>
      </nav>

      {/* CTA Button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-medium bg-[#051A24] text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
        style={{ boxShadow: shadowPrimary }}
      >
        Iniciar conversa
      </a>
    </header>
  );
};
