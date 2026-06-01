import { useState, useEffect } from 'react';

// ── Exact skill data from your script.js ──
import htmlImg      from '../assets/html.png';
import programmingImg from '../assets/programming.png';
import hardwareImg  from '../assets/hardware.png';
import debuggingImg from '../assets/debugging.png';

const SKILL_DATA = {
  html: {
    img: htmlImg,
    title: 'HTML',
    rating: '★★★★☆',
    desc: 'I structure web pages with clean, semantic HTML building accessible, well-organized layouts that form the backbone of every project.',
    items: [
      'Semantic HTML5 elements',
      'Forms & input validation',
      'Accessible markup (ARIA)',
      'Meta tags & SEO basics',
      'Embedding media & iframes',
      'Linking stylesheets & scripts',
    ],
  },
  programming: {
    img: programmingImg,
    title: 'Programming',
    rating: '★★★★☆',
    desc: 'I write clean, logical code focused on performance and readability from algorithms to full application logic.',
    items: [
      'JavaScript',
      'Python basics',
      'Object-oriented programming',
      'Data structures & algorithms',
      'C# Fundamentals',
    ],
  },
  hardware: {
    img: hardwareImg,
    title: 'PC Hardware',
    rating: '★★★★☆',
    desc: 'I have hands-on experience assembling, diagnosing, and optimizing PC systems from component selection to troubleshooting.',
    items: [
      'PC assembly & disassembly',
      'Component compatibility checks',
      'CPU & GPU benchmarking',
      'Thermal management & cooling',
      'RAM & storage configuration',
      'BIOS / UEFI setup',
    ],
  },
  debugging: {
    img: debuggingImg,
    title: 'Debugging',
    rating: '★★★★☆',
    desc: 'I methodically trace, isolate, and fix bugs using browser tools, logs, and systematic testing to resolve issues efficiently.',
    items: [
      'Browser DevTools profiling',
      'Console & log analysis',
      'Breakpoints & step-through debugging',
      'Error handling & try/catch',
    ],
  },
};

// ── Modal component ──
function SkillModal({ skill, onClose }) {
  // Lock scroll + Escape key — same behaviour as your original closeSkillModal()
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    // clicking the overlay backdrop closes the modal
    <div
      className="skill-modal-overlay active"
      id="skillModalOverlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="skill-modal">
        <button className="skill-modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className="skill-modal-header">
          <img className="skill-modal-img" id="modalImg" src={skill.img} alt={skill.title} />
          <div>
            <h3 className="skill-modal-title" id="modalTitle">{skill.title}</h3>
            <p className="skill-modal-rating" id="modalRating">{skill.rating}</p>
          </div>
        </div>
        <p className="skill-modal-desc" id="modalDesc">{skill.desc}</p>
        <p className="skill-modal-list-label">What I can do:</p>
        <ul className="skill-modal-list" id="modalList">
          {skill.items.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

// ── Skills section ──
export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="skills" className="container">
      <h2>Skills</h2>
      <div className="skills-container">

        {Object.entries(SKILL_DATA).map(([key, skill]) => (
          <div
            key={key}
            className="skill-card"
            onClick={() => setActiveSkill(skill)}
            role="button"
            tabIndex={0}
            aria-label={`View ${skill.title} skills`}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setActiveSkill(skill); }}
          >
            <img src={skill.img} alt={skill.title} />
            <h3>{skill.title}</h3>
            <p className="stars">{skill.rating}</p>
            <span className="skill-card-hint">Click to view</span>
          </div>
        ))}

      </div>

      {/* Render modal only when a skill is selected */}
      {activeSkill && (
        <SkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
      )}
    </section>
  );
}
