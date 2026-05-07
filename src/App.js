import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const cardTransition = { duration: 0.35, ease: [0.22, 1, 0.36, 1] };

const companies = [
  {
    name: 'Nubank',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400',
  },
  {
    name: 'Stone',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400',
  },
  {
    name: 'Mercado Livre',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1400',
  },
];

// --- DICIONÁRIO DE TRADUÇÃO ---
const translations = {
  en: {
    nav: ['Projects', 'Skills'],
    heroRole: 'iOS Engineer & Architect',
    heroTitle: 'Crafting experiences with ',
    heroPrecision: 'precision.',
    heroDesc: 'Focused on performance-driven architecture and fluid SwiftUI interfaces.',
    aboutMeTitle: 'About me',
    aboutMeBody: 'I design and build digital products with a strong focus on performance, clean architecture, and polished user experiences across Apple platforms.',
    flipHint: 'Click to flip',
    status: 'Available for new projects',
    project1Title: 'FinTech Vision',
    project1Desc: 'High-performance financial dashboard utilizing complex rendering.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    gmail: 'Gmail',
    socialHint: 'Open profile',
    appStore: 'App Store',
    appsPublished: '1 Published App',
    appCardHint: 'Open project',
    stackTitle: 'Core Stack',
    aboutTitle: 'About',
    aboutText: 'iOS engineer based in Brazil, focused on clean architecture, performance and simple product experiences.',
    aboutNow: 'Currently building apps with SwiftUI, UIKit and AI integrations.',
    footer: 'Built with precision in Belo Horizonte'
  },
  pt: {
    nav: ['Projetos', 'Skills'],
    heroRole: 'Engenheiro iOS & Arquiteto',
    heroTitle: 'Criando experiências com ',
    heroPrecision: 'precisão.',
    heroDesc: 'Focado em arquitetura de performance e interfaces fluidas em SwiftUI.',
    aboutMeTitle: 'Sobre mim',
    aboutMeBody: 'Eu desenho e desenvolvo produtos digitais com foco em performance, arquitetura limpa e experiências refinadas para plataformas Apple.',
    flipHint: 'Clique para virar',
    status: 'Disponível para novos projetos',
    project1Title: 'FinTech Vision',
    project1Desc: 'Dashboard financeiro de alta performance com renderização complexa.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    gmail: 'Gmail',
    socialHint: 'Abrir perfil',
    appStore: 'App Store',
    appsPublished: '1 App Publicado',
    appCardHint: 'Abrir projeto',
    stackTitle: 'Stack Principal',
    aboutTitle: 'Sobre',
    aboutText: 'Engenheiro iOS baseado no Brasil, com foco em arquitetura limpa, performance e experiências simples de produto.',
    aboutNow: 'Atualmente criando apps com SwiftUI, UIKit e integrações com IA.',
    footer: 'Criado com precisão em Belo Horizonte'
  }
};

const BentoCard = ({ children, className = "", i = 0 }) => (
  <motion.div
    custom={i}
    initial="hidden"
    animate="visible"
    variants={fadeInVariants}
    whileHover={{ y: -4, borderColor: "rgba(173, 198, 255, 0.35)" }}
    transition={cardTransition}
    className={`bg-surface-container-low border border-outline-variant/25 rounded-[28px] overflow-hidden p-6 md:p-8 ${className}`}
  >
    {children}
  </motion.div>
);

function App() {
  // --- ESTADO ---
  const [lang, setLang] = useState('en');
  const [isHeroFlipped, setIsHeroFlipped] = useState(false);
  const [companyIndex, setCompanyIndex] = useState(0);
  const t = translations[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCompanyIndex((prev) => (prev + 1) % companies.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans selection:bg-primary/30 antialiased">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-surface/75 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="max-w-[1120px] mx-auto flex justify-between items-center h-16 px-6">
          <a href="#top" className="font-semibold tracking-tight text-lg md:text-xl">Rafael Badaró.</a>

          <div className="flex items-center gap-3">
            {/* --- SELETOR DE IDIOMA --- */}
            <div className="flex bg-surface-container-high rounded-full p-1 border border-outline-variant/20">
              {['en', 'pt'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all ${lang === l ? 'bg-on-surface text-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* --- BOTAO CV --- */}
            <a
              href="/cv.pdf"
              download
              className="px-4 py-2 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] border border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:border-primary/40 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* --- CONTEUDO PRINCIPAL --- */}
      <main id="top" className="pt-28 pb-24 px-6 max-w-[1120px] mx-auto space-y-5">
        {/* --- HERO + SOCIAL --- */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* --- CARD HERO (FLIP) --- */}
          <BentoCard className="md:col-span-7 !p-0 min-h-[360px] md:min-h-[420px]" i={0}>
            <button
              type="button"
              onClick={() => setIsHeroFlipped((prev) => !prev)}
              className="relative w-full h-full min-h-[360px] md:min-h-[420px] text-left [perspective:1200px]"
            >
              <motion.div
                animate={{ rotateY: isHeroFlipped ? 180 : 0 }}
                transition={cardTransition}
                className="relative w-full h-full [transform-style:preserve-3d]"
              >
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center [backface-visibility:hidden]">
                  <span className="text-primary text-[11px] font-semibold uppercase tracking-[0.24em] mb-8">{t.heroRole}</span>
                  <h1 className="text-4xl md:text-[4.9rem] font-semibold tracking-tight leading-[0.92] mb-7">
                    {t.heroTitle}<span className="text-on-surface-variant relative">{t.heroPrecision}</span>
                  </h1>
                  <p className="text-on-surface-variant text-base md:text-lg max-w-xl">{t.heroDesc}</p>
                  <span className="mt-8 text-[10px] uppercase tracking-[0.22em] text-on-surface-variant">{t.flipHint}</span>
                </div>

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="text-primary text-[11px] font-semibold uppercase tracking-[0.24em] mb-8">{t.aboutMeTitle}</span>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-7">{t.aboutMeTitle}</h2>
                  <p className="text-on-surface-variant text-base md:text-lg max-w-2xl">{t.aboutMeBody}</p>
                </div>
              </motion.div>
            </button>
          </BentoCard>

          {/* --- SOCIAL CARDS --- */}
          <div className="md:col-span-5 grid grid-cols-1 gap-5">
            {/* --- CARD LINKEDIN --- */}
            <BentoCard className="relative min-h-[120px] group !p-0" i={1}>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="relative h-full w-full block p-6 md:p-7"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn background"
                  className="absolute right-5 top-1/2 -translate-y-1/2 w-24 h-24 object-contain opacity-20 group-hover:opacity-35 transition-opacity duration-300"
                />
                <div className="relative z-10">
                  <p className="text-2xl font-semibold">{t.linkedin}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mt-2">{t.socialHint}</p>
                </div>
              </a>
            </BentoCard>

            {/* --- CARD GITHUB --- */}
            <BentoCard className="relative min-h-[120px] group !p-0" i={2}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="relative h-full w-full block p-6 md:p-7"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub background"
                  className="absolute right-5 top-1/2 -translate-y-1/2 w-24 h-24 object-contain opacity-15 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className="relative z-10">
                  <p className="text-2xl font-semibold">{t.github}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mt-2">{t.socialHint}</p>
                </div>
              </a>
            </BentoCard>

            {/* --- CARD GMAIL --- */}
            <BentoCard className="relative min-h-[120px] group !p-0" i={3}>
              <a
                href="mailto:youremail@email.com"
                className="relative h-full w-full block p-6 md:p-7"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                  alt="Gmail background"
                  className="absolute right-5 top-1/2 -translate-y-1/2 w-24 h-24 object-contain opacity-15 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className="relative z-10">
                  <p className="text-2xl font-semibold">{t.gmail}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mt-2">{t.socialHint}</p>
                </div>
              </a>
            </BentoCard>
          </div>

        </section>

        {/* --- PROJETOS + CORE STACK + APP STORE --- */}
        <section id="projects" className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <BentoCard className="md:col-span-7 md:row-span-2 group relative !p-0 min-h-[280px] md:min-h-[420px]" i={2}>
            <motion.img
              key={companies[companyIndex].image}
              src={companies[companyIndex].image}
              alt={companies[companyIndex].name}
              className="absolute inset-0 w-full h-full object-cover opacity-35"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 0.35 }}
              whileHover={{ scale: 1.04, opacity: 0.55 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-transparent z-10" />
            <div className="absolute bottom-0 p-6 md:p-8 z-20 space-y-4 w-full">
              <div className="flex gap-2">
                {['SwiftUI', 'Combine'].map((tech) => (
                  <span key={tech} className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold border border-white/10 text-on-surface">{tech}</span>
                ))}
              </div>
              <h3 className="text-3xl font-semibold mb-2">{t.project1Title}</h3>
              <p className="text-on-surface-variant text-sm md:text-base max-w-sm">{t.project1Desc}</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-on-surface-variant">
                {companies[companyIndex].name}
              </p>

              <div className="overflow-x-auto pt-1 pb-1 pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex gap-2 min-w-max">
                  {companies.map((company, index) => (
                    <button
                      key={company.name}
                      type="button"
                      onClick={() => setCompanyIndex(index)}
                      className={`px-3 py-2 rounded-xl text-[11px] uppercase tracking-[0.16em] border transition-colors ${
                        companyIndex === index
                          ? 'bg-white/20 border-white/30 text-on-surface'
                          : 'bg-white/5 border-white/10 text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {company.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* --- CARD CORE STACK --- */}
          <BentoCard id="skills" className="md:col-span-5 space-y-6" i={4}>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-primary">{t.stackTitle}</h4>
            <div className="space-y-4">
              {['Swift / SwiftUI', 'Metal / CoreML', 'Combine / Async'].map((skill) => (
                <div key={skill} className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                  <span className="text-sm font-medium">{skill}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                </div>
              ))}
            </div>
          </BentoCard>

          {/* --- CARD APP STORE --- */}
          <BentoCard className="md:col-span-5 group !p-0 min-h-[170px]" i={5}>
            <a
              href="https://badaroapps.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="h-full w-full block p-6 md:p-7 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex h-full items-end justify-between gap-6">
                <div>
                  <p className="text-xl font-semibold uppercase tracking-[0.16em] text-primary mb-2">iOS</p>
                  <p className="font-semibold text-base">{t.appStore}</p>
                  <p className="text-sm text-on-surface-variant mt-1">{t.appsPublished}</p>
                </div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-on-surface-variant">{t.appCardHint}</p>
              </div>
            </a>
          </BentoCard>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-outline-variant/10 mt-2">
        <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-semibold">
          <p className="opacity-55">© 2024 Master Architect</p>
          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="opacity-55 hover:opacity-100 transition-opacity">
              GitHub
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="opacity-55 hover:opacity-100 transition-opacity">
              LinkedIn
            </a>
            <a
              href="/cv.pdf"
              download
              className="px-3 py-2 rounded-full border border-outline-variant/30 text-[10px] opacity-70 hover:opacity-100 hover:border-primary/40 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;