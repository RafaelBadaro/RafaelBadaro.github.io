import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURAÇÃO DE ANIMAÇÃO ---
const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
  mass: 1,
};

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

// --- DICIONÁRIO DE TRADUÇÃO ---
const translations = {
  en: {
    nav: ['Projects', 'Skills', 'About'],
    hire: 'Hire Me',
    heroRole: 'iOS Engineer & Architect',
    heroTitle: 'Crafting experiences with ',
    heroPrecision: 'precision.',
    heroDesc: 'Focused on performance-driven architecture and fluid SwiftUI interfaces.',
    status: 'Available for new projects',
    project1Title: 'FinTech Vision',
    project1Desc: 'High-performance financial dashboard utilizing complex rendering.',
    project2Title: 'AR Assistant',
    project2Desc: 'Spatial computing interface built with ARKit and RealityKit.',
    stats: 'Open Source',
    appStore: 'App Store',
    appsPublished: '8 Published Apps',
    stackTitle: 'Core Stack',
    aboutText: 'I believe code should feel as intuitive as the hardware it runs on.',
    exp: 'Years Exp.',
    footer: 'Built with precision in Belo Horizonte'
  },
  pt: {
    nav: ['Projetos', 'Skills', 'Sobre'],
    hire: 'Contrate-me',
    heroRole: 'Engenheiro iOS & Arquiteto',
    heroTitle: 'Criando experiências com ',
    heroPrecision: 'precisão.',
    heroDesc: 'Focado em arquitetura de performance e interfaces fluidas em SwiftUI.',
    status: 'Disponível para novos projetos',
    project1Title: 'FinTech Vision',
    project1Desc: 'Dashboard financeiro de alta performance com renderização complexa.',
    project2Title: 'AR Assistant',
    project2Desc: 'Interface de computação espacial criada com ARKit e RealityKit.',
    stats: 'Open Source',
    appStore: 'App Store',
    appsPublished: '8 Apps Publicados',
    stackTitle: 'Stack Principal',
    aboutText: 'Acredito que o código deve ser tão intuitivo quanto o hardware onde roda.',
    exp: 'Anos Exp.',
    footer: 'Criado com precisão em Belo Horizonte'
  }
};

const BentoCard = ({ children, className = "", i = 0 }) => (
  <motion.div
    custom={i}
    initial="hidden"
    animate="visible"
    variants={fadeInVariants}
    whileHover={{
      y: -8,
      scale: 1.01,
      borderColor: "rgba(173, 198, 255, 0.4)",
      boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
    }}
    transition={springTransition}
    className={`bg-surface-container-low border border-outline-variant/30 rounded-[24px] overflow-hidden p-6 md:p-8 cursor-pointer ${className}`}
  >
    {children}
  </motion.div>
);

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans selection:bg-primary/30 antialiased">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center h-16 px-6">
          <div className="font-bold tracking-tighter text-xl">Rafael Badaró.</div>
          
          <div className="hidden md:flex gap-8 text-[12px] uppercase tracking-widest font-semibold text-on-surface-variant">
            {t.nav.map((item, i) => (
              <motion.a
                key={item}
                href={`#${translations.en.nav[i].toLowerCase()}`}
                className="hover:text-primary transition-colors"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={springTransition}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Seletor de Idioma */}
            <div className="flex bg-surface-container-high rounded-full p-1 border border-outline-variant/20">
              {['en', 'pt'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${lang === l ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  {l}
                </button>
              ))}
            </div>

            <motion.a
              href="mailto:youremail@email.com"
              className="bg-on-surface text-surface px-6 py-2 rounded-full text-xs font-bold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={springTransition}
            >
              {t.hire}
            </motion.a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-[1200px] mx-auto space-y-4">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <BentoCard className="md:col-span-8 flex flex-col justify-center min-h-[320px]" i={0}>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">{t.heroRole}</span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[0.9] mb-6">
              {t.heroTitle}<span className="text-on-surface-variant relative">{t.heroPrecision}</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl">{t.heroDesc}</p>
          </BentoCard>

          <BentoCard className="md:col-span-4 bg-primary flex flex-col justify-between group" i={1}>
            <motion.div className="text-surface text-5xl font-light" whileHover={{ x: 10 }} transition={springTransition}>→</motion.div>
            <div>
              <p className="text-surface font-bold text-2xl leading-tight mb-2">{t.status}</p>
              <p className="text-surface/70 text-sm italic">Q2 — 2024</p>
            </div>
          </BentoCard>
        </section>

        <section id="projects" className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <BentoCard className="md:col-span-7 row-span-2 group relative !p-0" i={2}>
            <motion.img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200"
              alt="FinTech"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              whileHover={{ scale: 1.05, opacity: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10" />
            <div className="absolute bottom-0 p-8 z-20 space-y-4">
              <div className="flex gap-2">
                {['SwiftUI', 'Combine'].map((tech) => (
                  <span key={tech} className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold border border-white/10 text-on-surface">{tech}</span>
                ))}
              </div>
              <h3 className="text-3xl font-bold mb-2">{t.project1Title}</h3>
              <p className="text-on-surface-variant text-sm max-w-sm">{t.project1Desc}</p>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-5 flex flex-col justify-between" i={3}>
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-surface-container-highest rounded-2xl flex items-center justify-center text-2xl border border-outline-variant/30">🤖</div>
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary animate-ping opacity-60" />
              </div>
            </div>
            <div className="space-y-2 mt-8">
              <h3 className="text-2xl font-bold">{t.project2Title}</h3>
              <p className="text-on-surface-variant text-sm">{t.project2Desc}</p>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-2 flex flex-col items-center justify-center text-center space-y-2" i={4}>
            <motion.div className="text-primary text-5xl font-extrabold" whileHover={{ scale: 1.2, rotate: 5 }} transition={springTransition}>15+</motion.div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">{t.stats}</span>
          </BentoCard>

          <BentoCard className="md:col-span-3 flex items-center gap-4 group" i={5}>
            <div className="text-3xl transition-transform group-hover:scale-125 group-hover:rotate-[-10deg]">📱</div>
            <div>
              <p className="font-bold text-sm">{t.appStore}</p>
              <p className="text-xs text-on-surface-variant">{t.appsPublished}</p>
            </div>
          </BentoCard>
        </section>

        <section id="skills" className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <BentoCard className="md:col-span-4 space-y-6" i={6}>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">{t.stackTitle}</h4>
            <div className="space-y-4">
              {['Swift / SwiftUI', 'Metal / CoreML', 'Combine / Async'].map((skill) => (
                <div key={skill} className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                  <span className="text-sm font-medium">{skill}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard id="about" className="md:col-span-8 flex flex-col justify-between bg-surface-container group" i={7}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl">{t.aboutText}</h2>
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.div className="bg-surface p-4 px-6 rounded-2xl border border-outline-variant/20 flex gap-4 items-center" whileHover={{ scale: 1.05 }} transition={springTransition}>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-[10px] uppercase text-on-surface-variant tracking-widest leading-tight">{t.exp.split(' ').join('\n')}</p>
              </motion.div>
            </div>
          </BentoCard>
        </section>
      </main>

      <footer className="py-10 px-6 border-t border-outline-variant/10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center opacity-50 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© 2024 Master Architect</p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;