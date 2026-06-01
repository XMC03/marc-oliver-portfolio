import { useEffect, useRef } from 'react';
import profile from '../assets/profile.jpg';

const ROLES = ['Programmer', 'Problem Solver', 'Hardware Enthusiast', 'Debugger'];

export default function Home() {
  const typingRef = useRef(null);
  const state = useRef({ roleIndex: 0, charIndex: 0, isDeleting: false });

  useEffect(() => {
    let timeout;

    function type() {
      const { roleIndex, charIndex, isDeleting } = state.current;
      const current = ROLES[roleIndex];

      if (typingRef.current) {
        typingRef.current.textContent = isDeleting
          ? current.slice(0, charIndex - 1)
          : current.slice(0, charIndex + 1);
      }

      state.current.charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      let delay = isDeleting ? 60 : 100;

      if (!isDeleting && state.current.charIndex === current.length) {
        delay = 1800;
        state.current.isDeleting = true;
      } else if (isDeleting && state.current.charIndex === 0) {
        state.current.isDeleting = false;
        state.current.roleIndex = (roleIndex + 1) % ROLES.length;
        delay = 400;
      }

      timeout = setTimeout(type, delay);
    }

    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="container home">
      <div className="home-text">
        <h3>GIVEMECOFFEE</h3>
        <h1>I'm a <span id="typing-target" ref={typingRef}></span></h1>
        <p>
          I build programs and applications with clean logic, focusing on performance,
          simplicity, and reliability.
        </p>
      </div>
      <div className="home-img">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
}
