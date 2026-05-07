import React, { useState } from 'react';

// Reusable Bento Card Component
const BentoCard = ({ children, className = "", noPadding = false }) => (
  <div className={`
    bg-surface-container-low 
    border border-outline-variant/30 
    rounded-[24px] 
    transition-all duration-300 
    hover:border-primary/40 
    overflow-hidden
    ${noPadding ? '' : 'p-6 md:p-8'}
    ${className}
  `}>
    {children}
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans selection:bg-primary/30">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center h-16 px-6">
          <div className="font-bold tracking-tighter text-xl">Rafael Badaró.</div>
          <div className="hidden md:flex gap-8 text-[12px] uppercase tracking-widest font-semibold text-on-surface-variant">
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Stack</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
          </div>
          <a href="mailto:youremail@email.com" className="bg-on-surface text-surface px-6 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform">
            Hire Me
          </a>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-[1200px] mx-auto space-y-4">

        {/* HERO SECTION - BENTO GRID */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <BentoCard className="md:col-span-8 flex flex-col justify-center min-h-[320px]">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">iOS Engineer & Architect</span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[0.9] mb-6">
              Crafting experiences with <span className="text-on-surface-variant">precision.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl">
              Focused on performance-driven architecture and fluid SwiftUI interfaces.
            </p>
          </BentoCard>

          <BentoCard className="md:col-span-4 bg-primary flex flex-col justify-between group">
            <div className="text-surface text-5xl font-light group-hover:translate-x-2 transition-transform">→</div>
            <div>
              <p className="text-surface font-bold text-2xl leading-tight mb-2">Available for new projects</p>
              <p className="text-surface/70 text-sm italic">Q2 — 2024</p>
            </div>
          </BentoCard>
        </section>

        {/* PROJECTS SECTION - BENTO GRID */}
        <section id="projects" className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Featured Project */}
          <BentoCard noPadding className="md:col-span-7 row-span-2 group">
            <div className="relative h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200" 
                alt="FinTech" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              <div className="absolute bottom-0 p-8">
                <div className="flex gap-2 mb-4">
                  <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold border border-white/10">SwiftUI</span>
                  <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold border border-white/10">Combine</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">FinTech Vision</h3>
                <p className="text-on-surface-variant text-sm max-w-sm">High-performance dashboard utilizing complex rendering.</p>
              </div>
            </div>
          </BentoCard>

          {/* Secondary Project */}
          <BentoCard className="md:col-span-5 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-surface-container-highest rounded-2xl flex items-center justify-center text-2xl">🤖</div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">AR Assistant</h3>
              <p className="text-on-surface-variant mt-2 text-sm">Spatial computing interface built with ARKit and RealityKit.</p>
            </div>
          </BentoCard>

          {/* Small Stats / GitHub */}
          <BentoCard className="md:col-span-2 flex flex-col items-center justify-center text-center space-y-2">
            <div className="text-primary text-3xl font-bold">15+</div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Open Source</span>
          </BentoCard>

          <BentoCard className="md:col-span-3 flex items-center gap-4 hover:bg-surface-container-high cursor-pointer">
            <div className="text-3xl">📱</div>
            <div>
              <p className="font-bold text-sm">App Store</p>
              <p className="text-xs text-on-surface-variant">8 Published Apps</p>
            </div>
          </BentoCard>
        </section>

        {/* SKILLS & ABOUT - BENTO GRID */}
        <section id="skills" className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <BentoCard className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Core Stack</h4>
            <div className="space-y-4">
              {['Swift / SwiftUI', 'Metal / CoreML', 'Combine / Async'].map((skill) => (
                <div key={skill} className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                  <span className="text-sm font-medium">{skill}</span>
                  <span className="text-primary">●</span>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard id="about" className="md:col-span-8 flex flex-col justify-between bg-surface-container">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              I believe code should feel as intuitive as the hardware it runs on.
            </h2>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-surface p-4 rounded-2xl border border-outline-variant/20">
                <p className="text-2xl font-bold">5+</p>
                <p className="text-[10px] uppercase text-on-surface-variant">Years Exp.</p>
              </div>
              <div className="bg-surface p-4 rounded-2xl border border-outline-variant/20">
                <p className="text-2xl font-bold">MVVM</p>
                <p className="text-[10px] uppercase text-on-surface-variant">Preferred Pattern</p>
              </div>
            </div>
          </BentoCard>
        </section>

        {/* CONTACT - BENTO GRID */}
        <section id="contact" className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <BentoCard className="md:col-span-12 flex flex-col md:flex-row justify-between items-center py-12">
            <h2 className="text-3xl font-bold mb-6 md:mb-0">Let's build something exceptional.</h2>
            <div className="flex gap-4">
              <a href="mailto:hello@badaro.dev" className="bg-on-surface text-surface px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                Get in Touch
              </a>
              <div className="flex gap-2">
                {['LN', 'GH', 'TW'].map(social => (
                  <div key={social} className="w-12 h-12 border border-outline-variant/30 rounded-full flex items-center justify-center font-bold text-xs hover:bg-white/5 cursor-pointer transition-colors">
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>
        </section>

      </main>

      <footer className="py-10 px-6 border-t border-outline-variant/10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center opacity-50 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© 2024 Master Architect</p>
          <p>Built with SwiftUI principles on the web</p>
        </div>
      </footer>
    </div>
  );
}

export default App;