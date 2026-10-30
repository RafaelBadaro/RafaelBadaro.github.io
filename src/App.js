import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
const greetings = ['Hello!', 'Olá!', 'こんにちは！', 'Hola!', 'Salut!'];

const experiences = [
  {
    title: {
      en: 'WeFit/Porto Seguro 🇧🇷',
      pt: 'WeFit/Porto Seguro 🇧🇷',
    },
    startDate: 'Jun 2025',
    endDate: 'Present',
    summary: {
      en: 'Building features for the Porto Seguro app used by millions of insurance customers, focused on product delivery, reliability, and UX quality.',
      pt: 'Desenvolvendo funcionalidades para o app Porto Seguro usado por milhoes de clientes de seguros, com foco em entrega, confiabilidade e qualidade de UX.',
    },
    tech: ['Swift', 'SwiftUI', 'UIKit'],
    // Porto Seguro — institutional blue
    gradient: [
      'radial-gradient(ellipse at 15% 85%, #0d3b6e 0%, transparent 55%)',
      'radial-gradient(ellipse at 80% 10%, #1a5fa8 0%, transparent 45%)',
      'radial-gradient(ellipse at 55% 55%, #071e38 0%, transparent 70%)',
      'linear-gradient(160deg, #05111f 0%, #0b2545 100%)',
    ].join(', '),
  },
  {
    title: {
      en: 'Leal Apps 🇧🇷',
      pt: 'Leal Apps 🇧🇷',
    },
    startDate: 'Oct 2024',
     endDate: 'May 2025',
    summary: {
      en: 'Delivered high-impact features for: GymWP & PossoComer, including a real-time shared grocery list, crash fixes that reached 99.9% crash-free sessions and fixed a iCloud + watchOS sync bug.',
      pt: 'Entreguei funcionalidades de alto impacto para: GymWP e PossoComer, incluindo lista compartilhada em tempo real, correcoes que levaram a 99.9% de sessoes sem crash e a correcao de um bug de sincronizacao entre iCloud + watchOS.',
    },
    tech: ['Swift', 'UIKit', 'Firebase'],
    // Leal Apps — warm amber, fitness & food energy
    gradient: [
      'radial-gradient(ellipse at 10% 90%, #6b2d0f 0%, transparent 50%)',
      'radial-gradient(ellipse at 75% 15%, #c45c1a 0%, transparent 45%)',
      'radial-gradient(ellipse at 50% 50%, #3d1608 0%, transparent 65%)',
      'linear-gradient(150deg, #1a0a03 0%, #3b1a08 100%)',
    ].join(', '),
  },
  {
    title: {
      en: 'WEX 🇧🇷🇺🇸',
      pt: 'WEX 🇧🇷🇺🇸',
    },
    startDate: 'Aug 2023',
    endDate: 'Oct 2024',
    summary: {
      en: 'Worked on legacy decoupling initiatives and internal tools that accelerated engineering workflows in a multicultural team.',
      pt: 'Atuei em iniciativas de desacoplamento de legado e em ferramentas internas que aceleraram o fluxo de engenharia em um time multicultural.',
    },
    tech: ['C#', '.NET', 'Microservices'],
    // WEX — deep green, fintech
    gradient: [
      'radial-gradient(ellipse at 20% 80%, #0a3d20 0%, transparent 55%)',
      'radial-gradient(ellipse at 70% 20%, #1a6b3a 0%, transparent 45%)',
      'radial-gradient(ellipse at 50% 50%, #051a0e 0%, transparent 60%)',
      'linear-gradient(155deg, #030f07 0%, #0c2e16 100%)',
    ].join(', '),
  },
  {
    title: {
      en: 'Symplicity 🇧🇷🇺🇸🇨🇦',
      pt: 'Symplicity 🇧🇷🇺🇸🇨🇦',
    },
    startDate: 'Sep 2022',
    endDate: 'Jun 2023',
    summary: {
en: 'Delivered features and tests for the https://outcomecampusconnect.ca/ platform, "Canada\'s best resource for university and college students to find a job"',
pt: 'Desenvolvi funcionalidades e testes para a plataforma https://outcomecampusconnect.ca/, "o melhor recurso do Canadá para estudantes universitários e de faculdades encontrarem emprego."',
    },
    tech: ['C#', '.NET', 'Testing'],
    // Symplicity — indigo/purple, education
    gradient: [
      'radial-gradient(ellipse at 25% 75%, #2d1060 0%, transparent 50%)',
      'radial-gradient(ellipse at 72% 18%, #5b2d9e 0%, transparent 45%)',
      'radial-gradient(ellipse at 48% 52%, #150830 0%, transparent 65%)',
      'linear-gradient(145deg, #0a0415 0%, #1e0d3d 100%)',
    ].join(', '),
  },
];

const translations = {
  en: {
    aboutMeBody: "I like to work on apps that can cause a meaningful impact in people's lives. I care about quality, performance, clean code and UX/UI.",
    linkedin: 'LinkedIn',
    github: 'GitHub',
    gmail: 'Gmail',
    downloadCv: 'CV',
    appStore: 'App Store',
    seeMyApps: 'Check out my apps!',
    tryToWrite: 'Medium',
    tryToEdit: 'YouTube',
    linksTitle: 'Links',
    experiencesTitle: 'Professional experiences',
  },
  pt: {
    aboutMeBody: 'Gosto de trabalhar em apps que possam causar um impacto positivo na vida das pessoas. Eu ligo para qualidade, performance, codigo limpo e UX/UI.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    gmail: 'Gmail',
    downloadCv: 'CV',
    appStore: 'App Store',
    seeMyApps: 'Veja meus apps!',
    tryToWrite: 'Medium',
    tryToEdit: 'YouTube',
    linksTitle: 'Links',
    experiencesTitle: 'Experiências profissionais',
  },
};

const BentoCard = ({ children, className = '', i = 0 }) => (
  <motion.div
    custom={i}
    initial="hidden"
    animate="visible"
    variants={fadeInVariants}
    whileHover={{ y: -4, borderColor: 'rgba(173, 198, 255, 0.35)' }}
    transition={cardTransition}
    className={`bg-surface-container-low border border-outline-variant/25 rounded-[28px] overflow-hidden p-6 md:p-8 ${className}`}
  >
    {children}
  </motion.div>
);

function App() {
  const [lang, setLang] = useState('en');
  const [greetingIndex, setGreetingIndex] = useState(0);
  const carouselRef = useRef(null);
  const t = translations[lang];
  const totalExperiences = experiences.length;

  const getCurrentSlide = () => {
    if (!carouselRef.current) return 0;
    const { scrollLeft, clientWidth } = carouselRef.current;
    if (!clientWidth) return 0;
    return Math.round(scrollLeft / clientWidth);
  };

  const goToSlide = (index) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollTo({
      left: index * carouselRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const handleNext = () => {
    const current = getCurrentSlide();
    goToSlide(current >= totalExperiences - 1 ? 0 : current + 1);
  };

  const handlePrev = () => {
    const current = getCurrentSlide();
    goToSlide(current <= 0 ? totalExperiences - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans selection:bg-primary/30 antialiased">

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-surface/75 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="max-w-[1120px] mx-auto flex justify-between items-center h-16 px-6">
          <a href="#top" className="font-semibold tracking-tight text-lg md:text-xl">Rafael Badaró.</a>
          <div className="flex items-center gap-3">
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
            <a
              href="/cv.pdf"
              download
              className="px-4 py-2 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] border border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:border-primary/40 transition-colors"
            >
              {t.downloadCv}
            </a>
          </div>
        </div>
      </nav>

      {/* --- MAIN --- */}
      <main id="top" className="pt-28 pb-24 px-6 max-w-[1120px] mx-auto space-y-5">

        {/* INTRO */}
        <section className="pt-6 pb-4 md:pt-10 md:pb-6">
          <div className="mb-5 overflow-hidden" style={{ minHeight: '5.5rem' }}>
            <AnimatePresence mode="wait">
              <motion.h1
                key={greetingIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-[5.5rem] font-semibold tracking-tight leading-tight"
              >
                {greetings[greetingIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <p className="text-on-surface-variant text-base md:text-xl max-w-2xl">{t.aboutMeBody}</p>
        </section>

        {/* SOCIAL */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold italic tracking-tight mb-5">{t.linksTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* APP STORE */}
            <BentoCard className="relative min-h-[140px] group !p-0 !border-primary/40 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent" i={1}>
              <a href="https://badaroapps.netlify.app/" target="_blank" rel="noreferrer" className="relative h-full w-full block p-6 md:p-7">
                <img src="/appstore.png" alt="" className="absolute right-5 top-1/2 -translate-y-1/2 w-24 h-24 object-contain rounded-[22px] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 h-full flex items-center"><p className="text-2xl font-semibold pr-24">{t.seeMyApps}</p></div>
              </a>
            </BentoCard>
            <BentoCard className="relative min-h-[120px] group !p-0" i={2}>
              <a href="https://medium.com/@rafabadaro.15" target="_blank" rel="noreferrer" className="relative h-full w-full block p-6 md:p-7">
                <img src="https://cdn-icons-png.flaticon.com/512/81/81661.png" alt="" className="absolute right-5 top-1/2 -translate-y-1/2 w-24 h-24 object-contain opacity-15 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative z-10 h-full flex items-center"><p className="text-2xl font-semibold">{t.tryToWrite}</p></div>
              </a>
            </BentoCard>
            <BentoCard className="relative min-h-[120px] group !p-0" i={2}>
              <a href="https://www.youtube.com/channel/UCXEP5NLGHNxbS9-0HBPtSsw" target="_blank" rel="noreferrer" className="relative h-full w-full block p-6 md:p-7">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" className="absolute right-5 top-1/2 -translate-y-1/2 w-24 h-24 object-contain opacity-15 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative z-10 h-full flex items-center"><p className="text-2xl font-semibold">{t.tryToEdit}</p></div>
              </a>
            </BentoCard>
            <BentoCard className="relative min-h-[120px] group !p-0" i={2}>
              <a href="https://www.linkedin.com/in/rafael-badaro/" target="_blank" rel="noreferrer" className="relative h-full w-full block p-6 md:p-7">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" className="absolute right-5 top-1/2 -translate-y-1/2 w-24 h-24 object-contain opacity-20 group-hover:opacity-35 transition-opacity duration-300" />
                <div className="relative z-10 h-full flex items-center"><p className="text-2xl font-semibold">{t.linkedin}</p></div>
              </a>
            </BentoCard>

            <BentoCard className="relative min-h-[120px] group !p-0" i={3}>
              <a href="https://github.com/RafaelBadaro" target="_blank" rel="noreferrer" className="relative h-full w-full block p-6 md:p-7">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" className="absolute right-5 top-1/2 -translate-y-1/2 w-24 h-24 object-contain opacity-15 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative z-10 h-full flex items-center"><p className="text-2xl font-semibold">{t.github}</p></div>
              </a>
            </BentoCard>

            <BentoCard className="relative min-h-[120px] group !p-0" i={4}>
              <a href="mailto:rafaelaraujobadaro@gmail.com" className="relative h-full w-full block p-6 md:p-7">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="" className="absolute right-5 top-1/2 -translate-y-1/2 w-24 h-24 object-contain opacity-15 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative z-10 h-full flex items-center"><p className="text-2xl font-semibold">{t.gmail}</p></div>
              </a>
            </BentoCard>
          </div>
        </section>

        {/* EXPERIENCIAS + STACK */}
        <section id="projects" className="pt-6">
          <h2 className="text-2xl md:text-3xl font-semibold italic tracking-tight mb-5">{t.experiencesTitle}</h2>
          <BentoCard className="group relative !p-0 h-[420px]" i={2}>
            <button type="button" onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-30 px-2 py-8 text-on-surface/80 text-3xl leading-none hover:text-on-surface transition-colors" aria-label="Previous">‹</button>
            <button type="button" onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-30 px-2 py-8 text-on-surface/80 text-3xl leading-none hover:text-on-surface transition-colors" aria-label="Next">›</button>

            <div ref={carouselRef} className="overflow-x-auto h-full snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex h-full">
                {experiences.map((experience) => (
                  <article key={experience.title.en} className="relative min-w-full h-full snap-start overflow-hidden">

                    {/* Mesh gradient */}
                    <div
                      className="absolute inset-0 w-full h-full"
                      style={{ background: experience.gradient }}
                    />

                    {/* Grain texture overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.045] mix-blend-overlay pointer-events-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        backgroundSize: '128px 128px',
                      }}
                    />

                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent z-10" />

                    <div className="absolute bottom-0 p-6 md:p-8 z-20 space-y-4 w-full">
                      <div className="flex gap-2 flex-wrap">
                        {experience.tech.map((tech) => (
                          <span key={`${experience.title.en}-${tech}`} className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold border border-white/10 text-on-surface">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold">{experience.title[lang]}</h3>
                      <p className="text-on-surface-variant text-sm md:text-base max-w-xl">{experience.summary[lang]}</p>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-on-surface-variant">
                        {experience.startDate} - {experience.endDate}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </BentoCard>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-outline-variant/10 mt-2">
        <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-semibold">
          <p className="opacity-55">© 2026 Rafael Badaró</p>
          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://github.com/RafaelBadaro" target="_blank" rel="noreferrer" className="opacity-55 hover:opacity-100 transition-opacity">GitHub</a>
            <a href="https://www.linkedin.com/in/rafael-badaro/" target="_blank" rel="noreferrer" className="opacity-55 hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="/cv.pdf" download className="px-3 py-2 rounded-full border border-outline-variant/30 text-[10px] opacity-70 hover:opacity-100 hover:border-primary/40 transition-colors">{t.downloadCv}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;