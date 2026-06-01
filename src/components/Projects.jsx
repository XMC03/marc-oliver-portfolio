import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="project">
          <img src={project1} alt="Portfolio Project" />
          <div className="project-info">
            <h3>HTML with CSS Portfolio</h3>
            <p>Personal portfolio built using pure HTML and CSS.</p>
          </div>
        </div>

        <div className="project">
          <div className="project-imgs">
            <img src={project2} alt="Benchmark Screenshot 1" />
            <img src={project3} alt="Benchmark Screenshot 2" />
          </div>
          <div className="project-info">
            <h3>System Benchmark Tool</h3>
            <p>Tool for testing CPU and GPU performance.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
