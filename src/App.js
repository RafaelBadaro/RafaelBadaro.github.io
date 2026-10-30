import React, { useEffect, useState } from 'react';
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
const email = 'rafaelaraujobadaro@gmail.com';
const greetings = ['Hello!', 'Olá!', 'こんにちは！', 'Hola!', 'Salut!'];

const translations = {
  en: {
    linkedin: '💼 Where I look for jobs',
    github: '👨‍💻 Where you can find my code',
    gmail: '📧 My email',
    copied: 'Copied!',
    gmailHint: 'click to copy my email',
    gmailHintAside: "(i hate the 'mailto' thingy)",
    downloadCv: 'CV',
    appStore: 'App Store',
    seeMyApps: '📲 Check out my apps!',
    tryToWrite: '🖋️ Where I write',
    tryToEdit: '📹 Where I edit',
    linksTitle: 'some interesting links',
  },
  pt: {
    linkedin: '💼 Onde eu procuro emprego',
    github: '👨‍💻 Onde você acha meu código',
    gmail: '📧 Meu email',
    copied: 'Copiado!',
    gmailHint: 'clique pra copiar meu email',
    gmailHintAside: "(odeio o 'mailto')",
    downloadCv: 'CV',
    appStore: 'App Store',
    seeMyApps: '📲 Veja meus apps!',
    tryToWrite: '🖋️ Onde eu escrevo',
    tryToEdit: '📹 Onde eu edito',
    linksTitle: 'some interesting links',
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
  const [copied, setCopied] = useState(false);
  const t = translations[lang];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      window.prompt('Copy:', email);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-surface text-on-surface font-sans selection:bg-primary/30 antialiased">

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
          <div className="text-on-surface-variant text-base md:text-xl max-w-2xl space-y-4">
            <p>Nice to meet you!<br />My name is Rafael, but you can call me <em>Rafa, Badaró, Bada</em> (i have a lot of nicknames lol)</p>
            <p>Currently working as an <strong className="italic mr-1">iOS Software Engineer</strong> for <strong className="italic">WeFit</strong></p>
            <p>I love my <em className="font-serif">fiancé</em>! (Shoutout mo)</p>
            <p>I like: creating things, chatting (literally I talk about anything lol), cooking/eating and fitness.</p>
            <p>
              Lately been getting into <a href="https://medium.com/@rafabadaro.15" target="_blank" rel="noreferrer" className="underline underline-offset-4 text-on-surface hover:text-primary transition-colors">writing</a> and <a href="https://www.youtube.com/channel/UCXEP5NLGHNxbS9-0HBPtSsw" target="_blank" rel="noreferrer" className="underline underline-offset-4 text-on-surface hover:text-primary transition-colors">editing</a>.
            </p>
            <p>Currently reading: <em className="mr-1">Atlas Shrugged</em> by Ayn Rand</p>
            <p>Hope you have a great day/night! (I have no idea where you at right now)</p>
            <p>Thank you for visiting my portfolio ;)</p>
          </div>
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
                <div className="relative z-10 h-full flex items-center"><p className="text-xl font-semibold pr-20">{t.github}</p></div>
              </a>
            </BentoCard>

            <BentoCard className={`relative min-h-[120px] group !p-0 transition-colors duration-300 ${copied ? '!bg-emerald-500/15 !border-emerald-400/40' : ''}`} i={4}>
              <button type="button" onClick={copyEmail} className="relative h-full w-full block p-6 md:p-7 text-left">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="" className="absolute right-5 top-1/2 -translate-y-1/2 w-24 h-24 object-contain opacity-15 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <p className="text-2xl font-semibold">{copied ? t.copied : t.gmail}</p>
                  <p className="text-xs text-on-surface-variant mt-1">{t.gmailHint}<br />{t.gmailHintAside}</p>
                </div>
              </button>
            </BentoCard>
          </div>
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