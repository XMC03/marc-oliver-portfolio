import { useState } from 'react';
import Skills from './components/Skills';
import profile from './assets/profile.jpg';
import portfolio from './assets/portfolio-preview.png';
import benchmark from './assets/project2.png';
import benchmarkDetail from './assets/project3.png';

function Arrow() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>;
}

const CONTACT_EMAIL = 'cataniagmarcoliver@gmail.com';
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent('Let’s work together')}`;
const BENCHMARK_IMAGES = [
  { src: benchmark, label: 'Fire Strike', alt: '3DMark Fire Strike benchmark result and comparison chart' },
  { src: benchmarkDetail, label: 'GPU reference', alt: 'GeForce RTX 4060 Laptop GPU specifications and average benchmark score' },
];


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [benchmarkIndex, setBenchmarkIndex] = useState(0);
  const [copyStatus, setCopyStatus] = useState('');
  const currentBenchmark = BENCHMARK_IMAGES[benchmarkIndex];

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyStatus('Email address copied.');
    } catch {
      setCopyStatus('Could not copy automatically. Select the email address below to copy it.');
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Marc Oliver, home">mo<span>.</span></a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button>
        <nav id="navigation" className={menuOpen ? 'is-open' : ''} aria-label="Main navigation">
          {['work', 'about', 'skills', 'contact'].map(section => <a key={section} href={`#${section}`} onClick={() => setMenuOpen(false)}>{section}</a>)}
        </nav>
        <a className="header-contact" href="#contact">Let’s talk <Arrow /></a>
      </header>
      <main id="main">
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Open to opportunities</p>
            <h1>Curiosity.<br />Code.<br /><span>Possibility.</span></h1>
            <p className="hero-description">I’m Marc Oliver, a programmer exploring the space between thoughtful software and the hardware that makes it work.</p>
            <a className="button dark" href="#work">Explore my work <Arrow /></a>
          </div>
          <div className="portrait-card">
            <div className="portrait-caption"><span>A little about the person<br />behind the code.</span><span aria-hidden="true">✳</span></div>
            <img src={profile} alt="Marc Oliver Cataniag" />
            <div className="portrait-footer"><span>Marc Oliver Cataniag</span><span>Programmer</span></div>
          </div>
          <div className="hero-bottom"><span>Always learning. Always building.</span><a href="#work">Scroll to explore ↓</a></div>
        </section>
        <section id="work" className="work-section">
          <div className="wrap">
            <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2>Ideas made<br /><em>tangible.</em></h2></div><p>From an AI-powered lighting shop<br />to experiments in web and hardware.</p></div>
            <article className="featured-project">
              <div className="goodmark-visual" role="img" aria-label="Illustration of a pendant light for the GoodMark lighting shop">
                <span className="goodmark-wordmark">GoodMark<span>.</span></span>
                <svg className="pendant-light" viewBox="0 0 400 300" fill="none" aria-hidden="true">
                  <defs><radialGradient id="light-glow"><stop stopColor="#f5dfaa" stopOpacity=".7" /><stop offset="1" stopColor="#f5dfaa" stopOpacity="0" /></radialGradient></defs>
                  <ellipse cx="200" cy="245" rx="160" ry="50" fill="url(#light-glow)" />
                  <path d="M200 0v110" stroke="#b0a08a" strokeWidth="2" />
                  <path d="M175 110h50l68 82H107l68-82Z" fill="#cfb68e" />
                  <path d="M175 110h50l68 82H107l68-82Z" stroke="#e2cba8" />
                  <ellipse cx="200" cy="192" rx="93" ry="9" fill="#f8e6bc" />
                  <path d="M200 201v9" stroke="#fff2d4" strokeWidth="5" strokeLinecap="round" />
                </svg>
                <span className="goodmark-visual-caption">Lighting × intelligent commerce</span>
              </div>
              <div className="featured-project-copy">
                <p className="eyebrow">Featured / Capstone project</p>
                <h3>GoodMark</h3>
                <p>A lighting-fixture shop that brings online shopping, AI assistance, and sales insights together.</p>
                <ul className="project-features">
                  <li><strong>React storefront</strong><span>The frontend for browsing lighting fixtures.</span></li>
                  <li><strong>DeepSeek AI</strong><span>A chatbot and product recommendations to help shoppers explore their options.</span></li>
                  <li><strong>Prophet analytics</strong><span>Sales analytics and forecasting powered by Prophet.</span></li>
                </ul>
                <div className="tags"><span>React</span><span>DeepSeek</span><span>Prophet</span><span>E-commerce</span></div>
                <a className="project-link" href="https://goodmark.shop" target="_blank" rel="noreferrer">Visit GoodMark <Arrow /></a>
              </div>
            </article>
            <div className="projects-grid">
              <article className="project-card">
                <a className="project-visual portfolio-visual" href={portfolio} target="_blank" rel="noreferrer" aria-label="Open personal portfolio screenshot at full size (new tab)">
                  <img src={portfolio} alt="Screenshot of this portfolio’s redesigned homepage" loading="lazy" />
                  <span className="preview-hint">View full screenshot <Arrow /></span>
                </a>
                <div className="project-heading"><h3>Personal portfolio</h3><span>01</span></div>
                <p>A responsive personal portfolio built with React, with a focus on clear design and accessible navigation.</p>
                <div className="tags"><span>React</span><span>CSS</span><span>Web design</span></div>
              </article>
              <article className="project-card">
                <a className="project-visual benchmark-visual" href={currentBenchmark.src} target="_blank" rel="noreferrer" aria-label={`Open ${currentBenchmark.label} screenshot at full size (new tab)`}>
                  <img src={currentBenchmark.src} alt={currentBenchmark.alt} loading="lazy" />
                  <span className="preview-hint">View full screenshot <Arrow /></span>
                </a>
                <div className="benchmark-options" role="group" aria-label="Choose a benchmark screenshot">
                  {BENCHMARK_IMAGES.map((image, index) => (
                    <button key={image.label} type="button" aria-pressed={benchmarkIndex === index} onClick={() => setBenchmarkIndex(index)}>{image.label}</button>
                  ))}
                </div>
                <div className="project-heading"><h3>System benchmarking</h3><span>02</span></div>
                <p>Exploring CPU and GPU performance through benchmark results and hardware reference comparisons.</p>
                <div className="tags"><span>Performance</span><span>Hardware</span><span>Testing</span></div>
              </article>
            </div>
          </div>
        </section>
        <section id="about" className="about-section wrap">
          <p className="eyebrow">02 / Behind the code</p>
          <div className="about-grid"><h2>A curious mind.<br />A hands-on<br /><em>approach.</em></h2><div className="about-copy"><p className="large-copy">I like understanding how things work—and finding ways to make them work better.</p><p>I’m Marc Oliver Cataniag, a programmer with a focus on software and hardware. I enjoy building systems, exploring technologies, and working through complex problems.</p><p>Whether I’m experimenting with hardware or refining a piece of code, I’m driven by the same thing: learning something new and putting it into practice.</p><div className="about-facts"><div><span>ROLE</span><strong>Programmer</strong></div><div><span>FOCUS</span><strong>Software & hardware</strong></div></div></div></div>
        </section>
        <Skills />
        <section id="certifications" className="certifications-section wrap" aria-labelledby="certifications-heading">
          <div className="section-heading">
            <div><p className="eyebrow">04 / Continued learning</p><h2 id="certifications-heading">Certifications.</h2></div>
          </div>
          <article className="certification-card">
            <span className="certification-symbol" aria-hidden="true">J</span>
            <div><p className="eyebrow">Programming certification</p><h3>Java Fundamentals</h3></div>
          </article>
        </section>
        <section id="contact" className="contact-section"><div className="wrap"><p className="eyebrow">05 / Let’s connect</p><h2>Good things start<br />with a <em>hello.</em></h2><div className="contact-bottom"><p>Have a project, an opportunity, or an idea?<br />I’d love to hear about it.</p><div className="contact-actions"><a className="button dark" href={GMAIL_COMPOSE} target="_blank" rel="noreferrer">Say hello <Arrow /></a><span className="contact-action-hint">Opens Gmail in a new tab</span><button className="copy-email" type="button" onClick={copyEmail}>Copy email address</button><span className="copy-status" role="status">{copyStatus}</span></div></div><div className="contact-links"><a className="email-link" href="mailto:cataniagmarcoliver@gmail.com">cataniagmarcoliver@gmail.com</a><a className="email-link" href="mailto:cataniag.258053@sjdelmonte.sti.edu.ph">cataniag.258053@sjdelmonte.sti.edu.ph</a><a className="email-link" href="https://github.com/XMC03" target="_blank" rel="noreferrer">GitHub / XMC03 <Arrow /></a></div></div></section>
      </main>
      <footer className="wrap"><a className="wordmark" href="#home" aria-label="Back to home">mo<span>.</span></a><p>© {new Date().getFullYear()} Marc Oliver Cataniag</p><a href="#home">Back to top ↑</a></footer>
    </>
  );
}
