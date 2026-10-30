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
const SUPABASE_URL = 'https://wnpphrztoqdzukenzkyj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InducHBocnp0b3FkenVrZW56a3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzNjczNDUsImV4cCI6MjEwODk0MzM0NX0.AcLDslZzUixt8ZCZ1lRwL_Bafcrcw1qtWiyA610lfpM';
const supabaseHeaders = { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}`, 'Content-Type': 'application/json' };
const HIGH_FIVE_KEY = 'highFiveCount';
const HIGH_FIVE_COOLDOWN_MS = 1000;
const CONFETTI_COLORS = ['#adc6ff', '#ff8fab', '#ffd166', '#06d6a0', '#c77dff'];
const email = 'rafaelaraujobadaro@gmail.com';
const greetings = ['Hello!', 'Olá!', 'こんにちは！', 'Hola!', 'Salut!'];

const intro = {
  en: (
    <>
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
    </>
  ),
  pt: (
    <>
            <p>Prazer em te conhecer!<br />Me chamo Rafael, mas pode me chamar de <em>Rafa, Badaró, Bada</em> (tenho vários apelidos kkk)</p>
            <p>Atualmente trabalho como <strong className="italic mr-1">Engenheiro de Software iOS</strong> na <strong className="italic">WeFit</strong></p>
            <p>Eu amo minha <em className="font-serif">noiva</em>! (Oi, mo)</p>
            <p>Eu gosto de: criar coisas, conversar (literalmente adoro bater papo sobre qualquer coisa kkk), cozinhar/comer e fitness.</p>
            <p>
              Ultimamente tenho brincado de <a href="https://medium.com/@rafabadaro.15" target="_blank" rel="noreferrer" className="underline underline-offset-4 text-on-surface hover:text-primary transition-colors">escrever</a> e <a href="https://www.youtube.com/channel/UCXEP5NLGHNxbS9-0HBPtSsw" target="_blank" rel="noreferrer" className="underline underline-offset-4 text-on-surface hover:text-primary transition-colors">editar vídeos</a>.
            </p>
            <p>Livro que tô lendo: <em className="mr-1">A Revolta de Atlas</em> de Ayn Rand</p>
            <p>Espero que você tenha um ótimo dia/noite! (não faço ideia de onde você está agora)</p>
            <p>Obrigado por visitar meu portfólio ;)</p>
    </>
  ),
};

const translations = {
  en: {
    linkedin: '💼 Where I look for jobs',
    github: '👨‍💻 Where you can find my code',
    gmail: '📧 My email',
    copied: 'Copied!',
    highFive: '✋ Tap to high five!',
    highFiveLabel: (n) => `high ${n === 1 ? 'five' : 'fives'} so far`,
    highFivesGiven: (n) => `you gave me ${n} high ${n === 1 ? 'five' : 'fives'}!`,
    highFiveMilestones: {
      5: 'wow!',
      10: 'ok, my hand hurts',
      20: 'dude what',
      30: 'ok dude, you can stop now',
      42: '42 huh',
      67: 'really, six seven?',
      69: 'really, six nine?',
      80: 'you are curious huh',
      100: 'wow 100, congrats, if you tapped this far please send me a message lol',
    },
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
    highFive: '✋ Toque pra dar um high five!',
    highFiveLabel: (n) => `high ${n === 1 ? 'five' : 'fives'} até agora`,
    highFivesGiven: (n) => `você me deu ${n} high ${n === 1 ? 'five' : 'fives'}!`,
    highFiveMilestones: {
      5: 'uau!',
      10: 'ok, minha mão tá doendo',
      20: 'mano, quê',
      30: 'ok, pode parar agora',
      42: '42 hein',
      67: 'sério, six seven?',
      69: 'sério, meia nove?',
      80: 'você tem muita curiosidade',
      100: 'uau 100, parabéns, se você chegou até aqui me manda uma mensagem kkk',
    },
    gmailHint: 'clique pra copiar meu email',
    gmailHintAside: "(odeio o 'mailto')",
    downloadCv: 'CV',
    appStore: 'App Store',
    seeMyApps: '📲 Veja meus apps!',
    tryToWrite: '🖋️ Onde eu escrevo',
    tryToEdit: '📹 Onde eu edito',
    linksTitle: 'alguns links interessantes',
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
  const [highFives, setHighFives] = useState(null);
  const [cooldown, setCooldown] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [myHighFives, setMyHighFives] = useState(() => {
    try { return Number(localStorage.getItem(HIGH_FIVE_KEY)) || 0; } catch (e) { return 0; }
  });
  const t = translations[lang];
  const milestone = Object.keys(t.highFiveMilestones).map(Number).filter((n) => n <= myHighFives).pop();

  useEffect(() => {
    fetch(`${SUPABASE_URL}/rest/v1/high_fives?select=count&id=eq.1`, { headers: supabaseHeaders })
      .then((res) => res.json())
      .then((rows) => setHighFives(Number(rows[0].count)))
      .catch(() => {});
  }, []);

  const sendHighFive = async () => {
    if (cooldown) return;
    setCooldown(true);
    const burst = Array.from({ length: 80 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 100 + Math.random() * 180;
      return {
        id: `${Date.now()}-${i}`,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance - 30,
        rotate: Math.random() * 540 - 270,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      };
    });
    setConfetti(burst);
    setTimeout(() => setConfetti([]), 1000);
    setTimeout(() => setCooldown(false), HIGH_FIVE_COOLDOWN_MS);
    const next = myHighFives + 1;
    setMyHighFives(next);
    try { localStorage.setItem(HIGH_FIVE_KEY, String(next)); } catch (e) { /* ignore */ }
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_high_five`, { method: 'POST', headers: supabaseHeaders });
      setHighFives(Number(await res.json()));
    } catch (e) { /* ignore */ }
  };

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
            {intro[lang]}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none">
                    {confetti.map((c) => (
                      <motion.span
                        key={c.id}
                        initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
                        animate={{ x: c.x, y: c.y + 40, opacity: 0, scale: 0.6, rotate: c.rotate }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-1/2 w-2 h-3 rounded-[2px]"
                        style={{ backgroundColor: c.color }}
                      />
                    ))}
                  </div>
                <motion.button
                  type="button"
                  onClick={sendHighFive}
                  disabled={cooldown}
                  whileTap={{ scale: 0.93 }}
                  className="relative shrink-0 whitespace-nowrap px-6 py-3 rounded-full text-sm font-semibold border border-outline-variant/30 bg-surface-container-high text-on-surface hover:border-primary/40 transition-colors disabled:cursor-default"
                >
                  <span className="relative">{t.highFive}</span>
                </motion.button>
                </div>
                {highFives !== null && (
                  <div className="flex flex-col leading-tight italic text-on-surface-variant">
                    <span className="text-xl font-semibold tabular-nums">{highFives}</span>
                    <span className="text-sm">{t.highFiveLabel(highFives)}</span>
                  </div>
                )}
              </div>
              {myHighFives > 0 && (
                <p className="text-sm italic text-on-surface-variant">
                  {t.highFivesGiven(myHighFives)}
                  {milestone && <><br /><strong>{t.highFiveMilestones[milestone]}</strong></>}
                </p>
              )}
            </div>
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