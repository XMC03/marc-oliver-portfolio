import { useEffect, useState } from 'react';
import Navbar   from './components/Navbar';
import Home     from './components/Home';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Contact  from './components/Contact';

export default function App() {
  const [showTop, setShowTop] = useState(false);

  // ── Scroll Reveal — same logic as your script.js ──
  useEffect(() => {
    const els = document.querySelectorAll('section, .skill-card, .project');
    els.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ── Back-to-top visibility — same logic as your script.js ──
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2026 Marc Oliver Cataniag</p>
      </footer>

      {/* Back-to-top button — same style as your script.js inline CSS */}
      <button
        title="Back to top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          background: 'linear-gradient(45deg, #00ffd5, #00aaff)',
          color: '#0b0b0b',
          border: 'none',
          borderRadius: '50%',
          width: '42px',
          height: '42px',
          fontSize: '18px',
          fontWeight: '700',
          cursor: 'pointer',
          opacity: showTop ? '1' : '0',
          pointerEvents: showTop ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
          zIndex: 999,
        }}
      >
        ↑
      </button>
    </>
  );
}
