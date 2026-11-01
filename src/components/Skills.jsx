// Original portfolio skill descriptions and detailed lists.
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

export default function Skills() {
  return (
    <section id="skills" className="skills-section wrap" aria-labelledby="skills-heading">
      <div className="section-heading">
        <div><p className="eyebrow">03 / What I bring</p><h2 id="skills-heading">My growing<br /><em>toolkit.</em></h2></div>
        <p>Practical skills, a problem-solving mindset,<br />and a willingness to keep learning.</p>
      </div>
      <div className="restored-skills-grid">
        {Object.entries(SKILL_DATA).map(([key, skill]) => (
          <article className="restored-skill" key={key} aria-labelledby={`skill-${key}`}>
            <div className="restored-skill-header">
              <img src={skill.img} alt="" loading="lazy" />
              <div>
                <h3 id={`skill-${key}`}>{skill.title}</h3>
                <p className="skill-rating" aria-label="Self-assessed proficiency: 4 out of 5">{skill.rating}</p>
              </div>
            </div>
            <p className="restored-skill-description">{skill.desc}</p>
            <ul className="restored-skill-list">
              {skill.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
