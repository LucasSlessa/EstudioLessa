import React from 'react';
import { Header } from '../components/Header';
import { Laptop, Layers, Megaphone, Cpu, Wrench, ArrowRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const WA_URL = 'https://wa.me/5512996181553';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  details: string[];
}

const servicesList: ServiceItem[] = [
  {
    number: '01',
    title: 'Criação de Sites',
    description: 'Desenvolvimento de landing pages de alta conversão, portfólios interativos e plataformas web rápidas.',
    icon: Laptop,
    details: [
      'Design exclusivo e focado em conversão',
      'Código limpo, otimizado para SEO e performance',
      'Totalmente responsivo para qualquer dispositivo',
      'Integrações com ferramentas de marketing e analytics'
    ]
  },
  {
    number: '02',
    title: 'Gerenciamento de Projetos para Empresas',
    description: 'Organização técnica, definição de escopo claro e fluxos ágeis para garantir que os projetos sejam entregues no prazo.',
    icon: Layers,
    details: [
      'Estruturação de cronogramas e entregáveis',
      'Alinhamento entre equipes técnicas e de negócios',
      'Gestão de riscos e mitigação de gargalos',
      'Metodologias ágeis adaptadas ao contexto da empresa'
    ]
  },
  {
    number: '03',
    title: 'Melhorador de Anúncios',
    description: 'Otimização técnica de campanhas, estruturação precisa de tags de conversão, pixel de rastreamento e melhorias na experiência de página para maximizar o retorno das suas campanhas.',
    icon: Megaphone,
    details: [
      'Configuração correta de APIs de conversão (Facebook, Google)',
      'Otimização do tempo de carregamento da landing page',
      'Melhoria do Score de Qualidade do anúncio no Google Ads',
      'Análise de comportamento do usuário e testes A/B'
    ]
  },
  {
    number: '04',
    title: 'Serviços de Tecnologia para Empresas',
    description: 'Consultoria e desenvolvimento de soluções digitais sob medida, automações e integrações robustas para otimizar suas operações.',
    icon: Cpu,
    details: [
      'Integração de APIs e sistemas (CRM, ERP, Gateways)',
      'Automação de processos repetitivos',
      'Desenvolvimento de ferramentas internas customizadas',
      'Modelagem de banco de dados e arquitetura de nuvem'
    ]
  },
  {
    number: '05',
    title: 'Resolução de Problemas (Troubleshooting)',
    description: 'Diagnóstico rápido e resolução de erros complexos, lentidão em sistemas, gargalos de infraestrutura e refatoração de código legado.',
    icon: Wrench,
    details: [
      'Identificação rápida de erros críticos de código',
      'Otimização de consultas lentas a bancos de dados',
      'Correção de problemas de compatibilidade e segurança',
      'Refatoração técnica com documentação clara'
    ]
  }
];

export const ServicosPage: React.FC = () => {
  const { ref, inView } = useInViewAnimation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 py-12 md:py-20">
        {/* Intro */}
        <section ref={ref as React.RefObject<HTMLElement>} className="max-w-[800px] mb-16 md:mb-24">
          <div className={inView ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.1s' }}>
            <span className="font-mono text-xs text-[#051A24]/60 uppercase tracking-widest block mb-4">
              O que fazemos
            </span>
            <h1 className="font-serif-accent text-4xl md:text-5xl lg:text-6xl font-semibold text-[#051A24] tracking-tight mb-6">
              Serviços de Engenharia e Tecnologia
            </h1>
            <p className="text-lg md:text-xl text-[#051A24]/80 leading-relaxed font-light">
              Soluções técnicas de ponta a ponta projetadas para otimizar processos, acelerar resultados e colocar sua marca em destaque no mercado digital.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="flex flex-col gap-12 md:gap-16">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.number}
                className="group border-b border-[#051A24]/10 pb-12 md:pb-16 flex flex-col md:flex-row gap-8 md:gap-16 items-start"
              >
                {/* Number & Icon */}
                <div className="flex items-center gap-4 shrink-0 md:w-32">
                  <span className="font-mono text-xs font-semibold text-[#051A24]/40">
                    {service.number}
                  </span>
                  <div className="p-3 bg-[#051A24]/5 rounded-xl group-hover:bg-[#051A24] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-[#051A24] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h2 className="font-serif-accent text-2xl md:text-3xl font-semibold text-[#051A24] mb-4 group-hover:text-[#051A24]/80 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-[#051A24]/75 text-base md:text-lg leading-relaxed mb-6 max-w-[750px]">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[700px] mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#051A24]/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#051A24]/30 mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Link */}
                <div className="shrink-0 md:self-center">
                  <a
                    href={`${WA_URL}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#051A24] border-b border-[#051A24] pb-1 hover:opacity-75 transition-opacity"
                  >
                    Falar sobre isso <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};
