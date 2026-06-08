import React, { useEffect, useRef, useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface Project {
  name: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    name: 'evr',
    description: 'Da ideia a milhões captados para um produto de IA web3',
    image: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    name: 'Automation Machines',
    description: 'Otimizando processos de automação industrial',
    image: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
  },
  {
    name: 'xPortfolio',
    description: 'Plataforma moderna de gestão de portfólios',
    image: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  },
];

const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-6 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="ml-20 md:ml-28">
        <h3 className="font-serif-accent text-2xl md:text-3xl font-semibold text-[#051A24] mb-2">
          {project.name}
        </h3>
        <p className="text-sm md:text-base text-[#051A24]/70">{project.description}</p>
      </div>
      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-2xl shadow-lg object-cover"
        style={{ maxHeight: 520 }}
      />
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="max-w-[1200px] mx-auto px-6 py-12"
      id="work"
    >
      <div
        className={`mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight ml-20 md:ml-28">
          Trabalhos selecionados
        </h2>
      </div>

      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((project, i) => (
          <ProjectItem key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};
