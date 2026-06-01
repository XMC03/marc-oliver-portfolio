import { useEffect, useState } from 'react';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    function updateNav() {
      let current = '';
      SECTIONS.forEach(id => {
        const sec = document.getElementById(id);
        if (sec && window.scrollY >= sec.offsetTop - 130) current = id;
      });
      setActive(current);
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
    return () => window.removeEventListener('scroll', updateNav);
  }, []);

  return (
    <header>
      <div className="container nav">
        <h2 className="accent">Marc Oliver Cataniag</h2>
        <nav>
          {SECTIONS.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
            >
              {id.toUpperCase()}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
