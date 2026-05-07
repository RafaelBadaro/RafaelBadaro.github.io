import React from 'react';
import { motion } from 'framer-motion';

// --- CONFIGURAÇÃO DE ANIMAÇÃO "JANELLE-STYLE" ---
// Usando física de mola (spring) para hover elástico e premium.
const springTransition = {
  type: "spring",
  stiffness: 300, // Quão rígida é a mola
  damping: 20,    // Resistência da mola
  mass: 1,         // Peso do objeto
};

// Configuração para animação de entrada (Fade In ao carregar a página)
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Staggered delay (atraso cascata)
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Cubic-bezier suave
    },
  }),
};

// Componente Bento Card reutilizável com Animação de Spring no Hover
const BentoCard = ({ children, className = "", i = 0 }) => (
  <motion.div
    // Animação de entrada
    custom={i}
    initial="hidden"
    animate="visible"
    variants={fadeInVariants}
    // Animação de Hover elástica
    whileHover={{
      y: -8, // Sobe um pouco
      scale: 1.01, // Aumenta sutilmente
      borderColor: "rgba(173, 198, 255, 0.4)", // Borda brilha mais (cor primary)
      boxShadow: "0px 10px 30px rgba(0,0,0,0.3)", // Sombra de elevação
    }}
    transition={springTransition}
    // Estilos padrão (Bento style da Janelle)
    className={`
      bg-surface-container-low 
      border border-outline-variant/30 
      rounded-[24px] 
      overflow-hidden
      p-6 md:p-8
      cursor-pointer
      ${className}
    `}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans selection:bg-primary/30 antialiased">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center h-16 px-6">
          <div className="font-bold tracking-tighter text-xl">Rafael Badaró.</div>
          <div className="hidden md:flex gap-8 text-[12px] uppercase tracking-widest font-semibold text-on-surface-variant">
            {['Projects', 'Skills', 'About'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors"
                // Animação sutil no texto do menu
                whileHover={{ y: -2, scale: 1.05 }}
                transition={springTransition}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.a
            href="mailto:youremail@email.com"
            className="bg-on-surface text-surface px-6 py-2 rounded-full text-xs font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={springTransition}
          >
            Hire Me
          </motion.a>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-[1200px] mx-auto space-y-4">

        {/* --- HERO SECTION --- */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <BentoCard className="md:col-span-8 flex flex-col justify-center min-h-[320px]" i={0}>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              iOS Engineer & Architect
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[0.9] mb-6">
              Crafting experiences with <span className="text-on-surface-variant relative">precision.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl">
              Focused on performance-driven architecture and fluid SwiftUI interfaces.
            </p>
          </BentoCard>

          {/* Card de Status Interativo */}
          <BentoCard className="md:col-span-4 bg-primary flex flex-col justify-between group" i={1}>
            <motion.div
              className="text-surface text-5xl font-light"
              whileHover={{ x: 10 }} // Seta move para a direita no hover
              transition={springTransition}
            >
              →
            </motion.div>
            <div>
              <p className="text-surface font-bold text-2xl leading-tight mb-2">Available for new projects</p>
              <p className="text-surface/70 text-sm italic">Q2 — 2024</p>
            </div>
          </BentoCard>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Featured Project (Large Block) */}
          <BentoCard className="md:col-span-7 row-span-2 group relative !p-0" i={2}>
            {/* Imagem com efeito de Zoom suave no hover */}
            <motion.img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200"
              alt="FinTech"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              whileHover={{ scale: 1.05, opacity: 0.6 }} // Zoom + Brilho
              transition={{ duration: 0.8, ease: "easeOut" }} // Transição mais lenta para imagem
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10" />
            
            <div className="absolute bottom-0 p-8 z-20 space-y-4">
              <div className="flex gap-2">
                {['SwiftUI', 'Combine'].map((tech) => (
                  <span key={tech} className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold border border-white/10 text-on-surface">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold mb-2">FinTech Vision</h3>
              <p className="text-on-surface-variant text-sm max-w-sm">High-performance financial dashboard utilizing complex rendering.</p>
            </div>
          </BentoCard>

          {/* Secondary Project (Medium) */}
          <BentoCard className="md:col-span-5 flex flex-col justify-between" i={3}>
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-surface-container-highest rounded-2xl flex items-center justify-center text-2xl border border-outline-variant/30">
                🤖
              </div>
              {/* Ponto pulsante de "Live App" */}
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary animate-ping opacity-60" />
              </div>
            </div>
            <div className="space-y-2 mt-8">
              <h3 className="text-2xl font-bold">AR Assistant</h3>
              <p className="text-on-surface-variant text-sm">Spatial computing interface built with ARKit and RealityKit.</p>
            </div>
          </BentoCard>

          {/* Pequenos Stats Cards */}
          <BentoCard className="md:col-span-2 flex flex-col items-center justify-center text-center space-y-2" i={4}>
            <motion.div
              className="text-primary text-5xl font-extrabold"
              whileHover={{ scale: 1.2, rotate: 5 }} // Efeito elástico no hover do número
              transition={springTransition}
            >
              15+
            </motion.div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
              Open Source
            </span>
          </BentoCard>

          <BentoCard className="md:col-span-3 flex items-center gap-4 group" i={5}>
            <div className="text-3xl transition-transform group-hover:scale-125 group-hover:rotate-[-10deg]">📱</div>
            <div>
              <p className="font-bold text-sm">App Store</p>
              <p className="text-xs text-on-surface-variant">8 Published Apps</p>
            </div>
          </BentoCard>
        </section>

        {/* --- SKILLS & ABOUT --- */}
        <section id="skills" className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <BentoCard className="md:col-span-4 space-y-6" i={6}>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">
              Core Stack
            </h4>
            <div className="space-y-4">
              {['Swift / SwiftUI', 'Metal / CoreML', 'Combine / Async'].map((skill) => (
                <div key={skill} className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                  <span className="text-sm font-medium">{skill}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary" />
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard id="about" className="md:col-span-8 flex flex-col justify-between bg-surface-container group" i={7}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl">
              I believe code should feel as intuitive as the hardware it runs on.
            </h2>
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.div
                className="bg-surface p-4 px-6 rounded-2xl border border-outline-variant/20 flex gap-4 items-center"
                whileHover={{ scale: 1.05 }}
                transition={springTransition}
              >
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-[10px] uppercase text-on-surface-variant tracking-widest">Years<br/>Exp.</p>
              </motion.div>
            </div>
          </BentoCard>
        </section>

      </main>

      <footer className="py-10 px-6 border-t border-outline-variant/10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center opacity-50 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© 2024 Master Architect</p>
          <p>Built with precision in Belo Horizonte</p>
        </div>
      </footer>
    </div>
  );
}

export default App;