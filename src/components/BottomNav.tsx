import React from 'react';
import { Link } from 'react-router-dom';

const shadowPrimary =
  '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)';
const shadowNav =
  '0 2px 8px 0 rgba(5,26,36,0.08), 0 12px 40px 0 rgba(5,26,36,0.12), 0 0 0 0.5px rgba(5,26,36,0.08)';

const WA_URL = 'https://wa.me/5512996181553';

export const BottomNav: React.FC = () => {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white rounded-full px-8 py-2"
      style={{ boxShadow: shadowNav }}
    >
      <Link
        to="/"
        className="font-serif-accent text-2xl font-semibold text-[#051A24] leading-none hover:opacity-75 transition-opacity"
        style={{ fontFamily: "'PP Mondwest', serif" }}
      >
        L
      </Link>

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium bg-[#051A24] text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
        style={{ boxShadow: shadowPrimary }}
      >
        Iniciar conversa
      </a>
    </div>
  );
};
