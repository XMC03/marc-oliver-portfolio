export default function About() {
  return (
    <section id="about">
      <div className="container about-layout">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm Marc Oliver, a programmer passionate about building systems,
            exploring technologies, and solving complex problems.
          </p>
          <p>
            I enjoy experimenting with hardware, optimizing workflows, and improving
            my skills every day.
          </p>
        </div>
        <div className="about-box">
          <div className="info-item">
            <span className="info-label">Name</span>
            <span className="info-value">Marc Oliver Cataniag</span>
          </div>
          <div className="info-item">
            <span className="info-label">Course</span>
            <span className="info-value">BSIT</span>
          </div>
          <div className="info-item">
            <span className="info-label">Focus</span>
            <span className="info-value">Programming &amp; Hardware</span>
          </div>
          <div className="info-item">
            <span className="info-label">Status</span>
            <span className="info-value accent">Open to Opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
