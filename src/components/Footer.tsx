import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const shadowPrimary =
  '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)';

const WA_URL = 'https://wa.me/5512996181553';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="w-full py-12 px-6 max-w-[1200px] mx-auto border-t border-[#051A24]/5">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium bg-[#051A24] text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{ boxShadow: shadowPrimary }}
        >
          Iniciar conversa
        </a>

        {/* Links */}
        <div className="flex items-start gap-8">
          <ArrowUpRight className="w-5 h-5 text-[#051A24] mt-0.5 shrink-0" />

          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <Link to="/servicos" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">
              Serviços
            </Link>
            <a
              href="/"
              onClick={handlePortfolioClick}
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              Portfólio
            </a>
            <Link to="/sobre" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">
              Sobre
            </Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <a
              href="https://lucasslessa.github.io/links_lucaslessa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              Links
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-lessa-engcomp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
